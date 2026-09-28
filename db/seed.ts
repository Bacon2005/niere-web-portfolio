import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

async function seed() {
  const { db } = await import("./index");
  const { projects } = await import("./schema");
  await db
    .insert(projects)
    .values([
      {
        slug: "store-ledger",
        title: "Store Ledger",
        year: 2025,
        summary: "Records store credit instead of a paper notebook.",
      },
      {
        slug: "sebs",
        title: "SEBS",
        year: 2026,
        summary: "School Equipment Borrowing System.",
      },
      {
        slug: "picta",
        title: "Picta",
        year: 2026,
        summary: "Frontend app that uses phone camera.",
      },
    ])
    .onConflictDoNothing();
  console.log("Seeded projects");
  process.exit(0);
}

seed();
