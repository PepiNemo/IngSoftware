import { modelConductor } from '../models/conductor.model.js';
import { modelStakeHolder } from '../models/stakeHolder.model.js';
import { RegisterConductorChecker } from '../validator/registerConductor.validator.js';



export const loginRequired = async (req, res, next) => {
    if (!req.session || !req.session.userId || req.session.role != "admin") {
        return res.status(403).json({ message: "You should login with user admin for acces to this route." });
    }

    req.user = await modelConductor.findById(req.session.userId);
    if (!req.user) { return res.status(403).json({ message: "This user admin id is no longer exists." }); }
    next();
};

