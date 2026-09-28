import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Load the database connection string from the environment.
const url = process.env.DATABASE_URL;
if (!url) throw new Error("Set DATABASE_URL in .env");

// Create the low-level Postgres client that speaks to your database.
const client = postgres(url, { prepare: false });

// Wrap that client with Drizzle so you can use db.insert(), db.select(), etc.
export const db = drizzle({ client });
