import { Router } from "express";
import { Subscription } from "../controllers/subscription.controller.js"

const router = Router();
//minuto 39

router.post("/Subscription", Subscription);

export const susbcriptionRouter = router;

