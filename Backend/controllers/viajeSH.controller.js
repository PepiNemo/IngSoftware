import { dbSecretFields } from "../configs/index.js";
import { modelViajeSH } from "../models/viajeSH.model.js";
import { loginRequired } from "./auth.controller.js";



export const SolicitudViajeSH = async (req, res) => {
    const validatorResult = loginRequired(req.body);
    if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}
    
    
    const user = await modelViajeSH.create({...req.body,})

    return res.status(201).json({message: 'Viaje tomado.', user:omit(user.toObject(), dbSecretFields )})
}