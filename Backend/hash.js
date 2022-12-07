import { hash } from "bcrypt";

hash("malisimoconductor", 12)
    .then(p => console.log(p))