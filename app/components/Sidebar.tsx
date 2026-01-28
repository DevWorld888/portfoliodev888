"use client";

import { NAV } from "@/app/data/nav";
// import { useActiveSection } from "@/components/useActiveSection";

export default function Sidebar() {
  // const active = useActiveSection(NAV.map(n => n.id));
  const active = "home"; // temporary placeholder

  return (
    <div className="h-full p-8 flex flex-col">
      <div className="text-3xl font-extrabold tracking-tight text-zinc-900">
        Dev888<span className="text-red-500">.</span>
      </div>

      <nav className="mt-12 flex flex-col gap-2">
        {NAV.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[
                "flex items-center gap-3 rounded-xl px-4 py-3 transition",
                isActive ? "bg-red-50 text-red-600" : "hover:bg-zinc-100 text-zinc-700"
              ].join(" ")}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-semibold">{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="mt-auto text-sm text-zinc-500">
        © {new Date().getFullYear()} Dev888
      </div>
    </div>
  );
}

