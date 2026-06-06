"use client";

import { useState } from "react";
import { FoundWellIcon } from "./FoundWellBrand";

const finishes = [
  {
    name: "Castle Oak",
    code: "VL-01",
    slug: "castle-oak",
    description: "A bright blonde SPC floor for airy commercial-ready interiors and lighter palettes.",
  },
  {
    name: "Cairo",
    code: "VL-02",
    slug: "cairo-oak",
    description: "Golden midtone oak with grounded texture for warm residential and hospitality spaces.",
  },
  {
    name: "Royal Oak",
    code: "VL-03",
    slug: "royal-oak",
    description: "A richer taupe-brown oak option for projects that need deeper architectural contrast.",
  },
  {
    name: "Sutton",
    code: "VL-04",
    slug: "sutton-oak",
    description: "Soft taupe oak with a quiet, neutral character for refined modern interiors.",
  },
];

function imagePath(slug: string) {
  return `/generated-flooring/${slug}-hero.jpg`;
}

export function FeaturedFinishCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFinish = finishes[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? finishes.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === finishes.length - 1 ? 0 : current + 1));
  };

  return (
    <aside className="fw-hover-lift overflow-hidden rounded-[1.75rem] border border-[#20201D]/12 bg-white shadow-[0_22px_60px_rgba(32,32,29,0.07)]">
      <div className="relative overflow-hidden">
        <img
          src={imagePath(activeFinish.slug)}
          alt={`${activeFinish.name} flooring in a bright commercial-ready interior`}
          className="h-[360px] w-full object-cover transition duration-700 hover:scale-[1.025] sm:h-[520px]"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/55 bg-white/90 px-3 py-2 text-[#20201D] shadow-[0_12px_30px_rgba(32,32,29,0.12)] backdrop-blur">
          <FoundWellIcon name="finish" className="h-8 w-8 rounded-xl" />
          <span className="fw-mono text-[10px] font-bold uppercase tracking-[0.14em]">Featured finish</span>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Show previous featured finish"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/92 text-lg leading-none text-[#20201D] shadow-[0_12px_30px_rgba(32,32,29,0.14)] transition hover:bg-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Show next featured finish"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/92 text-lg leading-none text-[#20201D] shadow-[0_12px_30px_rgba(32,32,29,0.14)] transition hover:bg-white"
          >
            →
          </button>
        </div>
      </div>

      <div className="border-t border-[#20201D]/12 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="fw-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#A68F6B]">Featured finish</p>
          <span className="fw-mono rounded-full border border-[#20201D]/14 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#716C61]">
            {activeFinish.code}
          </span>
          <span className="fw-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#716C61]">
            {activeIndex + 1} / {finishes.length}
          </span>
        </div>
        <h2 className="fw-condensed mt-2 text-[2.1rem] font-semibold uppercase leading-tight tracking-[0.005em]">
          {activeFinish.name}
        </h2>
        <p className="mt-2 leading-[1.62] text-[#716C61]">{activeFinish.description}</p>

        <div className="mt-5 grid grid-cols-4 gap-2" aria-label="Choose a featured finish">
          {finishes.map((finish, index) => (
            <button
              key={finish.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${finish.name}`}
              aria-pressed={index === activeIndex}
              className={`overflow-hidden rounded-xl border bg-white transition ${
                index === activeIndex ? "border-[#20201D] shadow-[0_10px_24px_rgba(32,32,29,0.12)]" : "border-[#20201D]/10 hover:border-[#20201D]/35"
              }`}
            >
              <img src={imagePath(finish.slug)} alt="" className="h-14 w-full object-cover sm:h-16" />
              <span className="fw-mono block px-1.5 py-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#716C61]">
                {finish.code}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
