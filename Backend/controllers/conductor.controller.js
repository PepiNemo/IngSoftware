import { modelConductor } from "../models/conductor.model.js";
import { RegisterConductorChecker } from "../validator/registerConductor.validator.js"
import { hash } from "bcrypt";

import { modelViaje } from "../models/viaje.model.js"
import { modelViajeSH } from "../models/viajeSH.model.js"


export const aceptarViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are accept succefully travel.'})
}

export const rechazarViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are decline succefully travel.'})
}


export const createConductor = async (req, res) => {
    const validatorResult = RegisterConductorChecker(req.body);
    if (validatorResult !== true) { return res.status(400).json({ message: validatorResult }) }

    const hashedPassword = await hash(req.body.Password, 12);
    const user = await modelConductor.create({ ...req.body, Password: hashedPassword, Rol: 'conductor' })

    return res.status(201).json({ message: 'you are registered succefully.'})
}

export const readConductors = async (req, res) => {
    return res.status(201).json({ message: 'you are read succefully conductors.'})
}

export const readConductor = async (req, res) => {
    return res.status(201).json({ message: 'you are read succefully conductor.'})
}

export const updateConductor = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully conductor.'})
}

export const removeConductor = async (req, res) => {
    return res.status(201).json({ message: 'you are remove succefully conductor.'})
}


export const readViajesConductor = async (req, res) => {
    const{Id_Conductor} = req.body;
    const Viaje = await modelViaje.find({Id_Conductor:Id_Conductor});
    const viajeSH = await modelViajeSH.find({Id_Conductor:Id_Conductor});

    (Viaje == null && viajeSH == null)
        ? res.status(404).json({ message: 'There is no travel for this id.'})
        : res.status(200).json([viajeSH, Viaje])
    
}


export const loginRequired = async (req, res, next) => {
    if(!req.session || !req.session.userId || req.session.role!="conductor"){ 
        return res.status(403).json({message: "You should login with user conductor for acces to this route."});
    }
    
    req.user = await modelConductor.findById(req.session.userId);
    if(!req.user){ return res.status(403).json({message: "This user admin id is no longer exists."});}
    next();
};

