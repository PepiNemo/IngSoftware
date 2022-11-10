import Validator from "fastest-validator";

const v = new Validator();

const schema = {
    Username: { type: "string", min: 3, max:20},
    Password: {type: "string", min:9, max:20},
    Nombre_Empresa: { type: "string", min:3 , max:60},
    //$$strict: true
}

export const RegisterStakeChecker = v.compile(schema);
