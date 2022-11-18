import { Router } from "express";

import { loginRequiredAdmin } from "../controllers/admin.controller.js"

import {
    readViajesConductor,
    createConductor,
    readConductors,
    readConductor,
    updateConductor,
    disableConductor,
    removeConductor
} from "../controllers/conductor.controller.js"

import {
    createStakeHolder,
    readStakeHolder,
    readStakeHolders,
    updateStakeHolder,
    removeStakeHolder
} from "../controllers/stake.controller.js";


import {
    createViajeSH,
    updateViajeSH,
    readViajesSHAdmin
} from "../controllers/viajeSH.controller.js"

import {
    createViaje,
    updateViaje,
    readViajesAdmin
} from "../controllers/viaje.controller.js"

const router = Router();

//router.post("/aceptarViaje", loginRequiredAdmin, aceptarViaje);
//router.post("/rechazarViaje", loginRequiredAdmin, rechazarViaje);

router.post("/createConductor", loginRequiredAdmin, createConductor);
router.get("/readConductors", loginRequiredAdmin, readConductors);
router.post("/readConductor", loginRequiredAdmin, readConductor);
router.patch("/updateConductor", loginRequiredAdmin, updateConductor);
router.patch("/disableConductor", loginRequiredAdmin, disableConductor);
router.delete("/removeConductor", loginRequiredAdmin, removeConductor);

router.post("/createStakeHolder", loginRequiredAdmin, createStakeHolder);
router.post("/readStakeHolder", loginRequiredAdmin, readStakeHolder);
router.get("/readStakeHolders", loginRequiredAdmin, readStakeHolders);
router.patch("/updateStakeHolder", loginRequiredAdmin, updateStakeHolder);
router.delete("/removeStakeHolder", loginRequiredAdmin, removeStakeHolder);

router.post("/readViajesConductor", loginRequiredAdmin, readViajesConductor);

router.post("/createViajeSH", loginRequiredAdmin, createViajeSH);
router.patch("/updateViajeSH", loginRequiredAdmin, updateViajeSH);
router.post("/readViajesSHAdmin", loginRequiredAdmin, readViajesSHAdmin);

router.post("/createViaje", loginRequiredAdmin, createViaje);
router.patch("/updateViaje", loginRequiredAdmin, updateViaje);
router.post("/readViajesAdmin", loginRequiredAdmin, readViajesAdmin);


export const adminRouter = router;