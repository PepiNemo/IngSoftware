import { modelConductor } from '../models/conductor.model.js';

export const loginRequiredAdmin = async (req, res, next) => {
    if (!req?.session || !req?.session?.userId || req?.session?.Rol != "admin") {
        return res.status(403).json({ message: "Debes iniciar como administrador para entrar a esta ruta." });
    }

    req.user = await modelConductor.findById(req?.session?.userId);
    if (!req?.user) { return res.status(403).json({ message: "El usuario administrador ya no existe en el sistema." }); }
    next();
};

