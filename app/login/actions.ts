"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// The login state carries the email and error message back to the form.
export type LoginState = { message: string; email: string };

// This function runs when the login form is submitted.
// It checks Supabase credentials and sends the user to /admin if they are valid.
export async function signIn(_prev: LoginState, form: FormData) {
  const email = String(form.get("email"));
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: String(form.get("password")),
  });
  if (error) return { message: "Wrong email or password.", email };
  redirect("/admin");
}
