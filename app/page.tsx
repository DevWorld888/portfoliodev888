import Section from "@/app/components/Section";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <div className="">
      <Section id="home" title="I Augusto C." subtitle="FULL-STACK DEVELOPER" fullscreen={true}>
        <div className="mt-6 flex flex-col gap-6 items-center">
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-700 max-w-3xl leading-relaxed">
            I build production-ready web apps with Next.js, Node.js and Python.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a className="rounded-xl bg-red-500 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white hover:bg-red-600 transition-colors text-sm sm:text-base" href="#contact">
              Hire me
            </a>
            <a className="rounded-xl border px-6 py-3 sm:px-8 sm:py-4 font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base" href="#works">
              View work
            </a>
          </div>
        </div>
      </Section>

      <Section id="about" title="About Me" >
        <About />
      </Section>

      {/* <Section id="services" title="Services">
        
      </Section> */}

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="works" title="Recent Works">
        <Works />
      </Section>

      {/* <Section id="blog" title="Blog">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed">
            Coming soon! I'll be sharing insights about web development, 
            best practices, and the latest technologies.
          </p>
        </div>
      </Section> */}

      <Section id="contact" title="Get in Touch">
        <Contact/>
      </Section>
    </div>
  );
}