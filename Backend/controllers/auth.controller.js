import { compare } from "bcrypt";
import omit from "lodash";
import { LoginChecker } from '../validator/login.validator.js';
import { modelStakeHolder } from "../models/stakeHolder.model.js";
import { modelConductor } from "../models/conductor.model.js";
import { dbSecretFields } from "../configs/index.js";


export const login = async (req, res) => {
    try{
        const validatorResult = LoginChecker(req.body);
        if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}
        
        
        const user = await modelConductor.findOne({Username: req.body.Username})
        if(!user){ 
            const userStake = await modelStakeHolder.findOne({Username: req.body.Username});
            if(userStake == null){
                return res.status(404).json({message: 'El usuario no esta registrado.'})
            }
            const isPasswordCorrect = await compare(req.body.Password, userStake.Password)
            if(!isPasswordCorrect){ return res.status(400).json({message: 'Error en la contraseña.'})}
            req.session.Rol="stakeHolder"
            req.session.userId = userStake.id;
            req.session.Nombre_Empresa = userStake.Nombre_Empresa
            res.json({message: 'Has iniciado sesion correctamente como Stake Holder.'});
        
        }else if(user.Rol == "conductor"){ 
            const isPasswordCorrect = await compare(req.body.Password, user.Password)
            if(!isPasswordCorrect){ return res.status(400).json({message: 'Error en la contraseña.'})}
            req.session.Rol="conductor";
            req.session.userId = user.id;
            res.json({"message": 'Has iniciado sesion como conductor.'});
        }
        else if(user.Rol == "admin"){
            const isPasswordCorrect = await compare(req.body.Password, user.Password)
            if(!isPasswordCorrect){ return res.status(400).json({message: 'Password does not exists.'})}
            req.session.Rol="admin";
            req.session.userId = user.id;
            res.json({message: 'Has iniciado sesion como administrador.'});
        }
    }catch(e){
        return res.status(400).json({ error: e})
    }

}

export const logout = (req, res) => {
    try{
        delete req.session.userId;
        res.json({ message: "Has cerrado sesion satisfactoriamente."})
    }catch(e){
        return res.status(400).json({ error: e})
    }
    
}

export const loginRequired = async (req, res, next) => {
    try{
        if(!req?.session || !req?.session?.userId){ 
            return res.status(403).json({message: "Necesitas haber inicado sesion para acceder a esta ruta."});
        }
        
        req.user = await modelConductor.findById(req.session.userId);
        if(!req?.user){ 
            req.user = await modelStakeHolder.findById(req.session.userId);
            if(!req.user){return res.status(403).json({message: "El usuario ya no existe mas."});}
        }
        next();
    }catch(e){
        return res.status(400).json({ error: e})
    }

};

export const profile = (req, res) => {
    res.json({user: omit(req.user.toObject(), dbSecretFields)})
}