import { modelViajeSH } from "../models/viajeSH.model.js";
import { dbSecretFields } from "../configs/index.js";
import omit from "lodash";

export const createViajeSH = async (req, res) => {
    try{
        if(req.session?.Rol == "stakeHolder"){
            const viajeSH = await modelViajeSH.create({...req.body, Id_SH: req.session?.userId, Nombre_Empresa: req.session.Nombre_Empresa})
            return res.status(201).json({message: 'Viaje solicitado.', user:omit(viajeSH.toObject(), dbSecretFields )})
        }else if(req.session?.Rol == "admin" && req.body?.Id_SH && req.body?.Nombre_Empresa){
            const viajeSH = await modelViajeSH.create({...req.body})
            return res.status(201).json({message: 'Viaje solicitado.', user:omit(viajeSH.toObject(), dbSecretFields )})
        }else{
            res.status(400).json({message: "Debe el ID del stakeHolder y el nombre de la empresa."})
        }
    }catch(e){
        return res.status(400).json({ error: e})
    }
}

export const readViajesSH = async (req, res) => {
    try{
        var Id_Value = req.session.userId;
        if(Object.keys(req.body).length > 0 ){
            var ViajesSH = await modelViajeSH.find({Id_SH: Id_Value, ...req.body});
        }else{
            var ViajesSH = await modelViajeSH.find({Id_SH: Id_Value});
        }
        (ViajesSH == null)
        ? res.status(404).json({ message: 'No hay viajes para este identificador.'})
        : res.status(200).json(ViajesSH)
    }catch(e){
        return res.status(400).json({ error: e})
    }
}

export const readViajesSHAdmin =  async (req, res) => {
    try {
        if(Object.keys(req.body).length > 0){
            var ViajesSH = await modelViajeSH.find({...req.body})
        }else{
            var ViajesSH = await modelViajeSH.find().all()
        }
        (ViajesSH == null)
        ? res.status(404).json({ message: 'No hay viajes para este identificador.'})
        : res.status(200).json(ViajesSH)
    } catch(e){
        return res.status(400).json({ error: e})
    }
}

export const updateViajeSH = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully travel.'})
}

export const removeViajeSH = async (req, res) => {
    try{
        if(Object.keys(req.body).length > 0 && req.session.Rol == "admin"){
            var remove = await modelViajeSH.deleteOne({...req.body});
        }else if(Object.keys(req.body).length > 0 && req.session.Rol == "stakeHolder"){
            const Id_Value = req.session.userId;
            var remove = await modelViajeSH.deleteOne({Id_SH: Id_Value ,...req.body});
        }else{
            return res.status(400).json({message: "Debe indicar el identificar del viaje a eliminar."})
        }
        (remove.deletedCount == 1)
        ? res.status(204).json({message: "Eliminado correctamente"})
        : res.status(404).json({message: "No se ha encontrado el viaje"})
    }catch(e){
        return res.status(400).json({ error: e})
    }
}

