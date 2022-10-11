import { config } from "dotenv";
config()
export const DATABASE_CONNECTION_STRINGS=process.env.DATABASE_CONNECTION_STRING;
export const PORT = process.env.PORT || 3300;
export const dbSecretFields = ['__v', 'password'];
export const SESSION_SECRET = process.env.SESSION_SECRET
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';



