"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Direct flooring supply for projects that need clarity, quality, and price control.",
    primaryCta: "Browse Floors",
    secondaryCta: "Request Samples",
    background:
      "linear-gradient(rgba(81,57,47,0.08), rgba(81,57,47,0.14)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')",
  },
  {
    title: "Engineered Hardwood",
    primaryCta: "Shop Collections",
    secondaryCta: "Request Specs",
    background:
      "linear-gradient(rgba(81,57,47,0.03), rgba(81,57,47,0.08)), url('/engineered-hardwood-slide2.png')",
  },
  {
    title: "Material-led flooring selections for builders, designers, and commercial buyers.",
    primaryCta: "Explore Styles",
    secondaryCta: "Talk to FoundWell",
    background:
      "linear-gradient(rgba(81,57,47,0.12), rgba(81,57,47,0.20)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')",
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
    <div className="flex items-center gap-3">
      <span className="text-lg font-semibold tracking-[0.22em] text-white sm:text-xl">
        FOUNDWELL
      </span>
      <span className="relative block h-8 w-16 sm:h-9 sm:w-18" aria-hidden="true">
        <span className="absolute left-0 top-0 h-2.5 w-8 rounded-sm bg-white" />
        <span className="absolute left-5 top-3 h-2.5 w-9 rounded-sm bg-[#8A2F24]" />
        <span className="absolute left-2 top-6 h-2.5 w-10 rounded-sm bg-[#AD7042]" />
      </span>
    </div>
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
            key={slide.title}
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
          <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-7 sm:px-8 lg:px-12">
            <div className="flex items-center gap-8 xl:gap-12">
              <BrandMark />

              <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-[0.08em] text-white/90 lg:flex xl:gap-9">
                <a href="/shop-floors" className="transition hover:text-white">Browse Floors</a>
                <a href="#learn" className="transition hover:text-white">Learn Resources</a>
                <a href="#about" className="transition hover:text-white">About Us</a>
              </nav>
            </div>
          </header>

          <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-center justify-center px-6 pb-28 pt-10 text-center sm:px-8 lg:px-12">
            <div className="max-w-5xl text-white">
              <h1 className="mx-auto max-w-5xl text-4xl font-serif font-normal leading-[1.05] tracking-[0.01em] sm:text-5xl lg:text-7xl xl:text-[5.2rem]">
                {slides[activeSlide].title}
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-xs font-medium uppercase tracking-[0.24em] text-[#F4EFE6] sm:text-sm">
                Better flooring. Clearer pricing.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/shop-floors"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-[#8A2F24] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#76261d]"
                >
                  {slides[activeSlide].primaryCta}
                </a>
                <a
                  href="#about"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/16"
                >
                  {slides[activeSlide].secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-4 px-6 pb-10 sm:px-8 lg:px-12">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrev}
                aria-label="Previous slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                <Arrow direction="left" />
              </button>

              <button
                onClick={goToNext}
                aria-label="Next slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                <Arrow direction="right" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeSlide ? "w-14 bg-white" : "w-7 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8A2F24]">
            Core categories
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#51392F] sm:text-4xl">
            Flooring programs built for commercial decisions, not showroom browsing.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-[#51392F]/8 bg-[#F4EFE6] p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-white" />
              <h3 className="text-xl font-semibold text-[#51392F]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#51392F]/75">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="learn" className="border-y border-[#51392F]/8 bg-[#F4EFE6]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-[1.75rem] bg-white p-8 text-[#51392F] shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8A2F24]">Learn Resources</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Plainspoken guidance on material selection, performance, pricing context, and delivery planning.
            </h2>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] bg-[#51392F] px-8 py-10 text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F4EFE6]">About FoundWell</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            High-quality flooring at better prices, managed with clarity from sample selection to door delivery.
          </h2>
        </div>
      </section>
    </main>
  );
}
