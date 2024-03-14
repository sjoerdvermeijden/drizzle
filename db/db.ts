import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
// or
const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "postgres",
});
await client.connect();

export const db = drizzle(client);