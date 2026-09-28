import { verifyAdmin } from "@/lib/dal";
import { signOut } from "./actions";
import { NewProjectForm } from "./new-project-form";

// This is the admin screen where a logged-in admin creates a new project card.
// The page first verifies the user is an admin before showing the form.
export default async function AdminPage() {
  const admin = await verifyAdmin();

  return (
    <main className="px-16 py-8">
      <div className="flex items-baseline justify-between">
        <h1 className="text-4xl font-bold">New project post</h1>
        <form action={signOut}>
          <span className="mr-4 text-neutral-500">{admin.email}</span>
          <button className="underline">Sign out</button>
        </form>
      </div>
      <NewProjectForm />
    </main>
  );
}
