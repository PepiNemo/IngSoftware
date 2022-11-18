import { modelStakeHolder } from "../models/stakeHolder.model.js";
import { modelConductor } from "../models/conductor.model.js";
import { RegisterStakeChecker } from '../validator/registerStake.validator.js';
import { hash, compare } from "bcrypt";
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";


export const createStakeHolder = async (req, res) => {
    try{
        const validatorResult = RegisterStakeChecker(req.body);
        if (validatorResult !== true) { return res.status(400).json({ message: validatorResult }) }
    
        const hashedPassword = await hash(req.body.Password, 12);
        const user = await modelStakeHolder.create({ ...req.body, Password: hashedPassword, Rol: 'stakeHolder' })
    
        return res.status(201).json({ message: 'Se ha registrador el StakeHolder satisfactoriamente.', user: omit(user.toObject(), dbSecretFields) })    
    }catch(e){
        return res.status(400).json({ error: e})
    }

}

export const readStakeHolder = async (req, res) => {
    try{
        if(Object.values(req.body).length > 0){
            const stakeHolder = await modelStakeHolder.findOne({...req.body});
            (stakeHolder == null)
            ? res.status(404).json({ message: 'No hay un stakeHolder para este identificador.'})
            : res.status(200).json(stakeHolder)
        }else if(req.session?.Rol == "stakeHolder"){
            const {userId} = req.session
            const stakeHolder = await modelStakeHolder.findOne({_id:userId})
            res.status(200).json(stakeHolder)
        }else{
            res.status(400).json({message: "Debe indicar un identificador y su valor del stakeHolder a buscar."})
        }
    }catch(e){
        return res.status(400).json({ error: e})
    }
}

export const readStakeHolders = async (req, res) => {
    try{
        const user = await modelStakeHolder.find().all()
        return res.status(200).json(user)
    }catch(e){
        return res.status(400).json({ error: e})
    }
}

export const updateStakeHolder = async (req, res) => {
    try {
        if (Object.values(req.body).length == 0) { return res.status(400).json({ message: "Debe indicar almenos un parametro a actualizar." }) }

        if (req.body?.Id_StakeHolder && req.body?.Id_Value && req.session.Rol == "admin") {
            var { Id_StakeHolder, Id_Value } = req.body;
        }else if(req.session.Rol == "admin"){
            return res.status(400).json({ message: "Debe indicar el identificador del stake Holder a cambiar." })
        }
        else if (req.session?.Rol == "stakeHolder") {
            var Id_StakeHolder = "_id";
            var Id_Value = req.session.userId;
        }

        if (req.body?.Password) {
            const hashedPassword = await hash(req.body.Password, 12);
            var updateConductor = await modelStakeHolder.updateOne({ [Id_StakeHolder]: Id_Value }, { ...req.body, Password: hashedPassword })
        } else {
            var updateConductor = await modelStakeHolder.updateOne({ [Id_StakeHolder]: Id_Value }, { ...req.body })
        }

        if (updateConductor.acknowledged == false) { return res.status(400).json({ message: "No se puede actualizar un parametro no existente." }) }

        (updateConductor.modifiedCount == 1)
        ? res.status(200).json({message: "Se ha actualizado satisfactoriamente"})
        : res.status(200).json({message: "El parametro ya tiene el valor a cambiar."})

    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: e })
    }

}

export const removeStakeHolder = async (req, res) => {
    try{
        if(Object.values(req.body).length > 0){
            const remove = await modelStakeHolder.deleteOne({ ...req.body});
            (remove.deletedCount == 1)
            ? res.status(204).json({message: "Eliminado correctamente"})
            : res.status(404).json({message: "No se ha encontrado el StakeHolder"})
        }
        else{
            res.status(400).json({message: "Debe indicar el identificar del StakeHolder para eliminar."})
        }
    }catch(e){
        return res.status(400).json({ error: e})
    }


}

export const loginRequiredStake = async (req, res, next) => {
    if(!req.session || !req.session.userId || req.session.Rol!="stakeHolder"){ 
        return res.status(403).json({message: "You should login with user stake holder for acces to this route."});
    }
    
    req.user = await modelStakeHolder.findById(req.session.userId);
    if(!req.user){ return res.status(403).json({message: "This user stake holder id is no longer exists."});}
    next();
};