import { Router } from "express";
import { loginRequired } from "../controllers/auth.controller.js";
import { SolicitudViajeSH} from "../controllers/viajeSH.controller.js";

const router = Router();
router.use("/SolicitudViajeSH", loginRequired, SolicitudViajeSH);
//router.use("/VerViajeSH", loginRequired, VerViajeSH);
//router.use("/EditarViajeSH", loginRequired, EditarViajeSH);
//router.use("/ElimitarViajeSH", loginRequired, EliminarViajeSH);


export const viajeSHRouter = router;
