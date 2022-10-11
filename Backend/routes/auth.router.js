import { Router } from "express";
import { login, loginRequired,profile, logout } from "../controllers/auth.controller.js";
const router = Router();

router.post("/login", login);
router.post("/profile", loginRequired, profile);
router.post("/logout", loginRequired, logout);

export const authRouter = router;

