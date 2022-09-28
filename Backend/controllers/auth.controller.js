import { hash, compare } from "bcrypt";
import { modelo } from '../models/user.js';
import { Registerchecker } from '../validator/register.validator.js';
import { LoginChecker } from '../validator/login.validator.js';
import omit from "lodash";
import { dbSecretFields } from "../configs/index.js";

export const register = async (req, res) => {
    const validatorResult = Registerchecker(req.body);
    if(validatorResult !== true){
        return res.status(400).json({ message: validatorResult})
    }
    const hashedPassword = await hash(req.body.password, 12);
    const user = await modelo.create({...req.body, password:hashedPassword})
    req.session.userId = user.id;

    return res.status(201).json({message: 'you are registered succefully.', user:omit(user.toObject(), dbSecretFields )})
}

export const login = async (req, res) => {
    const validatorResult = LoginChecker(req.body);
    if(validatorResult !== true){
        return res.status(400).json({ message: validatorResult})
    }

    const user = await modelo.findOne({username: req.body.username})
    if(!user){
        return res.status(404).json({message: 'Username does not exists.'})
    }

    const isPasswordCorrect = await compare(req.body.password, user.password)

    if(!isPasswordCorrect){
        return res.status(401).json({message: 'Password does not exists.'})
    }

    req.session.userId = user.id;

    res.json({message: 'you are successfuly logged in'});
}

export const logout = (req, res) => {
    delete req.session.userId;
    res.json({ message: "You are sucessfully logged out."})
}

export const loginRequired = async (req, res, next) => {
    if(!req.session || !req.session.userId){
        return res.status(403).json({message: "You should login for acces to this route."});
    }
    req.user = await modelo.findById(req.session.userId);
    if(!req.user){
        return res.status(403).json({message: "This user id is no longer exists."});
    }
    next();
};

export const profile = (req, res) => {
    res.json({user: omit(req.user.toObject(), dbSecretFields)})
}