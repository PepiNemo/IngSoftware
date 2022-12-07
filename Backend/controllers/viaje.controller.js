import { modelViaje } from "../models/viaje.model.js";
import { modelConductor } from "../models/conductor.model.js"

import { conductorPrioritario } from "./conductor.controller.js"
import { SendNotification } from "./subscription.controller.js"


// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))


export const createViaje = async (req, res) => {
    try{
        //Loop de ofrecimiento
        modelConductor.countDocuments().then(async(count_documents) => {
            const {idConductorPrioritario, menorPrioridad} =  await conductorPrioritario();
            const viaje = await modelViaje.create({...req.body, Id_Conductor:idConductorPrioritario})
            await SendNotification(menorPrioridad);
            let lastMenorPrioridad = menorPrioridad
            await timer(60000);

            async function load () { // We need to wrap the loop into an async function for this to work
                for (var i = 1; i < count_documents; i++) {
                    console.log("Conductor a notificar : ", i)
                    const {idConductorPrioritario, menorPrioridad} =  await conductorPrioritario(lastMenorPrioridad);
                    const actualViaje = await modelViaje.findById(viaje._id)
                    
                    if(actualViaje.Estado_Viaje  == "Aceptado"){
                        console.log("El viaje ya fue aceptado")
                        i=count_documents;
                    }
                    else if(idConductorPrioritario != null){
                        await SendNotification(menorPrioridad);
                        lastMenorPrioridad = menorPrioridad
                        if(i < count_documents - 1){
                            await modelViaje.updateOne({_id: viaje._id}, {Id_Conductor:idConductorPrioritario})
                        }else{
                            await modelViaje.deleteOne({_id: viaje._id})
                            console.log("Viaje Eliminado")
                        }
                        await timer(60000);
                        
                    }else{
                        await modelViaje.deleteOne({_id: viaje._id})
                        console.log("Viaje Eliminado")
                        i=count_documents;
                    }
                    

                }
            }
            load ()
            

        }).catch((err) => {
            return res.status(400).json(err.Message)
        })  


        return res.status(201).json({message: 'Viaje solicitado.'})


        
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
    try{
        //Condiciones para un cliente comun
        if(Object.keys(req.body).length > 1 && req.body?.Id_Viaje && req?.session?.Rol != "admin"){
            var updateViaje = await modelViaje.updateOne({_id: req.body.Id_Viaje }, { ...req.body })
        }else if(!req.body?.Id_Viaje && req?.session?.Rol != "admin"){
            return res.status(400).json({ message: "Debes indicar el identificador del viaje a actualizar." })
        }else if(Object.keys(req.body).length == 1 && req.body?.Id_Viaje && req?.session?.Rol != "admin"){
            return res.status(400).json({ message: "Debes indicar almenos un parametro a actualizar." })
        }
        
        //Condiciones para el admin
        if(Object.keys(req.body).length > 2 && req.body?.Id_Viaje && req.body?.Id_Value && req.session?.Rol == "admin"){
            const {Id_Viaje, Id_Value} = req.body;
            var updateViaje = await modelViaje.updateOne({[Id_Viaje]: Id_Value }, { ...req.body });
        }else if( (!req.body?.Id_Viaje || !req.body?.Id_Value) && req.session?.Rol == "admin"){
            return res.status(400).json({ message: "Debes indicar el identificador y su valor, del viaje  a actualizar." })
        }else if(Object.keys(req.body).length == 2 && req.body?.Id_Viaje && req.body?.Id_Value && req.session?.Rol == "admin"){
            return res.status(400).json({ message: "Debes indicar almenos un parametro a actualizar." })
        }


        if (updateViaje.matchedCount == 0) { return res.status(404).json({ message: "No se encuentra el viaje a actualizar." }); }
        if(updateViaje.acknowledged == false){ return res.status(400).json({ message: "No se puede actualizar un parametro no existente ." }); }
        (updateViaje.modifiedCount == 1)
        ? res.status(200).json({message: "Se ha actualizado satisfactoriamente"})
        : res.status(200).json({message: "El parametro ya tiene el valor a cambiar."})
    }catch(e){
        return res.status(400).json({ error: e})
    }
}

export const removeViaje = async (req, res) => {
    try{
        if(Object.keys(req.body).length > 0 && req.session?.Rol == "admin" ){
            var remove = await modelViaje.deleteOne({...req.body });
        }else if(req.session?.Rol == "admin"){
            return res.status(400).json({message: "Debe indicar algun parametro del viaje para eliminar."})
        }else if(req.body?.Id_Viaje){
            var remove = await modelViaje.deleteOne({_id: req.body.Id_Viaje})
        }else{
            return res.status(400).json({message: "Debes indicar el identificador del viaje a eliminar."})
        }

        (remove?.deletedCount == 1)
        ? res.status(204).json({message: "Eliminado correctamente"})
        : res.status(404).json({message: "No se ha encontrado el viaje"})
        

    }catch(e){
        return res.status(400).json({e: "Algo fallo"})
    }

}

