import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// This defines the table that stores each project card in Postgres.
// Drizzle turns this TypeScript object into a SQL table schema.
export const projects = pgTable("projects", {
  // Unique record ID for each project.
  id: uuid("id").primaryKey().defaultRandom(),
  // URL-friendly version of the title, used for project slugs like my-project.
  slug: text("slug").notNull().unique(),
  // The display name shown on the project card.
  title: text("title").notNull(),
  // Year the project was created or completed.
  year: integer("year").notNull(),
  // Short description shown under the project title.
  summary: text("summary").notNull(),
  // Public URL for the uploaded project image in Supabase storage.
  imageUrl: text("image_url"),
  // Timestamp automatically set when a row is created.
  createdAt: timestamp("created_at").notNull().defaultNow(),
}).enableRLS();
