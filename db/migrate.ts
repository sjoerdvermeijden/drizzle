import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const run = async () => {
    const client = new pg.Client({
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "password",
        database: "postgres",
    });

    await client.connect();

    const db = drizzle(client);

    await migrate(db, { migrationsFolder: "db/drizzle" });

    await client.end();
};

run();