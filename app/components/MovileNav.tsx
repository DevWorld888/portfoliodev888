"use client";

import { useState } from "react";
import { NAV } from "@/app/data/nav";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 py-3 flex items-center justify-between">
      <div className="font-extrabold">Dev888<span className="text-red-500">.</span></div>
      <button
        onClick={() => setOpen(v => !v)}
        className="rounded-xl border px-3 py-2 font-semibold"
      >
        Menu
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 border-b bg-white p-4">
          <nav className="flex flex-col gap-2">
            {NAV.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 hover:bg-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

