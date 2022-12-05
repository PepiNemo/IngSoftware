import { Schema, model } from "mongoose";

const schema = new Schema({
    Lugar:{
        type: String, 
        required: true,
        unique: true
    },
    Precio:{
        type: Number, 
        required: true
    }
})

export const modelTarifa = model("modelTarifa", schema);