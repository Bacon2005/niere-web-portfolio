import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";
import ProjectCard from "./projectCard";

export default async function ProjectList() {
  const rows = await db
    .select()
    .from(projects)
    .orderBy(desc(projects.createdAt));
  return (
    <>
      {rows.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.imageUrl ?? "/assets/photos/profile.jpg"}
          href={project.slug ? `/projects/${project.slug}` : "#"}
          name={project.title}
          date={String(project.year)}
          description={project.summary}
        />
      ))}
    </>
  );
}
