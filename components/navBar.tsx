"use client";
import Image from "next/image";
import { Home, User, Gpu, Mail } from "lucide-react";
import NavLink from "@/components/navLinks";

export default function NavBar() {
  return (
    <div className="sticky top-6 flex flex-col items-center gap-8 bg-surface rounded-3xl px-4 py-6 w-24">
      {/* Profile picture */}
      <div className="rounded-full overflow-hidden ring-2 ring-outline">
        <Image
          src="/assets/photos/Ty_White.png"
          alt="Ty Logo"
          width={50}
          height={50}
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <hr className="w-8 border-outline" />

      {/* Nav items — using your existing NavLink, just placeholder squares as children for now */}
      <ul className="flex flex-col gap-10 items-center">
        <NavLink href="#main">
          <Home size={30} />
        </NavLink>
        <NavLink href="#about">
          <User size={30} />
        </NavLink>
        <NavLink href="#projects">
          <Gpu size={30} />
        </NavLink>
        <NavLink href="#contact">
          <Mail size={30} />
        </NavLink>
      </ul>

      <hr className="w-8 border-outline" />

      {/* Diamond placeholder — theme toggle to be designed later */}
      <div className="w-8 h-8 rotate-45 bg-surface-2 rounded-md" />
    </div>
  );
}
