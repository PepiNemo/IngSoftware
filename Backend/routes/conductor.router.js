import { Router } from "express";

import {
    aceptarViaje,
    rechazarViaje,
    readViajesConductor,
    loginRequired
} from "../controllers/conductor.controller.js"

const router = Router();

router.post("/aceptarViaje", loginRequired, aceptarViaje);
router.post("/rechazarViaje", loginRequired, rechazarViaje);
router.get("/readViajesConductor", loginRequired, readViajesConductor);

export const conductorRouter = router;