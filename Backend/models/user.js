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
    }
},{timestamps: true})

export const modelo = model("user", schema);