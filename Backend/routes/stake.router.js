import { Router } from "express";

import { loginRequired } from "../controllers/stake.controller.js"

import  { 
    createViajeSH,
    updateViajeSH,
    removeViajeSH, 
} from "../controllers/viajeSH.controller.js"

const router = Router();

router.post("/createViajeSH", loginRequired, createViajeSH);
router.patch("/actualizarViaje", loginRequired, updateViajeSH);
router.delete("/removeViajeSH", loginRequired, removeViajeSH);

export const stakeRouter = router;