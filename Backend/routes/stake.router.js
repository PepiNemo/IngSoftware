import { Router } from "express";

import { loginRequiredStake } from "../controllers/stake.controller.js"

import  { 
    createViajeSH,
    updateViajeSH,
    removeViajeSH, 
} from "../controllers/viajeSH.controller.js"

const router = Router();

router.post("/createViajeSH", loginRequiredStake, createViajeSH);
router.patch("/actualizarViaje", loginRequiredStake, updateViajeSH);
router.delete("/removeViajeSH", loginRequiredStake, removeViajeSH);

export const stakeRouter = router;