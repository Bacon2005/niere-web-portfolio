import { redirect } from "next/navigation";

// Visiting /projects sends people to the home page.
export default function ProjectsIndex() {
  redirect("/");
}
