import { Router } from "express";

import  { 
    createViaje,
    readViajes,
    updateViaje,
    removeViaje, 
} from "../controllers/viaje.controller.js"

const router = Router();

router.post("/createViaje", createViaje);
router.post("/readViajes", readViajes);
router.patch("/updateViaje", updateViaje);
router.delete("/removeViaje", removeViaje);

export const pasajeroRouter = router;