import { modelConductor } from '../models/conductor.model.js';

export const loginRequiredAdmin = async (req, res, next) => {
    if (!req?.session || !req?.session?.userId || req?.session?.Rol != "admin") {
        return res.status(403).json({ message: "You should login with user admin for acces to this route." });
    }

    req.user = await modelConductor.findById(req?.session?.userId);
    if (!req?.user) { return res.status(403).json({ message: "This user admin id is no longer exists." }); }
    next();
};

