import "server-only";

import { redirect } from "next/navigation";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

// This checks whether the logged-in user is an admin before allowing access to /admin.
// If not, they are sent back to /login.
export const verifyAdmin = cache(async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (!claims || claims.app_metadata?.role !== "admin") redirect("/login");
  return { userId: claims.sub, email: claims.email as string };
});
