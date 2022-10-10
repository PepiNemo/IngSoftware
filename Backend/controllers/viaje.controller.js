import { modelViaje } from "../models/viaje.model";

export const Viajenormal = async (req, res) => {

    const viaje= await modelViaje.create({...req.body,})

    return res.status(201).json({message: 'Vaije tomado.', user:omit(user.toObject(), dbSecretFields )})
}

