import { compare } from "bcrypt";
import omit from "lodash";
import { LoginChecker } from '../validator/login.validator.js';
import { modelStakeHolder } from "../models/stakeHolder.model.js";
import { modelConductor } from "../models/conductor.model.js";
import { dbSecretFields } from "../configs/index.js";


export const login = async (req, res) => {
    const validatorResult = LoginChecker(req.body);
    if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}
    
    
    const user = await modelConductor.findOne({Username: req.body.Username})
    if(!user){ 
        const userStake = await modelStakeHolder.findOne({Username: req.body.Username});
        if(userStake == null){
            return res.status(404).json({message: 'The User is not register.'})
        }
        const isPasswordCorrect = await compare(req.body.Password, userStake.Password)
        if(!isPasswordCorrect){ return res.status(401).json({message: 'Password does not exists.'})}
        req.session.Rol="stake holder"
        req.session.userId = userStake.id;
        res.json({message: 'Stake Holder: you are successfuly logged in'});

    
    }else if(user.Rol == "conductor"){ 
        const isPasswordCorrect = await compare(req.body.Password, user.Password)
        if(!isPasswordCorrect){ return res.status(401).json({message: 'Password does not exists.'})}
        req.session.Rol="conductor";
        req.session.userId = user.id;
        res.json({"message": 'Conductor: you are successfuly logged in'});

    }
    else if(user.Rol == "admin"){
        const isPasswordCorrect = await compare(req.body.Password, user.Password)
        if(!isPasswordCorrect){ return res.status(401).json({message: 'Password does not exists.'})}
        req.session.Rol="admin";
        req.session.userId = user.id;
        res.json({message: 'Admin: you are successfuly logged in'});

    }
    
}

export const logout = (req, res) => {
    delete req.session.userId;
    res.json({ message: "You are sucessfully logged out."})
}

export const loginRequired = async (req, res, next) => {
    if(!req?.session || !req?.session?.userId){ 
        return res.status(403).json({message: "You should login for acces to this route."});
    }
    
    req.user = await modelConductor.findById(req.session.userId);
    if(!req?.user){ 
        req.user = await modelStakeHolder.findById(req.session.userId);
        if(!req.user){
            return res.status(403).json({message: "This user is no longer exists."});
        }
    }
    next();
};

export const profile = (req, res) => {
    res.json({user: omit(req.user.toObject(), dbSecretFields)})
}