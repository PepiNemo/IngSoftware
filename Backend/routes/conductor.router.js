import { Router } from "express";

import {
    readViajesConductor,
    readConductor,
    updateConductor,
    loginRequired,
    aceptarViaje,
    aceptarViajeSH

} from "../controllers/conductor.controller.js"



const router = Router();

router.post("/aceptarViaje", loginRequired, aceptarViaje);
router.post("/aceptarViajeSH", loginRequired, aceptarViajeSH);
router.post("/readViajesConductor", loginRequired, readViajesConductor);
router.get("/readConductor", loginRequired, readConductor);
router.post("/updateConductor", loginRequired, updateConductor);


export const conductorRouter = router;