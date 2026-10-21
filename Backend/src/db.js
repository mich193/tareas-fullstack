import pg from "pg";
import { DATABASE_URL } from "./config.js";

const {Pool} = pg; //grupo de conexiones abiertas que se reutilizan

export const pool = new Pool ({
    connectionString: DATABASE_URL,
    ssl: {rejectUnauthorized: false},
});