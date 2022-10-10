import { Schema, model } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    number:{
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
    metodo_pago:{
        Type: String,
    }
})
export const ViajeComun = model("ViajesComune", schema);