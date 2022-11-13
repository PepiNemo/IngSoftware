import { Schema, model } from "mongoose";

const schema = new Schema({
    Nombre_Pasajero: {
        type: String,
        required: true,
        unique: false
    },
    Celular:{
        type: String, 
        required: true
    },
    Correo:{
        type: String, 
        required: true
    },
    Numero_Pasajeros:{
        type: Number,
        required: true
    },
    Dire_Inicio:{
        type: String,
        required: true
    },
    Dire_Destino: {
        type:String,
        required: true
    },
    Fecha:{
        type: String,
        required: true
    },
    Hora_Inicio: {
        type:String,
        required: true
    },
    Numero_Maletas: {
        type: Number,
        required: false
    },
    Tamaño_Maletas: {
        type: String,
        required: false
    },
    Metodo_pago:{
        type: String
    },
    Estado_Viaje:{
        type: String,
        required: true
    },
    Id_Conductor: {
        type: String,
        required: false
    },
    Detalles_Extras:{
        type:String
    }
})
export const modelViaje = model("ViajesComune", schema);