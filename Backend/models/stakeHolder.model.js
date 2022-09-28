import { Schema, model } from "mongoose";

const schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String, 
        required: true
    },
    name:{
        type: String,
        required: true
    },
    role: {
        type:String,
        required: true
    }
})

export const modelStakeHolder = model("stakeHolder", schema);