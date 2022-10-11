import { Schema, model } from "mongoose";

const schema = new Schema({
    
    ID_SH:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rut:{
        type: String, 
        required: true
    },
    dire_inicio:{
        type: String,
        required: true
    },
    dire_destino: {
        type:String,
        required: true
    },
    hora: {
        type:String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    metodo:{
        Type: String,


    }
})
export const modelViajeSH = model("ViajesSH", schema);