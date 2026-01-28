import Section from "@/app/components/Section";

export default function Page() {
  return (
    <div className="">
      <Section id="home" title="Israel A" subtitle="FULL-STACK DEVELOPER" fullscreen={true}>
        <div className="mt-6 flex flex-col gap-6 items-center">
          <p className="text-lg md:text-xl text-zinc-700 max-w-2xl">
            I build production-ready web apps with Next.js, Node.js and Python.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600 transition-colors" href="#contact">
              Hire me
            </a>
            <a className="rounded-xl border px-6 py-3 font-semibold hover:bg-gray-50 transition-colors" href="#works">
              View work
            </a>
          </div>
        </div>
      </Section>

      <Section id="about" title="About">
        <p className="text-zinc-700">
          Short story: what you do, what you’ve shipped, and what roles you want (Tasmania/Remote).
        </p>
      </Section>

      <Section id="services" title="Services">
        <ul className="grid gap-4 md:grid-cols-2">
          <li className="rounded-2xl border bg-white p-5">Websites that convert</li>
          <li className="rounded-2xl border bg-white p-5">Automation & AI workflows</li>
          <li className="rounded-2xl border bg-white p-5">SEO-ready builds</li>
          <li className="rounded-2xl border bg-white p-5">APIs / Backends</li>
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <div className="rounded-2xl border bg-white p-6">
          <p className="font-semibold">Freelance Web Developer — Prisma Coatings</p>
          <p className="mt-2 text-zinc-700">Built and deployed a client website with Next.js + Tailwind + Vercel.</p>
        </div>
      </Section>

      <Section id="works" title="Works">
        <div className="grid gap-4 md:grid-cols-2">
          <a className="rounded-2xl border bg-white p-6 hover:shadow-sm" href="#">
            Prisma Coatings — Case Study
          </a>
          <a className="rounded-2xl border bg-white p-6 hover:shadow-sm" href="#">
            Dictionary-Py — Case Study
          </a>
        </div>
      </Section>

      <Section id="blog" title="Blog">
        <p className="text-zinc-700">Optional. If you don’t post, remove this section.</p>
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-2xl border bg-white p-6">
          <p className="font-semibold">Email</p>
          <a className="text-red-600 font-semibold" href="mailto:you@email.com">you@email.com</a>
        </div>
      </Section>
    </div>
  );
}
