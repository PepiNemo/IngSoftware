import { Schema, model } from "mongoose";

const schema = new Schema({
    Nombre_Empresa:{
        type: String, 
        required: true
    },
    Rut:{
        type: Number, 
        required: true,
        unique: true
    },
    Correo:{
        type: String, 
        required: true
    },
    Numero_Contacto:{
        type: String, 
        required: true
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
    Imagen_URL:{
        type: String, 
        required: true
    }
})

export const modelStakeHolder = model("stakeHolder", schema);