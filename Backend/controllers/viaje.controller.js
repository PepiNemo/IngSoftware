import { modelViaje } from "../models/viaje.model.js";
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";

export const createViaje = async (req, res) => {
    const viaje= await modelViaje.create({...req.body,})
    return res.status(201).json({message: 'Viaje pedido.', viaje:omit(viaje.toObject(), dbSecretFields )})
}

export const readViaje = async (req, res) => {
    const{Name_Id, Value} = req.body;
    const Viaje = await modelViaje.findOne({[Name_Id]:Value});
    (Viaje == null)
    ? res.status(404).json({ message: 'There is no travel for this id.'})
    : res.status(200).json(Viaje)
}

export const readViajes = async (req, res) => {
    const{Name_Id, Value} = req.body;
    const Viaje = await modelViaje.find({[Name_Id]:Value});
    (Viaje == null)
        ? res.status(404).json({ message: 'There is no travel for this id.'})
        : res.status(200).json(Viaje)
    
}


export const updateViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully conductors.'})
}

export const removeViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully conductors.'})
}

