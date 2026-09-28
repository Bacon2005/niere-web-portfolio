//Components
import Main from "@/components/page/main";
import Contact from "@/components/page/contact";
import About from "@/components/page/about";
import Projects from "@/components/page/projects";

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
          <About />
        </section>
        {/* ======================= PROJECTS ======================= */}
        <section id="projects" className="flex flex-col gap-8">
          <Projects />
        </section>
        {/* ======================= CONTACT ======================= */}
        <section id="contact" className="flex flex-col gap-8">
          <Contact />
        </section>
      </div>
    </>
  );
}
