import { Router } from "express";
import { loginRequired } from "../controllers/auth.controller.js";
import { ViajeSH} from "../controllers/viajeSH.controller";

const router = Router();
router.use("/SolicitudViajeSH", loginRequired, ViajeSH);
router.use("/VerViajeSH", loginRequired, VerViajeSH);
router.use("/EditarViajeSH", loginRequired, EditarViajeSH);
router.use("/ElimitarViajeSH", loginRequired, EliminarViajeSH);


export const viajeSH = router;