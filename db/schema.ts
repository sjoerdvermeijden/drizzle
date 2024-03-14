import { serial, text, pgSchema } from "drizzle-orm/pg-core";
export const mySchema = pgSchema("user_schema")

export const mySchemaUsers = mySchema.table('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
});

export const mySchemaBikes = mySchema.table('bikes', {
    id: serial('id').primaryKey(),
    title: text('title'),
});

export const mySchemaBoats = mySchema.table('boats', {
    id: serial('id').primaryKey(),
    color: text('color'),
});