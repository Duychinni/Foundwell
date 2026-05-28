"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Foundation • Waterproofing • Crawl Space",
    title: "Protect the structure under everything you care about.",
    description:
      "FoundWell helps homeowners solve foundation, moisture, and concrete issues with honest inspections and clean repair plans.",
    primaryCta: "Request Inspection",
    secondaryCta: "View Services",
    background:
      "linear-gradient(rgba(15,23,42,0.52), rgba(15,23,42,0.52)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
  },
  {
    eyebrow: "Trusted Repair Guidance",
    title: "Water, settling, and structural stress don’t fix themselves.",
    description:
      "From wet basements to shifting slabs, FoundWell is designed to feel premium, steady, and dependable from the first click.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "See Our Process",
    background:
      "linear-gradient(rgba(17,24,39,0.5), rgba(17,24,39,0.55)), url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80')",
  },
  {
    eyebrow: "Built for Long-Term Peace of Mind",
    title: "A cleaner, stronger landing page styled after the layout you liked.",
    description:
      "Same big visual impact and dual-button hero idea — but tailored to FoundWell’s own brand, tone, and service categories.",
    primaryCta: "Explore Projects",
    secondaryCta: "Contact FoundWell",
    background:
      "linear-gradient(rgba(30,41,59,0.48), rgba(30,41,59,0.58)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
  },
];

const services = [
  "Foundation Repair",
  "Basement Waterproofing",
  "Crawl Space Encapsulation",
  "Concrete Lifting & Leveling",
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl font-semibold tracking-[0.24em] text-white sm:text-2xl">
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
    <main className="bg-[#f5f1ea] text-slate-900">
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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.28)_0%,rgba(15,23,42,0.38)_40%,rgba(15,23,42,0.55)_100%)]" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white/75 sm:px-8 lg:px-12">
              <span>Free inspections • Honest repair plans • Regional service</span>
              <span className="hidden sm:inline">Call FoundWell for structural peace of mind</span>
            </div>
          </div>

          <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
            <BrandMark />

            <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 lg:flex">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-20 pt-10 sm:px-8 lg:px-12">
            <div className="max-w-3xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d8b189]">
                {slides[activeSlide].eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
                {slides[activeSlide].title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                {slides[activeSlide].description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-w-40 items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
                >
                  {slides[activeSlide].primaryCta}
                </a>
                <a
                  href="#services"
                  className="inline-flex min-w-40 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
                >
                  {slides[activeSlide].secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 sm:px-8 lg:px-12">
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

            <div className="hidden items-center gap-3 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur sm:flex">
              <span>Auto-slides every 5s</span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span>FoundWell hero concept</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b3f2a]">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Same bold layout idea. More tailored to your brand.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            This version pulls in the oversized visual hero, dual-button CTA style, and rotating panel feeling you liked — without copying their sale messaging or brand treatment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-[1.75rem] border border-slate-900/8 bg-white p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[#efe4d3]" />
              <h3 className="text-xl font-semibold text-slate-950">{service}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Replace this with your exact service copy once you finalize what FoundWell is offering first.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-slate-900/8 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b3f2a]">Brand direction</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                Premium contractor energy, but cleaner and more modern.
              </h2>
            </div>
            <div className="rounded-[1.75rem] bg-[#efe4d3] p-8 text-slate-800">
              <p className="leading-8">
                Next, I can turn this into a fuller McMillan-style experience with a utility bar, deeper mega-nav feel, richer service imagery, and more real business content once you give me the exact offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b189]">Next step</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Now that the hero matches the vibe better, we should make the rest of the page feel equally intentional.</h2>
          <p className="mt-4 max-w-3xl text-white/75 leading-8">
            The strongest next move is replacing placeholder sections with your real business identity: exact services, your city, quote flow, testimonials, and stronger project proof.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b189]">Contact FoundWell</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Want me to keep pushing this closer to the exact layout style?</h2>
            </div>
            <a
              href="mailto:hello@foundwell.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
            >
              Use hello@foundwell.com for now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
