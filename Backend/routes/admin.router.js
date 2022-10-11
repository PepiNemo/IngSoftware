import { Router } from "express";
import { registerConductor, registerStakeHolder, loginRequired } from "../controllers/admin.controller.js";
const router = Router();


router.post("/registerConductor", loginRequired, registerConductor);
router.post("/registerStakeHolder", loginRequired, registerStakeHolder);


export const adminRouter = router;