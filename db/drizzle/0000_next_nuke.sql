CREATE SCHEMA "user_schema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_schema"."bikes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_schema"."boats" (
	"id" serial PRIMARY KEY NOT NULL,
	"color" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_schema"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
