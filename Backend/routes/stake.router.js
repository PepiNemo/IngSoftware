import { Router } from "express";

import { loginRequiredStake, readStakeHolder, updateStakeHolder } from "../controllers/stake.controller.js"

import  { 
    createViajeSH,
    readViajesSH,
    updateViajeSH,
    removeViajeSH, 
} from "../controllers/viajeSH.controller.js"

const router = Router();

router.get("/readStakeHolder", loginRequiredStake, readStakeHolder);

router.post("/createViajeSH", loginRequiredStake, createViajeSH);
router.post("/readViajesSH", loginRequiredStake, readViajesSH);
router.post("/updateStakeHolder", loginRequiredStake, updateStakeHolder)
router.delete("/removeViajeSH", loginRequiredStake, removeViajeSH);



//router.patch("/actualizarViaje", loginRequiredStake, updateViajeSH);


export const stakeRouter = router;