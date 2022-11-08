import { Schema, model } from "mongoose";

const schema = new Schema({
    Id_Conductor:{
        type: String, 
        required: false
    },
    Estado_Viaje:{
        type: String, 
        required: true
    },
    Fecha_Hora_Inicio:{
        type: Date, 
        required: false
    },
    Direccion_Origen:{
        type: String, 
        required: true
    },
    Fecha_Hora_Termino:{
        type: Date, 
        required: false
    },
    Id_SH:{
        type: String,
        required: true,
    },
    Nombre_Empresa:{
        type: String,
        required: true,
    },
    Nombre_StakeHolder:{
        type: String,
        required: true,
    },
    Nombre_Pasajero_Representante:{
        type: String,
        required: true,
    },
    Celular_Pasajero_Representante:{
        type: Number,
        required: true,
    },
    Numero_Pasajeros:{
        type: Number,
        required: true,
    },
    Numero_Maletas:{
        type: Number,
        required: true,
    },
    Tamaño_Equipaje:{
        type: Map,
        required: true,
    },
    Detalles_Extras:{
        type: Number,
        required: true,
    }
})
export const modelViajeSH = model("ViajesSH", schema);