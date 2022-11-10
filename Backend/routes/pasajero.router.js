import { Router } from "express";

import  { 
    createViaje,
    updateViaje,
    removeViaje, 
} from "../controllers/viaje.controller.js"

const router = Router();

router.post("/createViaje", createViaje);
router.patch("/actualizarViaje", updateViaje);
router.delete("/removeViajeSH", removeViaje);

export const pasajeroRouter = router;