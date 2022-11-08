import { Router } from "express";

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
    registerStakeHolder,
    readStakeHolder,
    readStakeHolders,
    removeStakeHolder,
    loginRequired
} from "../controllers/stake.controller.js";
const router = Router();

router.post("/aceptarViaje", loginRequired, aceptarViaje);
router.post("/rechazarViaje", loginRequired, rechazarViaje);
router.get("/verViajesAceptados", loginRequired, verViajesAceptados);


router.post("/createConductor", loginRequired, createConductor);
router.get("/createConductor", loginRequired, readConductors);
router.get("/readConductor", loginRequired, readConductor);
router.delete("/removeConductor", loginRequired, removeConductor);

router.post("/registerStakeHolder", loginRequired, registerStakeHolder);
router.get("/readStakeHolders", loginRequired, readStakeHolders);
router.get("/readStakeHolder", loginRequired, readStakeHolder);
router.delete("/removeStakeHolder", loginRequired, removeStakeHolder);


export const adminRouter = router;