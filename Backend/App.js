import express from "express";
import expressSession from 'express-session';
import { authRouter } from "./routes/auth.js";
import { SESSION_SECRET, IS_PRODUCTION } from "./configs/index.js";
export const app = express();

app.use(express.json({limit: "1KB"}))
app.use(expressSession({
    name: "felipe.sid",
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        secure: IS_PRODUCTION,
        maxAge: 1000*60*60*24
    }
}))
app.use('/api/auth', authRouter)

export const applicacion = app;

