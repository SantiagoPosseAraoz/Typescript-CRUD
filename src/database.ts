import { Pool } from "pg";

export const pool = new Pool({
    user : "postgres",
    password: "123",
    host : "localhost",
    database : "TypescriptCRUD"
})
