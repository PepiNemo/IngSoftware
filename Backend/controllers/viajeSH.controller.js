import { dbSecretFields } from "../configs/index.js";
import { modelViajeSH } from "../models/viajeSH.model.js";
import { loginRequired } from "./auth.controller.js";

export const createViajeSH = async (req, res) => {
    const validatorResult = loginRequired(req.body);
    if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}
    const user = await modelViajeSH.create({...req.body,})
    return res.status(201).json({message: 'Viaje tomado.', user:omit(user.toObject(), dbSecretFields )})
}

export const readViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are get succefully travel.'})
}

export const readViajes = async (req, res) => {
    return res.status(201).json({ message: 'you are get succefully travels.'})
}

export const updateViajeSH = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully travel.'})
}

export const removeViajeSH = async (req, res) => {
    return res.status(201).json({ message: 'you are remove succefully travel.'})
}

