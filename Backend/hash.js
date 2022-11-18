import { hash } from "bcrypt";

hash("superadmin", 12)
    .then(p => console.log(p))