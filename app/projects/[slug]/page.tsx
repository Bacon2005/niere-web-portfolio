import Image from "next/image";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { ImageSkeleton } from "../skeleton";
import { Suspense } from "react";
// Tells Next.js to fetch fresh data on every request instead of caching
// the page at build time. Useful so new projects show up immediately.
export const dynamic = "force-dynamic";
// Next.js passes the dynamic part of the URL through `params`.
// For /projects/storeledger, params is { slug: "storeledger" }.
// In recent Next.js versions, params is a Promise, so it must be awaited.
type Props = { params: Promise<{ slug: string }> };

// This is a Server Component (no "use client"), so it can query the
// database directly. `async` lets us use `await` inside it.
export default async function ProjectPage({ params }: Props) {
  // Wait for params to resolve, then pull out the slug from the URL.
  const { slug } = await params;

  // Query the database:
  //   select().from(projects)         -> SELECT * FROM projects
  //   where(eq(projects.slug, slug))  -> WHERE slug = 'storeledger'
  //   limit(1)                        -> only need one row
  // Drizzle always returns an array, so `const [project]` grabs the first
  // item. If nothing matched, `project` will be undefined.
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, slug))
    .limit(1);

  // If no project has this slug (e.g. someone typed a bad URL), show the
  // 404 page. This also tells TypeScript that `project` is defined below.
  if (!project) notFound();

  return (
    <div className="bg-surface-2 rounded-3xl mt-8">
      <div className="p-4">
        <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
        <p className="mt-2 text-neutral-500">{project.year}</p>
      </div>

      {/* Only render the image if the project actually has an image URL.
          The Supabase hostname must be allowed in next.config for this to work. */}

      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={960}
          height={540}
          className="mt-6 h-80 w-auto rounded border object-contain"
        />
      )}
      <div className="p-4">
        <p className="mb-6 text-xl">{project.summary}</p>
      </div>
    </div>
  );
}
