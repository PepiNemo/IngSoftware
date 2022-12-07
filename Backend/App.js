import express from "express";
import expressSession from 'express-session';
import { authRouter } from "./routes/auth.router.js";
import { adminRouter } from "./routes/admin.router.js";
import { conductorRouter } from "./routes/conductor.router.js";
import { tarifaRouter } from "./routes/tarifa.router.js"
import { stakeRouter } from "./routes/stake.router.js"
import { pasajeroRouter } from "./routes/pasajero.router.js"
import { susbcriptionRouter } from "./routes/suscription.router.js";
import { SESSION_SECRET, IS_PRODUCTION } from "./configs/index.js";


export const app = express();

import cors from 'cors'
app.use(cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000']
}));


app.use(express.json({limit: "1KB"}))

app.use(expressSession({
    name: "felipe.sid",
    saveUninitialized: true,
    resave: true,
    secret: SESSION_SECRET,
    cookie: {
        secure: IS_PRODUCTION,
        maxAge: 1000*60*60*24,
        httpOnly: false
    },
}))

app.use('/api', authRouter)
app.use('/api/admin', adminRouter)
app.use('/api/conductor', conductorRouter)
app.use('/api/tarifa', tarifaRouter)
app.use('/api/stakeHolder', stakeRouter)
app.use('/api/pasajero', pasajeroRouter)

app.use('/', susbcriptionRouter)

export const applicacion = app;

