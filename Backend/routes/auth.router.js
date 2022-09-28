import { Router } from "express";
import { login, loginRequired,profile, logout } from "../controllers/auth.controller.js";
const router = Router();

router.use("/login", login);
router.use("/profile", loginRequired, profile);
router.use("/logout", loginRequired, logout);

export const authRouter = router;

