import { modelViajeSH } from "../models/viajeSH.model.js";
import { modelConductor } from "../models/conductor.model.js"
import { dbSecretFields } from "../configs/index.js";
import omit from "lodash";

import { conductorPrioritario } from "./conductor.controller.js"
import { SendNotification } from "./subscription.controller.js"

// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

export const createViajeSH = async (req, res) => {
    try{
        modelConductor.countDocuments().then(async(count_documents) => {
            const {idConductorPrioritario, menorPrioridad} =  await conductorPrioritario();

            let viajeSH;
            if(req.session?.Rol == "stakeHolder"){
                viajeSH = await modelViajeSH.create({...req.body, Id_SH: req.session?.userId, Nombre_Empresa: req.session.Nombre_Empresa, Id_Conductor: idConductorPrioritario})
            }else if(req.session?.Rol == "admin" && req.body?.Id_SH && req.body?.Nombre_Empresa){
                viajeSH = await modelViajeSH.create({...req.body,  Id_Conductor: idConductorPrioritario})
            }else{
                res.status(400).json({message: "Debe indicar el ID del stakeHolder y el nombre de la empresa."})
            }

            await SendNotification(menorPrioridad);
            let lastMenorPrioridad = menorPrioridad
            await timer(60000);

            async function load () {
                for (var i = 1; i < count_documents; i++) {
                    const {idConductorPrioritario, menorPrioridad} =  await conductorPrioritario(lastMenorPrioridad);
                    const actualViaje = await modelViajeSH.findById(viajeSH._id)

                    if(actualViaje.Estado_Viaje  == "Aceptado"){
                        console.log("El viaje ya fue aceptado")
                        i=count_documents;
                    }
                    else if(idConductorPrioritario != null){
                        await SendNotification(menorPrioridad);
                        lastMenorPrioridad = menorPrioridad
                        if(i < count_documents - 1){
                            await modelViajeSH.updateOne({_id: viajeSH._id}, {Id_Conductor:idConductorPrioritario})
                        }else{
                            await modelViajeSH.deleteOne({_id: viajeSH._id})
                            console.log("Viaje Eliminado")
                        }
                        await timer(60000);
                    }else{
                        await modelViajeSH.deleteOne({_id: viajeSH._id})
                        console.log("Viaje Eliminado")
                        i=count_documents;
                    }
                }
            }
            load ()
        })


        return res.status(201).json({message: 'Viaje solicitado.'})

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
    try{
        if(Object.keys(req.body).length > 2 && req.body?.Id_ViajeSH && req.body?.Id_Value ){
            var {Id_ViajeSH, Id_Value} = req.body
            if(req.session?.Rol == "stakeHolder"){
                var updateViajeSH = await modelViajeSH.updateOne({Id_SH: req.session.userId, [Id_ViajeSH]: Id_Value }, { ...req.body })
            }else{
                var updateViajeSH = await modelViajeSH.updateOne({[Id_ViajeSH]: Id_Value }, { ...req.body })
            }
        }else if(!req.body?.Id_ViajeSH || !req.body?.Id_Value){
            return res.status(400).json({ message: "Debes indicar el identificador y su valor del viaje a actualizar." })
        }else{
            return res.status(400).json({ message: "Debe indicar almenos un parametro a actualizar." });
        }

        if (updateViajeSH.matchedCount == 0) { return res.status(404).json({ message: "No se encuentra el viaje a actualizar." }); }
        if(updateViajeSH.acknowledged == false){ return res.status(400).json({ message: "No se puede actualizar un parametro no existente ." }); }
        
        (updateViajeSH.modifiedCount == 1)
        ? res.status(200).json({message: "Se ha actualizado satisfactoriamente"})
        : res.status(200).json({message: "El parametro ya tiene el valor a cambiar."})

    }catch(e){
        return res.status(400).json({ error: e})
    }
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

