import { modelConductor } from "../models/conductor.model.js";

export const aceptarViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are accept succefully travel.'})
}

export const rechazarViaje = async (req, res) => {
    return res.status(201).json({ message: 'you are decline succefully travel.'})
}

export const verViajesAceptados = async (req, res) => {
    return res.status(201).json({ message: 'you are get succefully travels.'})
}

export const createConductor = async (req, res) => {
    const validatorResult = RegisterConductorChecker(req.body);
    if (validatorResult !== true) { return res.status(400).json({ message: validatorResult }) }

    const hashedPassword = await hash(req.body.password, 12);
    const user = await modelConductor.create({ ...req.body, password: hashedPassword, role: 'conductor' })

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


export const loginRequired = async (req, res, next) => {
    if(!req.session || !req.session.userId || req.session.role!="conductor"){ 
        return res.status(403).json({message: "You should login with user conductor for acces to this route."});
    }
    
    req.user = await modelConductor.findById(req.session.userId);
    if(!req.user){ return res.status(403).json({message: "This user admin id is no longer exists."});}
    next();
};

