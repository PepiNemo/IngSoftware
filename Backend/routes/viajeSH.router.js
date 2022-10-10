import { Router } from "express";
import { loginRequired } from "../controllers/auth.controller.js";
import { SolicitudViajeSH} from "../controllers/viajeSH.controller";

const router = Router();
router.use("/SolicitudViajeSH", loginRequired, SolicitudViajeSH);
router.use("/VerViajeSH", loginRequired, VerViajeSH);
router.use("/EditarViajeSH", loginRequired, EditarViajeSH);
router.use("/ElimitarViajeSH", loginRequired, EliminarViajeSH);


export const viajeSH = router;
