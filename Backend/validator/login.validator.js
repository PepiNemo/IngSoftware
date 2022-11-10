import Validator from "fastest-validator";

const v = new Validator();

const schema = {
    Username: { type: "string"},
    Password: {type: "string"},
    $$strict: true
}

export const LoginChecker = v.compile(schema);