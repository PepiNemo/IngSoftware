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
        type: String, 
        required: false
    },
    Direccion_Origen1:{
        type: String, 
        required: true
    },
    Direccion_Destino1:{
        type: String, 
        required: true
    },
    Fecha_Hora_Termino:{
        type: String, 
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
        type: String,
        required: true,
    },
    Detalles_Extras:{
        type: String,
        required: false,
    }
})
export const modelViajeSH = model("ViajesSH", schema);