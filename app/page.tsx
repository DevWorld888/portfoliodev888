import Section from "@/app/components/Section";
import About from "./components/About";

export default function Page() {
  return (
    <div className="">
      <Section id="home" title="Israel A" subtitle="FULL-STACK DEVELOPER" fullscreen={true}>
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

      <Section id="services" title="Services">
        <ul className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          <li className="rounded-2xl border bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Websites that convert</h3>
            <p className="text-zinc-600 text-sm sm:text-base">Modern, fast, and optimized for conversions</p>
          </li>
          <li className="rounded-2xl border bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Automation & AI workflows</h3>
            <p className="text-zinc-600 text-sm sm:text-base">Streamline your business processes</p>
          </li>
          <li className="rounded-2xl border bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">SEO-ready builds</h3>
            <p className="text-zinc-600 text-sm sm:text-base">Optimized for search engines from day one</p>
          </li>
          <li className="rounded-2xl border bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">APIs / Backends</h3>
            <p className="text-zinc-600 text-sm sm:text-base">Scalable server-side solutions</p>
          </li>
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl border bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <p className="font-semibold text-lg sm:text-xl">Freelance Web Developer — Prisma Coatings</p>
            <p className="mt-3 text-zinc-700 text-base sm:text-lg leading-relaxed">
              Built and deployed a client website with Next.js + Tailwind + Vercel. 
              Achieved 95+ PageSpeed scores and improved client's online presence.
            </p>
          </div>
        </div>
      </Section>

      <Section id="works" title="Works">
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          <a className="rounded-2xl border bg-white p-6 sm:p-8 hover:shadow-lg transition-all hover:scale-105" href="#">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Prisma Coatings</h3>
            <p className="text-zinc-600 text-sm sm:text-base">Complete website redesign and development</p>
          </a>
          <a className="rounded-2xl border bg-white p-6 sm:p-8 hover:shadow-lg transition-all hover:scale-105" href="#">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Dictionary-Py</h3>
            <p className="text-zinc-600 text-sm sm:text-base">Python application for language learning</p>
          </a>
        </div>
      </Section>

      <Section id="blog" title="Blog">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed">
            Coming soon! I'll be sharing insights about web development, 
            best practices, and the latest technologies.
          </p>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border bg-white p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
            <p className="font-semibold text-lg sm:text-xl mb-3">Let's work together</p>
            <p className="text-zinc-600 mb-4 text-sm sm:text-base">Ready to bring your project to life?</p>
            <a className="text-red-600 font-semibold text-lg sm:text-xl hover:text-red-700 transition-colors" href="mailto:you@email.com">
              you@email.com
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}