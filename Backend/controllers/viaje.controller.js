import { modelViaje } from "../models/viaje.model.js";
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";

export const createViaje = async (req, res) => {
    const viaje= await modelViaje.create({...req.body,})
    return res.status(201).json({message: 'Vaije tomado.', viaje:omit(viaje.toObject(), dbSecretFields )})
}

export const readViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are read succefully viaje.'})
}

export const readViajes = async (req, res) => {
    return res.status(201).json({ message: 'you are read succefully viajes.'})
}


export const updateViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully conductors.'})
}

export const removeViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully conductors.'})
}

