import { Schema, model } from "mongoose";

const schema = new Schema({
    Id_Conductor: {
        type: String,
        required: true
    },
    Prioridad: {
        type: Number,
        required: true
    },
    pushSubscription: {
        type: String, 
        required: true,
    }

})

export const modelSubscription = model("Subscription",schema);