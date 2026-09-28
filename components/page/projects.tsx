import { ProjectCardSkeleton } from "@/app/projects/skeleton";
import ProjectCard from "../projectCard";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";
import { Alfa_Slab_One, Nunito_Sans } from "next/font/google";
import { Suspense } from "react";
import ProjectList from "../projectList";

const alfa_Slab_One = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Projects() {
  const rows = await db
    .select()
    .from(projects)
    .orderBy(desc(projects.createdAt));
  return (
    <div className="bg-surface rounded-3xl p-10">
      <div id="title" className="flex flex-row items-center">
        <div className="w-3 h-3 rounded-full bg-cta" />
        <p className={`${nunito_sans.className} pl-3 tracking-widest`}>
          Projects
        </p>
      </div>
      <h1
        className={`${alfa_Slab_One.className} text-8xl mt-6 whitespace-nowrap`}
      >
        Projects
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        <Suspense
          fallback={
            <>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </>
          }
        >
          <ProjectList />
        </Suspense>
      </div>
    </div>
  );
}
