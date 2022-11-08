import { Schema, model } from "mongoose";

const schema = new Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Celular: {
        type: Number,
        required: true,
    },
    Correo: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Contraseña:{
        type: String, 
        required: true
    },
    Prioridad:{
        type: Number,
        required: true
    },
    Imagen_URL: {
        type: String,
        required: true,
    },
    Rol: {
        type: String,
        required: true,
    }
})

export const modelConductor = model("conductore", schema);