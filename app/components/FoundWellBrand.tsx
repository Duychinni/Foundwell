"use client";

import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop-floors", label: "Collection" },
  { href: "/#direct-supply", label: "Direct Supply" },
  { href: "/request-quote", label: "Request Quote" },
];

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="/"
      className={`flex items-center gap-2.5 sm:gap-3 ${inverse ? "text-white" : "text-[#20201D]"}`}
      aria-label="Go to FoundWell home"
    >
      <span className="fw-condensed text-[1.02rem] font-medium uppercase leading-none tracking-[0.14em] sm:text-[1.55rem] sm:tracking-[0.18em]">
        FOUNDWELL
      </span>
      <span className="relative block h-[30px] w-[46px] shrink-0 sm:h-[42px] sm:w-16" aria-hidden="true">
        <span className={`absolute left-0 top-[4px] h-[5px] w-[28px] rounded-[2px] sm:top-[5px] sm:h-[7px] sm:w-[39px] ${inverse ? "bg-white" : "bg-[#20201D]"}`} />
        <span className="absolute right-0 top-[13px] h-[5px] w-[36px] rounded-[2px] bg-[#A68F6B] sm:top-[18px] sm:h-[7px] sm:w-[50px]" />
        <span className="absolute left-1 top-[22px] h-[5px] w-[42px] rounded-[2px] bg-[#D2C1A6] sm:top-[31px] sm:h-[7px] sm:w-[59px]" />
      </span>
    </a>
  );
}

type FoundWellIconName =
  | "flooring"
  | "quote"
  | "sample"
  | "delivery"
  | "factory"
  | "client"
  | "wear"
  | "core"
  | "pad"
  | "finish"
  | "timeline";

const iconPaths: Record<FoundWellIconName, React.ReactNode> = {
  flooring: (
    <>
      <path d="M5 20.5h18" />
      <path d="M7 16.5h16" />
      <path d="M9 12.5h14" />
      <path d="M11 8.5h12" />
      <path d="M5 20.5l6-12" />
      <path d="M13 20.5l5-12" />
    </>
  ),
  quote: (
    <>
      <path d="M6.5 5.5h13v17h-13z" />
      <path d="M10 10h6" />
      <path d="M10 14h6" />
      <path d="M10 18h3" />
      <path d="M19.5 9.5l2.5 1.4v14l-4-2.5" />
    </>
  ),
  sample: (
    <>
      <path d="M5 16.5l8-8 8 8-8 8z" />
      <path d="M9 12.5l8 8" />
      <path d="M13 8.5v16" />
      <path d="M17 12.5l-8 8" />
    </>
  ),
  delivery: (
    <>
      <path d="M4.5 10.5h12v9h-12z" />
      <path d="M16.5 13.5h3.5l2.5 3v3h-6" />
      <path d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M19 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M7 7.5h8" />
    </>
  ),
  factory: (
    <>
      <path d="M5 21.5v-9l5 2.5v-2.5l5 2.5v-5.5h5v12" />
      <path d="M4 21.5h22" />
      <path d="M8 18h2" />
      <path d="M14 18h2" />
      <path d="M20 18h2" />
      <path d="M18 7.5h3" />
    </>
  ),
  client: (
    <>
      <path d="M13 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M6 23c.7-4 3.2-6 7-6s6.3 2 7 6" />
      <path d="M21 8.5h3" />
      <path d="M22.5 7v3" />
    </>
  ),
  wear: (
    <>
      <path d="M5 7.5h18" />
      <path d="M5 12.5h18" />
      <path d="M5 17.5h18" />
      <path d="M9 22.5h10" />
      <path d="M9 7.5v10" />
      <path d="M17 7.5v10" />
    </>
  ),
  core: (
    <>
      <path d="M5 9.5l8-4 8 4-8 4z" />
      <path d="M5 14.5l8 4 8-4" />
      <path d="M5 9.5v5l8 4 8-4v-5" />
    </>
  ),
  pad: (
    <>
      <path d="M5 8.5h18" />
      <path d="M7 14.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0" />
      <path d="M7 19.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0" />
    </>
  ),
  finish: (
    <>
      <path d="M7 5.5h12v17H7z" />
      <path d="M11 5.5v17" />
      <path d="M15 5.5v17" />
      <path d="M8.5 10h2" />
      <path d="M12.5 16h2" />
      <path d="M16.5 12h1" />
    </>
  ),
  timeline: (
    <>
      <path d="M6 6.5h16" />
      <path d="M6 13.5h16" />
      <path d="M6 20.5h16" />
      <path d="M6 6.5v14" />
      <path d="M14 6.5v14" />
      <path d="M22 6.5v14" />
    </>
  ),
};

export function FoundWellIcon({
  name,
  inverse = false,
  className = "",
}: {
  name: FoundWellIconName;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${
        inverse ? "border-white/18 bg-white/[0.06] text-[#D2C1A6]" : "border-[#20201D]/10 bg-[#D2C1A6]/18 text-[#20201D]"
      } ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 28 28" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[name]}
      </svg>
    </span>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#20201D]/10 bg-white/94 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-7 px-4 py-4 sm:px-6 lg:px-12">
        <BrandMark />

        <nav className="hidden items-center gap-7 text-[13px] text-[#716C61] lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#20201D]">
              {link.label}
            </a>
          ))}
          <a
            href="/request-quote"
            className="rounded-full border border-[#20201D] px-5 py-2.5 text-[#20201D] transition hover:bg-[#20201D] hover:text-white"
          >
            Start a Project
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#20201D]/18 text-[#20201D] transition hover:border-[#20201D] lg:hidden"
        >
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[#20201D]/10 bg-white px-4 pb-5 pt-2 shadow-[0_18px_45px_rgba(32,32,29,0.08)] sm:px-6 lg:hidden">
          <nav className="mx-auto grid max-w-[1440px] gap-1 text-[14px] text-[#716C61]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-3 py-3 transition hover:bg-[#20201D]/5 hover:text-[#20201D]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/request-quote"
              onClick={() => setMenuOpen(false)}
              className="fw-mono mt-2 inline-flex items-center justify-center rounded-full bg-[#20201D] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black"
            >
              Start a Project
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="fw-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#A68F6B]">
      {children}
    </p>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="fw-mono rounded-full border border-[#20201D]/12 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#20201D]">
      {children}
    </span>
  );
}
