import { modelViajeSH } from "../models/viajeSH.model.js";
import { dbSecretFields } from "../configs/index.js";
import omit from "lodash";

export const createViajeSH = async (req, res) => {
    //const validatorResult = loginRequired(req.body);
    //if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}
    const user = await modelViajeSH.create({...req.body,})
    return res.status(201).json({message: 'Viaje tomado.', user:omit(user.toObject(), dbSecretFields )})
}

export const readViajeSH = async (req, res) => {
    const{Name_Id, Value} = req.body;
    const ViajeSH = await modelViajeSH.findOne({[Name_Id]:Value});
    (ViajeSH == null)
    ? res.status(404).json({ message: 'There is no travel for this id.'})
    : res.status(200).json(ViajeSH)
}

export const readViajesSH = async (req, res) => {
    const{Name_Id, Value} = req.body;
    const ViajeSH = await modelViajeSH.find({[Name_Id]:Value});
    (ViajeSH == null)
        ? res.status(404).json({ message: 'There is no travel for this id.'})
        : res.status(200).json(ViajeSH)
    
}

export const updateViajeSH = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully travel.'})
}

export const removeViajeSH = async (req, res) => {
    return res.status(201).json({ message: 'you are remove succefully travel.'})
}

