import { modelViaje } from "../models/viaje.model.js";
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";

export const createViaje = async (req, res) => {
    try{
        await modelViaje.create({...req.body})
        return res.status(201).json({message: 'Viaje pedido.'})
    }catch(e){
        return res.status(400).json({ error: e})
    }
    
}


export const readViajes = async (req, res) => {
    try{
        if(req.body?.Id_Viaje){
            var Viajes = await modelViaje.findById(req.body.Id_Viaje);
            (Viajes == null)
            ? res.status(404).json({ message: 'No hay viajes para este identificador.'})
            : res.status(200).json(Viajes)
        }else{
            return res.status(404).json({ message: 'Debes indicar el identificador del viaje.'})
        }
    }catch(e){
        return res.status(400).json({ error: e})
    }
}

export const readViajesAdmin = async (req, res) => {
    try{
        if(Object.keys(req.body).length > 0){
            var Viajes = await modelViaje.find({...req.body})  
        }else{
            var Viajes = await modelViaje.find().all()
        }
        (Viajes == null)
        ? res.status(404).json({ message: 'No hay viajes para este identificador.'})
        : res.status(200).json(Viajes)
    }catch(e){
        return res.status(400).json({ error: e})
    }
}


export const updateViaje = async (req, res) => {
    return res.status(201).json({ message: 'Has actualizado correctamente el viaje.'})
}

export const removeViaje = async (req, res) => {
    try{

        if(Object.keys(req.body).length > 0 && req.session?.Rol == "admin" ){
            var remove = await modelViaje.deleteOne({...body });
        }else if(req.session?.Rol == "admin"){
            res.status(400).json({message: "Debe indicar algun parametro del viaje para eliminar."})
        }else if(req.body?.Id_Viaje){
            var remove = await modelViaje.deleteOne({_id: req.body.Id_Viaje})
        }else{
            res.status(400).json({message: "Debes indicar el identificador del viaje a eliminar."})
        }

        (remove.deletedCount == 1)
        ? res.status(204).json({message: "Eliminado correctamente"})
        : res.status(404).json({message: "No se ha encontrado el viaje"})
        

    }catch(e){
        return res.status(400).json({ error: e})
    }

}

