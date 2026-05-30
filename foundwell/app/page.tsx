"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Direct Flooring Supply",
    background:
      "linear-gradient(rgba(81,57,47,0.08), rgba(81,57,47,0.14)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')",
  },
  {
    title: "Engineered Hardwood",
    primaryOnly: true,
    primaryLabel: "Explore Collection",
    background:
      "linear-gradient(rgba(81,57,47,0.03), rgba(81,57,47,0.08)), url('/engineered-hardwood-slide2.png')",
  },
  {
    title: "Material-led flooring for serious projects.",
    background:
      "linear-gradient(rgba(81,57,47,0.08), rgba(81,57,47,0.14)), url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80')",
  },
];

const services = [
  {
    title: "Engineered Hardwood",
    description: "Commercial-ready wood flooring with finish consistency, grade clarity, and dependable lead-time visibility.",
  },
  {
    title: "SPC & LVT",
    description: "Durable, specification-friendly resilient flooring options suited to multi-unit, hospitality, and light commercial use.",
  },
  {
    title: "Laminate",
    description: "Cost-conscious flooring selections designed to balance appearance, wear performance, and practical install requirements.",
  },
  {
    title: "Tile & Surface Programs",
    description: "Supplementary surface categories for projects that need coordinated material decisions across spaces.",
  },
];

function BrandMark() {
  return (
    <a href="/" className="flex items-center gap-2.5 sm:gap-3" aria-label="Go to FoundWell home">
      <span className="text-base font-semibold tracking-[0.18em] text-white sm:text-lg md:tracking-[0.22em] lg:text-xl">
        FOUNDWELL
      </span>
      <span className="relative block h-7 w-14 sm:h-8 sm:w-16 md:h-9 md:w-18" aria-hidden="true">
        <span className="absolute left-0 top-0 h-2 w-7 rounded-sm bg-white sm:h-2.5 sm:w-8" />
        <span className="absolute left-4 top-2.5 h-2 w-8 rounded-sm bg-[#8A2F24] sm:left-5 sm:top-3 sm:h-2.5 sm:w-9" />
        <span className="absolute left-1.5 top-5 h-2 w-9 rounded-sm bg-[#AD7042] sm:left-2 sm:top-6 sm:h-2.5 sm:w-10" />
      </span>
    </a>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPrev = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToNext();
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-[#51392F]">
      <section className="relative min-h-screen overflow-hidden bg-[#51392F]">
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              index === activeSlide
                ? "pointer-events-auto opacity-100 scale-100"
                : "pointer-events-none opacity-0 scale-[1.015]"
            }`}
            style={{ backgroundImage: slide.background }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(81,57,47,0.04)_0%,rgba(81,57,47,0.08)_32%,rgba(81,57,47,0.16)_100%)]" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-5 sm:px-6 sm:py-7 lg:px-12">
            <div className="flex w-full items-start justify-between gap-4 lg:items-center">
              <BrandMark />

              <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-[0.08em] text-white lg:flex xl:gap-9">
                <a href="/shop-floors" className="text-[#fffdf9] drop-shadow-[0_0_18px_rgba(255,255,255,0.34)] transition hover:text-white hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.5)]">Browse Floors</a>
                <a href="#learn" className="text-[#fffdf9] drop-shadow-[0_0_18px_rgba(255,255,255,0.34)] transition hover:text-white hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.5)]">Learn Resources</a>
                <a href="#about" className="text-[#fffdf9] drop-shadow-[0_0_18px_rgba(255,255,255,0.34)] transition hover:text-white hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.5)]">About Us</a>
              </nav>
            </div>
          </header>

          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:hidden">
            <div className="flex flex-wrap gap-2 pb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white">
              <a href="/shop-floors" className="rounded-full border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Browse Floors</a>
              <a href="#learn" className="rounded-full border border-white/20 bg-white/8 px-3 py-2 backdrop-blur-sm">Resources</a>
              <a href="#about" className="rounded-full border border-white/20 bg-white/8 px-3 py-2 backdrop-blur-sm">About</a>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-center justify-center px-4 pb-20 pt-8 text-center sm:px-6 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28">
            <div className="max-w-5xl rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(81,57,47,0.38)_0%,rgba(81,57,47,0.22)_42%,rgba(81,57,47,0.04)_78%,rgba(81,57,47,0)_100%)] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
              <h1 className="mx-auto max-w-5xl text-3xl font-serif font-normal leading-[1.08] tracking-[0.01em] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.6rem]">
                {slides[activeSlide].title}
              </h1>

              <p className="mx-auto mt-4 max-w-xl px-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#fffdf9] drop-shadow-[0_0_18px_rgba(255,255,255,0.18)] sm:mt-5 sm:max-w-2xl sm:px-0 sm:text-xs lg:text-sm">
                {activeSlide === 0 ? "High-quality flooring. Better direct pricing." : "Better materials. Smarter pricing."}
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a
                  href="/shop-floors"
                  className="inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-full bg-[#8A2F24] px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#76261d] sm:h-14 sm:w-[220px] sm:max-w-none sm:px-8 sm:text-[13px]"
                >
                  {activeSlide === 1 ? "Explore Collection" : "Browse Floors"}
                </a>
                {activeSlide !== 1 ? (
                  <a
                    href="/request-quote"
                    className="inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/16 sm:h-14 sm:w-[220px] sm:max-w-none sm:px-8 sm:text-[13px]"
                  >
                    Request Quote
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-3 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:gap-4 sm:px-6 sm:pb-10 lg:px-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={goToPrev}
                aria-label="Previous slide"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                <Arrow direction="left" />
              </button>

              <button
                onClick={goToNext}
                aria-label="Next slide"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                <Arrow direction="right" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.title}-${index}`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide ? "w-14 bg-white" : "w-8 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A2F24] sm:text-sm">
            Core categories
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#51392F] sm:text-3xl lg:text-4xl">
            Flooring programs built for commercial decisions, not showroom browsing.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.5rem] border border-[#51392F]/8 bg-[#F4EFE6] p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6">
              <div className="mb-4 h-11 w-11 rounded-2xl bg-white sm:h-12 sm:w-12" />
              <h3 className="text-lg font-semibold text-[#51392F] sm:text-xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#51392F]/75">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="learn" className="border-y border-[#51392F]/8 bg-[#F4EFE6]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
          <div className="rounded-[1.5rem] bg-white p-6 text-[#51392F] shadow-sm sm:rounded-[1.75rem] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A2F24] sm:text-sm">Learn Resources</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Plainspoken guidance on material selection, performance, pricing context, and delivery planning.
            </h2>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="rounded-[1.75rem] bg-[#51392F] px-6 py-8 text-white sm:rounded-[2rem] sm:px-8 sm:py-10 sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F4EFE6] sm:text-sm">About FoundWell</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
            High-quality flooring at better prices, managed with clarity from sample selection to door delivery.
          </h2>
        </div>
      </section>

    </main>
  );
}
