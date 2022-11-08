import { modelStakeHolder } from "../models/stakeHolder.model.js";
import { RegisterStakeChecker } from '../validator/registerStake.validator.js';
import { hash, compare } from "bcrypt";
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";


export const registerStakeHolder = async (req, res) => {
    const validatorResult = RegisterStakeChecker(req.body);
    if (validatorResult !== true) { return res.status(400).json({ message: validatorResult }) }

    const hashedPassword = await hash(req.body.password, 12);
    const user = await modelStakeHolder.create({ ...req.body, password: hashedPassword, role: 'stake holder' })

    return res.status(201).json({ message: 'you are registered succefully.', user: omit(user.toObject(), dbSecretFields) })
}

export const readStakeHolder = async (req, res) => {
    return res.status(201).json({ message: 'you are remove succefully conductors.', user: omit(user.toObject(), dbSecretFields) })
}

export const readStakeHolders = async (req, res) => {
    return res.status(201).json({ message: 'you are remove succefully conductor.', user: omit(user.toObject(), dbSecretFields) })
}

export const removeStakeHolder = async (req, res) => {
    return res.status(201).json({ message: 'you are update succefully conductor.', user: omit(user.toObject(), dbSecretFields) })
}

export const loginRequired = async (req, res, next) => {
    if(!req.session || !req.session.userId || req.session.role!="stake holder"){ 
        return res.status(403).json({message: "You should login with user stake holder for acces to this route."});
    }
    
    req.user = await modelStakeHolder.findById(req.session.userId);
    if(!req.user){ return res.status(403).json({message: "This user stake holder id is no longer exists."});}
    next();
};