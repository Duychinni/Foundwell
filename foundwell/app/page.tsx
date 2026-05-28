"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Floors that feel built for home.",
    primaryCta: "Browse Floors",
    secondaryCta: "Book a Consultation",
    background:
      "linear-gradient(rgba(15,23,42,0.32), rgba(15,23,42,0.46)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80')",
  },
  {
    title: "Engineered Hardwood",
    primaryCta: "Shop Collections",
    secondaryCta: "See Room Ideas",
    background:
      "linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.14)), url('/engineered-hardwood-slide2.png')",
  },
  {
    title: "Designed to elevate every room.",
    primaryCta: "Explore Styles",
    secondaryCta: "Talk to FoundWell",
    background:
      "linear-gradient(rgba(15,23,42,0.34), rgba(15,23,42,0.48)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')",
  },
];

const services = ["Hardwood", "Luxury Vinyl", "Laminate", "Tile"];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg font-semibold tracking-[0.22em] text-white sm:text-xl">
        FOUNDWELL
      </span>
      <span className="relative block h-8 w-16 sm:h-9 sm:w-18" aria-hidden="true">
        <span className="absolute left-0 top-0 h-2.5 w-8 rounded-sm bg-white" />
        <span className="absolute left-5 top-3 h-2.5 w-9 rounded-sm bg-[#9a6844]" />
        <span className="absolute left-2 top-6 h-2.5 w-10 rounded-sm bg-[#d4b28d]" />
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
    <main className="bg-[#f7f1e8] text-slate-900">
      <section className="relative min-h-screen overflow-hidden bg-slate-950">
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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0.24)_28%,rgba(15,23,42,0.42)_100%)]" />

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
              <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl xl:text-[5.5rem]">
                {slides[activeSlide].title}
              </h1>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/shop-floors"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-white/90"
                >
                  {slides[activeSlide].primaryCta}
                </a>
                <a
                  href="#about"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/35 bg-white/8 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/16"
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
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The top section is now much tighter: nav beside logo, shorter slogan, centered buttons, cleaner proportions.</h2>
        </div>
      </section>
    </main>
  );
}
