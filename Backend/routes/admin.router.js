import { Router } from "express";

import { loginRequiredAdmin } from "../controllers/admin.controller.js"

import {
    aceptarViaje,
    rechazarViaje,
    verViajesAceptados,
    createConductor,
    readConductors,
    readConductor,
    removeConductor
} from "../controllers/conductor.controller.js"

import {
    createStakeHolder,
    readStakeHolder,
    readStakeHolders,
    removeStakeHolder
} from "../controllers/stake.controller.js";
const router = Router();

router.post("/aceptarViaje", loginRequiredAdmin, aceptarViaje);
router.post("/rechazarViaje", loginRequiredAdmin, rechazarViaje);
router.get("/verViajesAceptados", loginRequiredAdmin, verViajesAceptados);


router.post("/createConductor", loginRequiredAdmin, createConductor);
router.get("/readConductors", loginRequiredAdmin, readConductors);
router.get("/readConductor", loginRequiredAdmin, readConductor);
router.delete("/removeConductor", loginRequiredAdmin, removeConductor);

router.post("/createStakeHolder", loginRequiredAdmin, createStakeHolder);
router.get("/readStakeHolders", loginRequiredAdmin, readStakeHolders);
router.get("/readStakeHolder", loginRequiredAdmin, readStakeHolder);
router.delete("/removeStakeHolder", loginRequiredAdmin, removeStakeHolder);


export const adminRouter = router;