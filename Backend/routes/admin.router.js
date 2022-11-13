import { Router } from "express";

import { loginRequiredAdmin } from "../controllers/admin.controller.js"

import {
    aceptarViaje,
    rechazarViaje,
    readViajesConductor,
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


import {readViajeSH, readViajesSH} from "../controllers/viajeSH.controller.js"

const router = Router();

router.post("/aceptarViaje", loginRequiredAdmin, aceptarViaje);
router.post("/rechazarViaje", loginRequiredAdmin, rechazarViaje);
router.post("/readViajesConductor", loginRequiredAdmin, readViajesConductor);


router.post("/createConductor", loginRequiredAdmin, createConductor);
router.get("/readConductors", loginRequiredAdmin, readConductors);
router.get("/readConductor", loginRequiredAdmin, readConductor);
router.delete("/removeConductor", loginRequiredAdmin, removeConductor);

router.post("/createStakeHolder", loginRequiredAdmin, createStakeHolder);
router.delete("/removeStakeHolder", loginRequiredAdmin, removeStakeHolder);

router.post("/readViajeSH", loginRequiredAdmin, readViajeSH);
router.post("/readViajesSH", loginRequiredAdmin, readViajesSH);


export const adminRouter = router;