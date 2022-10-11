import { modelViaje } from "../models/viaje.model.js";
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";

export const Viajenormal = async (req, res) => {

    const viaje= await modelViaje.create({...req.body,})

    return res.status(201).json({message: 'Vaije tomado.', viaje:omit(viaje.toObject(), dbSecretFields )})
}

