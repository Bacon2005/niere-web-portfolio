"use client";
import { Alfa_Slab_One, Nunito_Sans } from "next/font/google";
import { ArrowRight, Download } from "lucide-react";
import SocialLink from "@/components/socialLink";
const alfa_Slab_One = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Contact() {
  return (
    <div className="flex flex-row gap-8">
      <div className="bg-surface rounded-3xl p-10 flex-1">
        <div className="flex flex-col items-center justify-center">
          <div id="title" className="flex flex-row items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-cta" />
            <p className={`${nunito_sans.className} pl-3 tracking-widest`}>
              Cebu, Philippines
            </p>
          </div>
          <h1
            className={`${alfa_Slab_One.className} text-8xl mt-2.5 whitespace-nowrap`}
          >
            Contact Me
          </h1>
          <p
            className={`${nunito_sans.className} text-xl mt-4 text-left tracking-wide max-w-2xl`}
          >
            I&apos;m open to software roles, research collaborations, and
            freelance work, wherever good engineering makes an impact.
          </p>
          <div className="flex flex-row gap-8 mt-5">
            <SocialLink
              href={""}
              label={"Get in Touch"}
              icon={<ArrowRight size={18} />}
              color={"var(--cta)"}
            />
            <SocialLink
              href={""}
              label={"Download CV"}
              icon={<Download size={18} />}
              color={"var(--surface-2)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
