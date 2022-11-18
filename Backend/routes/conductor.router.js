import { Router } from "express";

import {
    readViajesConductor,
    readConductor,
    updateConductor,
    loginRequired
} from "../controllers/conductor.controller.js"

const router = Router();

//router.post("/aceptarViaje", loginRequired, aceptarViaje);
//router.post("/rechazarViaje", loginRequired, rechazarViaje);
router.get("/readViajesConductor", loginRequired, readViajesConductor);
router.get("/readConductor", loginRequired, readConductor);
router.post("/updateConductor", loginRequired, updateConductor);


export const conductorRouter = router;