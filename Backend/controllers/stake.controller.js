import { modelStakeHolder } from "../models/stakeHolder.model.js";



export const loginRequired = async (req, res, next) => {
    if(!req.session || !req.session.userId || req.session.role!="stake holder"){ 
        return res.status(403).json({message: "You should login with user stake holder for acces to this route."});
    }
    
    req.user = await modelStakeHolder.findById(req.session.userId);
    if(!req.user){ return res.status(403).json({message: "This user stake holder id is no longer exists."});}
    next();
};