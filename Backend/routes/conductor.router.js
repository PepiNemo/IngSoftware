import { Router } from "express";

import {
    aceptarViaje,
    rechazarViaje,
    verViajesAceptados,
    loginRequired
} from "../controllers/conductor.controller.js"

const router = Router();

router.post("/aceptarViaje", loginRequired, aceptarViaje);
router.post("/rechazarViaje", loginRequired, rechazarViaje);
router.get("/verViajesAceptados", loginRequired, verViajesAceptados);

export const conductorRouter = router;