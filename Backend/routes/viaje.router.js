import { Router } from "express";
import { Viajenormal } from "../controllers/viaje.controller";

const router = Router();

router.use("/TakeViaje", Viajenormal);
router.use("EditarViaje", EditarViaje);
router.use("/EliminarViaje", EliminarViaje);


export const TakeViaje = router;