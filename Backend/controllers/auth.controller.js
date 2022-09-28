import { compare } from "bcrypt";
import omit from "lodash";
import { LoginChecker } from '../validator/login.validator.js';
import { modelStakeHolder } from "../models/stakeHolder.model.js";
import { modelConductor } from "../models/conductor.model.js";
import { dbSecretFields } from "../configs/index.js";


export const login = async (req, res) => {
    const validatorResult = LoginChecker(req.body);
    if(validatorResult !== true){ return res.status(400).json({ message: validatorResult})}

    
    const user = await modelConductor.findOne({username: req.body.username})
    if(!user){ 
        const userStake = await modelStakeHolder.findOne({username: req.body.username});
        if(!userStake){
            res.status(404).json({message: 'The User is not register.'})
        }
        const isPasswordCorrect = await compare(req.body.password, userStake.password)
        if(!isPasswordCorrect){ return res.status(401).json({message: 'Password does not exists.'})}
        req.session.role="stake holder"
        req.session.userId = userStake.id;
        res.json({message: 'Stake Holder: you are successfuly logged in'});

    
    }else if(user.role == "conductor"){ 
        const isPasswordCorrect = await compare(req.body.password, user.password)
        if(!isPasswordCorrect){ return res.status(401).json({message: 'Password does not exists.'})}
        req.session.role="conductor";
        req.session.userId = user.id;
        res.json({message: 'Conductor: you are successfuly logged in'});

    }
    else if(user.role == "admin"){
        const isPasswordCorrect = await compare(req.body.password, user.password)
        if(!isPasswordCorrect){ return res.status(401).json({message: 'Password does not exists.'})}
        req.session.role="admin";
        req.session.userId = user.id;
        res.json({message: 'Admin: you are successfuly logged in'});


    }
    
}

export const logout = (req, res) => {
    delete req.session.userId;
    res.json({ message: "You are sucessfully logged out."})
}

export const loginRequired = async (req, res, next) => {
    if(!req.session || !req.session.userId){ 
        return res.status(403).json({message: "You should login with user conductor for acces to this route."});
    }
    
    req.user = await modelConductor.findById(req.session.userId);
    if(!req.user){ 
        req.user = await modelStakeHolder.findById(req.session.userId);
        if(!req.user){
            return res.status(403).json({message: "This user admin id is no longer exists."});
        }
    }
    next();
};

export const profile = (req, res) => {
    res.json({user: omit(req.user.toObject(), dbSecretFields)})
}