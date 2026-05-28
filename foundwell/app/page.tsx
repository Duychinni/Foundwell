"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Floors that feel built for home.",
    primaryCta: "Browse Floors",
    secondaryCta: "Book a Consultation",
    background:
      "linear-gradient(rgba(15,23,42,0.35), rgba(15,23,42,0.45)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80')",
  },
  {
    title: "Beautiful surfaces. Lasting comfort.",
    primaryCta: "Shop Collections",
    secondaryCta: "See Room Ideas",
    background:
      "linear-gradient(rgba(15,23,42,0.38), rgba(15,23,42,0.48)), url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80')",
  },
  {
    title: "Designed to elevate every room.",
    primaryCta: "Explore Styles",
    secondaryCta: "Talk to FoundWell",
    background:
      "linear-gradient(rgba(15,23,42,0.35), rgba(15,23,42,0.46)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')",
  },
];

const services = [
  "Hardwood",
  "Luxury Vinyl",
  "Laminate",
  "Tile",
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl font-semibold tracking-[0.22em] text-white sm:text-2xl">
        FOUNDWELL
      </span>
      <span className="relative block h-9 w-18 sm:h-10 sm:w-20" aria-hidden="true">
        <span className="absolute left-0 top-0 h-3 w-9 rounded-sm bg-white" />
        <span className="absolute left-6 top-3.5 h-3 w-10 rounded-sm bg-[#9a6844]" />
        <span className="absolute left-2.5 top-7 h-3 w-11 rounded-sm bg-[#d4b28d]" />
      </span>
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#f7f1e8] text-slate-900">
      <section className="relative min-h-screen overflow-hidden bg-slate-950">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              index === activeSlide
                ? "pointer-events-auto opacity-100 scale-100"
                : "pointer-events-none opacity-0 scale-[1.02]"
            }`}
            style={{ backgroundImage: slide.background }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(15,23,42,0.3)_45%,rgba(15,23,42,0.45)_100%)]" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-10">
              <BrandMark />

              <nav className="hidden items-center gap-8 text-sm font-medium text-white/88 lg:flex">
                <a href="#services" className="transition hover:text-white">Browse Floors</a>
                <a href="#learn" className="transition hover:text-white">Learn Resources</a>
                <a href="#about" className="transition hover:text-white">About Us</a>
              </nav>
            </div>
          </header>

          <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 pb-24 pt-10 text-center sm:px-8 lg:px-12">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                {slides[activeSlide].title}
              </h1>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-w-44 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
                >
                  {slides[activeSlide].primaryCta}
                </a>
                <a
                  href="#about"
                  className="inline-flex min-w-44 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
                >
                  {slides[activeSlide].secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 pb-8 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeSlide ? "w-12 bg-white" : "w-6 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-[1.75rem] border border-slate-900/8 bg-white p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[#efe4d3]" />
              <h3 className="text-xl font-semibold text-slate-950">{service}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Placeholder collection content ready to swap for your real flooring categories.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="learn" className="border-y border-slate-900/8 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-[1.75rem] bg-[#efe4d3] p-8 text-slate-800">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b3f2a]">Learn Resources</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              This area can become your guides, care tips, and buying help section.
            </h2>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b189]">About Us</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Now the hero is stripped down the way you asked — centered slogan, two buttons, less copy.</h2>
        </div>
      </section>
    </main>
  );
}
