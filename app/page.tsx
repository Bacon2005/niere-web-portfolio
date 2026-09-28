//Components
"use client";
import Main from "@/components/page/main";
import Contact from "@/components/page/contact";
import Subtitle from "@/components/subtitle";
import ToolShowcase from "@/components/toolShowcase";
import ProjectCard from "@/components/projectCard";
import { Alfa_Slab_One, Nunito_Sans } from "next/font/google";

const alfa_Slab_One = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* ======================= MAIN HERO ======================= */}
        <section id="main">
          <Main />
        </section>
        {/* ======================= ABOUT ME ======================= */}
        <section id="about" className="flex flex-col gap-8">
          <div className="bg-surface rounded-3xl p-10">
            <div id="title" className="flex flex-row items-center">
              <div className="w-3 h-3 rounded-full bg-cta" />
              <p className={`${nunito_sans.className} pl-3 tracking-widest`}>
                About
              </p>
            </div>
            <div className="flex flex-row justify-between gap-12 mt-6 pr-10 border-outline border-b-2 pb-10">
              <div id="aboutMe" className="pr-16">
                <h1
                  className={`${alfa_Slab_One.className} text-8xl mt-2.5 whitespace-nowrap`}
                >
                  About <span className="text-cta">Me</span>
                </h1>
                <p
                  className={`${nunito_sans.className} text-xl mt-4 text-left tracking-wide pr-10`}
                >
                  My goal is to write maintainable, clean, and understandable
                  code while building meaningful digital experiences. I enjoy
                  working across the stack, from crafting intuitive interfaces
                  to developing reliable back-end systems.
                </p>
                <p
                  className={`${nunito_sans.className} text-xl mt-4 text-left tracking-wide pr-10`}
                >
                  I care about performance, accessibility, and crafting seamless
                  user experiences.
                </p>
              </div>

              <div id="codeDesign" className="font-mono text-lg leading-6">
                <div className="flex gap-4 whitespace-nowrap">
                  <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                    1
                  </span>
                  <span className="text-gray-200">
                    {" "}
                    <span className="text-orange-300">const</span> developer ={" "}
                    {"{"}
                  </span>
                </div>
                <div className="flex gap-4 whitespace-nowrap">
                  <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                    2
                  </span>
                  <span className="text-gray-200 pl-4.5">
                    name: {`"Tyrone Niere"`},
                  </span>
                </div>
                <div className="flex gap-4 whitespace-nowrap">
                  <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                    3
                  </span>
                  <span className="text-gray-200 pl-4.5">
                    role: {`"Fullstack developer"`},
                  </span>
                </div>
                <div className="flex gap-4 whitespace-nowrap">
                  <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                    4
                  </span>
                  <span className="text-gray-200 pl-4.5">
                    focus:{" "}
                    <span className="text-yellow-300">
                      {`["Web",  "APIs", "UI/UX"]`}
                    </span>
                    ,
                  </span>
                </div>
                <div className="flex gap-4 whitespace-nowrap">
                  <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                    5
                  </span>
                  <span className="text-gray-200 pl-4.5">
                    passion:{" "}
                    <span className="text-yellow-300">{`"Clean Code"`}</span>,
                  </span>
                </div>
                <div className="flex gap-4 whitespace-nowrap">
                  <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                    6
                  </span>
                  <span className="text-gray-200 pl-4.5">
                    available: <span className="text-yellow-300">true</span>,
                  </span>
                </div>

                <div className="flex gap-4 whitespace-nowrap">
                  <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                    7
                  </span>
                  <span className="text-gray-200">{"};"}</span>
                </div>
              </div>
            </div>
            <div id="based">
              <p
                className={`${nunito_sans.className} text-xl mt-4 text-left tracking-wide pr-10`}
              >
                / Based in Cebu, Philippines
              </p>
            </div>
          </div>
          <div id="aboutCapabilites" className="bg-surface rounded-3xl p-10">
            <div className="flex flex-row items-center">
              <div className="w-3 h-3 rounded-full bg-cta" />
              <p className={`${nunito_sans.className} pl-3 tracking-widest`}>
                About - Capabilites
              </p>
            </div>
            <div className="flex flex-row justify-between gap-12 mt-6 pr-10">
              <div id="aboutMe" className="pr-16">
                <h1
                  className={`${alfa_Slab_One.className} text-8xl mt-2.5 whitespace-nowrap`}
                >
                  Skills and <span className="text-cta">Tools</span>
                </h1>
              </div>
            </div>
            <div id="skills-and-tools">
              <div className="grid grid-cols-2 gap-10">
                <div id="languages" className="min-w-0">
                  <Subtitle>Tools</Subtitle>

                  <ul className="flex flex-wrap gap-2.5">
                    <ToolShowcase>VsCode</ToolShowcase>
                    <ToolShowcase>Git</ToolShowcase>
                    <ToolShowcase>Github</ToolShowcase>
                    <ToolShowcase>Notion</ToolShowcase>
                  </ul>
                </div>

                <div id="languages" className="min-w-0">
                  <Subtitle>Languages</Subtitle>

                  <ul className="flex flex-wrap gap-2.5">
                    <ToolShowcase>Typescript</ToolShowcase>
                    <ToolShowcase>JavaScript</ToolShowcase>
                    <ToolShowcase>Python</ToolShowcase>
                    <ToolShowcase>Php</ToolShowcase>
                    <ToolShowcase>Java</ToolShowcase>
                    <ToolShowcase>SQL</ToolShowcase>
                    <ToolShowcase>HTML</ToolShowcase>
                    <ToolShowcase>CSS</ToolShowcase>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div id="databases" className="min-w-0">
                  <Subtitle>Databases</Subtitle>

                  <ul className="flex flex-wrap gap-2.5">
                    <ToolShowcase>Supabase</ToolShowcase>
                    <ToolShowcase>Postgres</ToolShowcase>
                    <ToolShowcase>MySQL</ToolShowcase>
                  </ul>
                </div>

                <div id="techStack" className="min-w-0">
                  <Subtitle>Frontend</Subtitle>

                  <ul className="flex flex-wrap gap-2.5">
                    <ToolShowcase>React</ToolShowcase>
                    <ToolShowcase>Tailwind CSS</ToolShowcase>
                    <ToolShowcase>Next.js</ToolShowcase>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div id="tools" className="min-w-0">
                  <Subtitle>Backend</Subtitle>

                  <ul className="flex flex-wrap gap-2.5">
                    <ToolShowcase>Express.js</ToolShowcase>
                    <ToolShowcase>Node.js</ToolShowcase>
                  </ul>
                </div>

                <div id="languages" className="min-w-0">
                  <Subtitle>Core Concepts</Subtitle>

                  <ul className="flex flex-wrap gap-2.5">
                    <ToolShowcase>Data Structures</ToolShowcase>
                    <ToolShowcase>Computer Architechture</ToolShowcase>
                    <ToolShowcase>OOP</ToolShowcase>
                    <ToolShowcase>Database Design</ToolShowcase>
                    <ToolShowcase>SOLID Principles</ToolShowcase>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======================= PROJECTS ======================= */}
        <section id="projects" className="flex flex-col gap-8">
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
              <ProjectCard
                image={"Sebs.jpg"}
                href={
                  "https://github.com/well-bluu/AdvaWeb-FinalProject-SEBS.git"
                }
                name={"SEBS"}
                date={"July-August 2026"}
                description={""}
              />
              <ProjectCard
                image={"PicTa.jpg"}
                href={"https://github.com/Bacon2005/picta.git"}
                name={"PicTa"}
                date={"July-August 2026"}
                description={""}
              />
              <ProjectCard
                image={"profile.jpg"}
                href={""}
                name={""}
                date={""}
                description={""}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-8">
          <Contact />
        </section>
      </div>
    </>
  );
}
