import { Router } from "express";

import {
    createTarifa,
    readTarifa,
    updateTarifa,
    deleteTarifa
} from "../controllers/tarifa.controller.js"

import { loginRequiredAdmin } from "../controllers/admin.controller.js"

const router = Router();


router.post("/createTarifa", loginRequiredAdmin, createTarifa);
router.get("/readTarifa", readTarifa);
router.patch("/updateTarifa", loginRequiredAdmin, updateTarifa);
router.delete("/deleteTarifa", loginRequiredAdmin, deleteTarifa)

export const tarifaRouter = router;