import { hash, compare } from "bcrypt";
import { modelConductor } from '../models/conductor.model.js';
import { modelStakeHolder } from '../models/stakeHolder.model.js';
import { RegisterConductorChecker } from '../validator/registerConductor.validator.js';
import { RegisterStakeChecker } from '../validator/registerStake.validator.js';
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";

export const registerConductor = async (req, res) => {
    const validatorResult = RegisterConductorChecker(req.body);
    if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}
    
    const hashedPassword = await hash(req.body.password, 12);
    const user = await modelConductor.create({...req.body, password:hashedPassword, role:'conductor'})

    return res.status(201).json({message: 'you are registered succefully.', user:omit(user.toObject(), dbSecretFields )})
}

export const registerStakeHolder = async (req, res) => {
    const validatorResult = RegisterStakeChecker(req.body);
    if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}
    
    const hashedPassword = await hash(req.body.password, 12);
    const user = await modelStakeHolder.create({...req.body, password:hashedPassword, role:'stake holder'})

    return res.status(201).json({message: 'you are registered succefully.', user:omit(user.toObject(), dbSecretFields )})
}


export const loginRequired = async (req, res, next) => {
    if(!req.session || !req.session.userId || req.session.role !="admin"){ 
        return res.status(403).json({message: "You should login with user admin for acces to this route."});
    }
    
    req.user = await modelConductor.findById(req.session.userId);
    if(!req.user){ return res.status(403).json({message: "This user admin id is no longer exists."});}
    next();
};

