import Validator from "fastest-validator";

const v = new Validator();

const schema = {
    username: { type: "string"},
    password: {type: "string"},
    $$strict: true
}

export const LoginChecker = v.compile(schema);