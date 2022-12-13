import { modelViajeSH } from "../models/viajeSH.model.js";
import { modelConductor } from "../models/conductor.model.js"
import { dbSecretFields } from "../configs/index.js";
import omit from "lodash";

import { conductorPrioritario } from "./conductor.controller.js"
import { SendNotification } from "./subscription.controller.js"

// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

export const createViajeSH = async (req, res) => {
    try {
        modelConductor.countDocuments().then(async (count_documents) => {
            const { idConductorPrioritario, menorPrioridad } = await conductorPrioritario();

            let viajeSH;
            if (req.session?.Rol == "stakeHolder") {
                viajeSH = await modelViajeSH.create({ ...req.body, Id_SH: req.session?.userId, Nombre_Empresa: req.session.Nombre_Empresa, Id_Conductor: idConductorPrioritario })
            } else if (req.session?.Rol == "admin" && req.body?.Id_SH && req.body?.Nombre_Empresa) {
                viajeSH = await modelViajeSH.create({ ...req.body, Id_Conductor: idConductorPrioritario })
            } else {
                res.status(400).json({ message: "Debe indicar el ID del stakeHolder y el nombre de la empresa." })
            }

            await SendNotification(menorPrioridad);
            let lastMenorPrioridad = menorPrioridad
            await timer(60000);

            async function load() {
                for (var i = 1; i < count_documents; i++) {
                    

                    const { idConductorPrioritario, menorPrioridad } = await conductorPrioritario(lastMenorPrioridad);
                    const actualViaje = await modelViajeSH.findById(viajeSH._id)
                    if(!actualViaje?._id){i = count_documents }
                    else{
                        if (actualViaje?.Estado_Viaje == "Aceptado") {
                            console.log("El viaje ya fue aceptado")
                            i = count_documents;
                        }
                        else if (idConductorPrioritario != null) {
                            await SendNotification(menorPrioridad);
                            lastMenorPrioridad = menorPrioridad
                            if (i < count_documents - 1) {
                                await modelViajeSH.updateOne({ _id: viajeSH._id }, { Id_Conductor: idConductorPrioritario })
                            } else {
                                await modelViajeSH.deleteOne({ _id: viajeSH._id })
                                console.log("Viaje Eliminado")
                            }
                            await timer(60000);
                        } else {
                            await modelViajeSH.deleteOne({ _id: viajeSH._id })
                            console.log("Viaje Eliminado")
                            i = count_documents;
                        }
                    }
                }

            }
            load()
        })


        return res.status(201).json({ message: 'Viaje solicitado.' })

    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

export const readViajesSH = async (req, res) => {
    try {
        var Id_Value = req.session.userId;
        if (Object.keys(req.body).length > 0) {
            var ViajesSH = await modelViajeSH.find({ Id_SH: Id_Value, ...req.body });
        } else {
            var ViajesSH = await modelViajeSH.find({ Id_SH: Id_Value });
        }
        (ViajesSH == null)
            ? res.status(404).json({ message: 'No hay viajes para este identificador.' })
            : res.status(200).json(ViajesSH)
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

export const readViajesSHAdmin = async (req, res) => {
    try {
        if (Object.keys(req.body).length > 0) {
            var ViajesSH = await modelViajeSH.find({ ...req.body })
        } else {
            var ViajesSH = await modelViajeSH.find().all()
        }
        (ViajesSH == null)
            ? res.status(404).json({ message: 'No hay viajes para este identificador.' })
            : res.status(200).json(ViajesSH)
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

export const updateViajeSH = async (req, res) => {
    if (Object.keys(req.body).length < 2 || !req.body?._id) {
        return res.status(400).json({ message: "Debes indicar el identificador y un valor del viaje a actualizar." })
    }


    try {
        const _id = req.body._id
        delete req.body._id
        const updateViajeSH = await modelViajeSH.findByIdAndUpdate(_id, { ...req.body });
        (updateViajeSH?._id)
            ? res.status(200).json({ message: "Se ha actualizado satisfactoriamente" })
            : res.status(406).json({ message: "El parametro ya tiene el valor a cambiar." })
    }
    catch (e) {
        return res.status(400).json({ error: e.message })

    }
}

export const removeViajeSH = async (req, res) => {
    if (!req.body?._id) {
        return res.status(400).json({ message: "Debes indicar el identificador del viaje a eliminar." })
    }

    try {
        const remove = await modelViajeSH.findByIdAndDelete(req.body._id);
        (remove?._id)
            ? res.status(200).json({ message: "Eliminado correctamente" })
            : res.status(404).json({ message: "No se ha encontrado el viaje" })
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

