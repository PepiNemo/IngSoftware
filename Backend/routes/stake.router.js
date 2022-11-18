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
router.patch("/updateStakeHolder", loginRequiredStake, updateStakeHolder)


router.post("/createViajeSH", loginRequiredStake, createViajeSH);
router.post("/readViajesSH", loginRequiredStake, readViajesSH);
router.patch("/updateViajeSH", loginRequiredStake, updateViajeSH);
router.delete("/removeViajeSH", loginRequiredStake, removeViajeSH);


export const stakeRouter = router;