import { modelConductor } from "../models/conductor.model.js";
import { RegisterConductorChecker } from "../validator/registerConductor.validator.js"
import { hash } from "bcrypt";

import { modelViaje } from "../models/viaje.model.js"
import { modelViajeSH } from "../models/viajeSH.model.js"




export const aceptarViaje = async (req, res) => {
    try{
        modelViaje.updateOne({ Id_Conductor: req.session.userId, Estado_Viaje: "Solicitado"  }, { Estado_Viaje: "Aceptado" })
        return res.status(201).json({ message: 'Has aceptado el viaje corrrectamente.'})
    }catch(e){
        res.status(400).json({error: e})
    }
}

export const aceptarViajeSH = async (req, res) => {
    try{
        modelViajeSH.updateOne({ Id_Conductor: req.session.userId, Estado_Viaje: "Solicitado"  }, { Estado_Viaje: "Aceptado" })
        return res.status(201).json({ message: 'Has aceptado el viaje corrrectamente.'})
    }catch(e){
        res.status(400).json({error: e})
    }
}


export const createConductor = async (req, res) => {
    try {
        const validatorResult = RegisterConductorChecker(req.body);
        if (validatorResult !== true) { return res.status(400).json({ message: validatorResult }) }

        const hashedPassword = await hash(req.body.Password, 12);
        await modelConductor.create({ ...req.body, Password: hashedPassword, Rol: 'conductor' })
        return res.status(201).json({ message: 'Se ha regisrado el conductor satisfactoriamente.' })

    } catch (e) {
        return res.status(400).json({ error: e })
    }
}


export const readViajesConductor = async (req, res) => {
    try {
        const Id_Conductor = req.body?.Id_Conductor || req.session.userId
        const Viaje = await modelViaje.find({...req.body,  Id_Conductor: Id_Conductor });
        const viajeSH = await modelViajeSH.find({...req.body, Id_Conductor: Id_Conductor });

        if (Viaje.length > 0 && viajeSH.length > 0) {
            res.status(200).json({"Viajes SH": viajeSH, "Viajes comunes": Viaje})
        } else if (Viaje.length == 0 && viajeSH.length > 0) {
            res.status(200).json({"Viajes SH": viajeSH})
        } else if (Viaje.length > 0 && viajeSH.length == 0) {
            res.status(200).json({"Viajes comunes": Viaje})
        } else {
            res.status(404).json({ message: 'No hay viajes para este conductor.' })
        }
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}



export const readConductors = async (req, res) => {
    try {
        const user = await modelConductor.find().all()
        return res.status(200).json(user)
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}


export const readConductor = async (req, res) => {
    try {
        if (Object.keys(req.body).length > 0) {
            const conductor = await modelConductor.find({ ...req.body});
            (conductor.length == 0)
                ? res.status(404).json({ message: "Conductor no encontrado" })
                : res.status(200).json(conductor)

        } else if (req.session?.Rol == "conductor" || req.session?.Rol == "admin") {
            const { userId } = req.session
            const conductor = await modelConductor.find({ _id: userId })
            res.status(200).json(conductor)
        } else {
            res.status(400).json({ message: "Debe indicar un identificador y su valor del conductor a buscar." })
        }
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

export const updateConductor = async (req, res) => {
    try {
        if (Object.keys(req.body).length == 0) { return res.status(400).json({ message: "Debe indicar almenos un parametro a actualizar." }) }

        if (req.body?.Id_Conductor && req.body?.Id_Value && req.session.Rol == "admin") {
            var { Id_Conductor, Id_Value } = req.body;
        } else if (req.session?.Rol == "admin" || req.session?.Rol == "conductor") {
            var Id_Conductor = "_id";
            var Id_Value = req.session.userId;
        }

        if (req.body?.Password) {
            const hashedPassword = await hash(req.body.Password, 12);
            var updateConductor = await modelConductor.updateOne({ [Id_Conductor]: Id_Value }, { ...req.body, Password: hashedPassword })
        } else {
            var updateConductor = await modelConductor.updateOne({ [Id_Conductor]: Id_Value }, { ...req.body })
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

export const disableConductor = async (req, res) => {
    try {
        if (Object.keys(req.body).length > 0) {
            const update = await modelConductor.updateOne({ ...req.body }, { Prioridad: -1 });
            (update.modifiedCount == 1)
                ? res.status(200).json({ message: "Conductor deshabilitado" })
                : res.status(404).json({ message: "Conductor no encontrado" })
        } else {
            return res.status(400).json({ message: "Para deshabilitar el conductor se debe indicar un identificador y su valor" })
        }
    } catch (e) {
        return res.status(400).json({ error: e })
    }

}
export const removeConductor = async (req, res) => {
    try {
        if (Object.keys(req.body).length > 0) {
            const remove = await modelConductor.deleteOne({...req.body});
            (remove.deletedCount == 1)
                ? res.status(204).json({ message: "Eliminado correctamente" })
                : res.status(404).json({ message: "No se ha encontrado el conductor" })
        }
        else {
            res.status(400).json({ message: "Debe indicar el identificar del conductor para eliminar." })
        }
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

export const loginRequired = async (req, res, next) => {
    if (!req.session || !req.session.userId || req.session.Rol == "stakeholder") {
        return res.status(403).json({ message: "Debes iniciar sesion como conductor para acceder a esta ruta." });
    }

    req.user = await modelConductor.findById(req.session.userId);
    if (!req.user) { return res.status(403).json({ message: "El usuario ya no es parte del sistema." }); }
    next();
};


export async function conductorPrioritario (ultimaPriodidad=-1) {
    const conductors = await modelConductor.find().all()
    let idConductorPrioritario;
    let menorPrioridad =  999;
    for (let conductor of conductors){
        if(conductor.Prioridad < menorPrioridad && conductor.Prioridad > ultimaPriodidad ){
            menorPrioridad = conductor.Prioridad;
            idConductorPrioritario = conductor._id
        }
    }
    if(menorPrioridad == ultimaPriodidad){
        return null
    }else{
        return {idConductorPrioritario, menorPrioridad}
    }
}

