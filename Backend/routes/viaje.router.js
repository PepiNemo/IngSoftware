import { Router } from "express";
import { Viajenormal } from "../controllers/viaje.controller.js";

const router = Router();

router.post("/TakeViaje", Viajenormal);
//router.use("EditarViaje", EditarViaje);
//router.use("/EliminarViaje", EliminarViaje);


export const viajeRouter = router;