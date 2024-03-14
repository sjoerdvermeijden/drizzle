import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
    schema: './db/schema.ts',
    out: './db/drizzle',
    driver: 'pg',
    dbCredentials: {
        host: "localhost",
        user: "postgres",
        password: "password",
        database: "postgres",
    },
} satisfies Config;