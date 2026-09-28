import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

// This loads your .env values so Drizzle can read DATABASE_URL from the app environment.
loadEnvConfig(process.cwd());

export default defineConfig({
  // Where the table definitions live.
  schema: "./db/schema.ts",
  // Where generated SQL migration files are saved.
  out: "./drizzle",
  // Tells Drizzle this is a Postgres database.
  dialect: "postgresql",
  // Connection info used when generating or applying migrations.
  dbCredentials: { url: process.env.DATABASE_URL! },
});
