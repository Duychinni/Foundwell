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
      className={`flex items-center gap-3 ${inverse ? "text-white" : "text-[#20201D]"}`}
      aria-label="Go to FoundWell home"
    >
      <span className="fw-condensed text-[1.35rem] font-medium uppercase leading-none tracking-[0.18em] sm:text-[1.55rem]">
        FOUNDWELL
      </span>
      <span className="relative block h-[42px] w-16 shrink-0" aria-hidden="true">
        <span className={`absolute left-0 top-[5px] h-[7px] w-[39px] rounded-[2px] ${inverse ? "bg-white" : "bg-[#20201D]"}`} />
        <span className="absolute right-0 top-[18px] h-[7px] w-[50px] rounded-[2px] bg-[#A68F6B]" />
        <span className="absolute left-1 top-[31px] h-[7px] w-[59px] rounded-[2px] bg-[#D2C1A6]" />
      </span>
    </a>
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
