"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var migrator_1 = require("drizzle-orm/node-postgres/migrator");
var db_1 = require("./db");
// This will run migrations on the database, skipping the ones already applied
await (0, migrator_1.migrate)(db_1.db, { migrationsFolder: './drizzle' });
process.exit();
