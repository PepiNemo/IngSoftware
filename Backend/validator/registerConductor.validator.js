import Validator from "fastest-validator";

const v = new Validator();

const schema = {
    username: { type: "string", min: 3, max:20},
    password: {type: "string", min:9, max:20},
    name: { type: "string", min:3 , max:60},
    $$strict: true
}

export const RegisterConductorChecker = v.compile(schema);