"use client";

import { useState } from "react";

type Product = {
  name: string;
  description: string;
  images: [string, string, string];
};

const products: Product[] = [
  {
    name: "Toasted Oak",
    description: "Warm natural oak tones with authentic wood grain.",
    images: ["/landing-slide-one-clean.png", "/engineered-hardwood-slide2.png", "/landing-slide-three.png"],
  },
  {
    name: "Washed Oak",
    description: "Soft greige oak with contemporary character.",
    images: ["/engineered-hardwood-slide2.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    name: "Sherwood Oak",
    description: "Classic oak character with balanced warmth and depth.",
    images: ["/landing-slide-three.png", "/landing-slide-one-clean.png", "/engineered-hardwood-slide2.png"],
  },
  {
    name: "Modena Oak",
    description: "Light taupe oak designed for calm, elevated interiors.",
    images: ["/landing-slide-one-clean.png", "/landing-slide-three.png", "/engineered-hardwood-slide2.png"],
  },
  {
    name: "Grey Beach",
    description: "Cool coastal oak with a soft weathered finish.",
    images: ["/engineered-hardwood-slide2.png", "/landing-slide-one-clean.png", "/landing-slide-three.png"],
  },
  {
    name: "Cairo Oak",
    description: "Golden midtone oak with grounded, premium texture.",
    images: ["/landing-slide-three.png", "/engineered-hardwood-slide2.png", "/landing-slide-one-clean.png"],
  },
  {
    name: "Oxford Oak",
    description: "Light neutral oak tailored for modern interior palettes.",
    images: ["/landing-slide-one-clean.png", "/engineered-hardwood-slide2.png", "/landing-slide-three.png"],
  },
  {
    name: "Nevada Oak",
    description: "Cool contemporary oak with understated natural variation.",
    images: ["/landing-slide-three.png", "/landing-slide-one-clean.png", "/engineered-hardwood-slide2.png"],
  },
  {
    name: "Sutton Oak",
    description: "Soft taupe oak with quiet sophistication and warmth.",
    images: ["/engineered-hardwood-slide2.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    name: "Castle Oak",
    description: "Bright blonde oak for airy, refined, premium spaces.",
    images: ["/landing-slide-one-clean.png", "/landing-slide-three.png", "/engineered-hardwood-slide2.png"],
  },
];

function BrandMark() {
  return (
    <a href="/" className="flex items-center gap-2.5 text-[#51392F] sm:gap-3" aria-label="Go to FoundWell home">
      <span className="text-base font-medium tracking-[0.12em] sm:text-lg md:tracking-[0.16em] lg:text-xl">
        FOUNDWELL
      </span>
      <span className="relative block h-7 w-14 sm:h-8 sm:w-16 md:h-9 md:w-18" aria-hidden="true">
        <span className="absolute left-0 top-0 h-2 w-7 rounded-sm bg-[#51392F] sm:h-2.5 sm:w-8" />
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
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current - 1 + product.images.length) % product.images.length);
  const next = () => setIndex((current) => (current + 1) % product.images.length);

  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-[12px] bg-[#F4F0EA] transition duration-300 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]">
        <img
          src={product.images[index]}
          alt={product.name}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
        />

        <button
          type="button"
          onClick={prev}
          aria-label={`Previous image for ${product.name}`}
          className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[#2B2B2B] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
          <Arrow direction="left" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label={`Next image for ${product.name}`}
          className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[#2B2B2B] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
          <Arrow direction="right" />
        </button>
      </div>

      <div className="pt-5">
        <h2 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-[#2B2B2B] sm:text-[1.85rem]">
          {product.name}
        </h2>
        <p className="mt-2 max-w-[34ch] text-[15px] leading-7 text-[#2B2B2B]/72">
          {product.description}
        </p>
        <button className="mt-5 inline-flex items-center justify-center rounded-full bg-[#EDE7DF] px-5 py-3 text-sm font-medium text-[#2B2B2B] transition duration-300 hover:bg-[#e4dbcf]">
          Request Sample
        </button>
      </div>
    </article>
  );
}

export default function ShopFloorsPage() {
  return (
    <main className="min-h-screen bg-white text-[#2B2B2B]">
      <header className="border-b border-[#51392F]/8 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
          <div className="flex w-full items-start justify-between gap-4 lg:items-center">
            <BrandMark />

            <nav className="hidden items-center gap-7 text-[13px] font-normal tracking-[0.04em] text-[#51392F]/75 lg:flex xl:gap-9">
              <a href="/shop-floors" className="text-[#51392F]">Shop Floors</a>
              <a href="/#learn" className="transition hover:text-[#51392F]">Learn Resources</a>
              <a href="/#about" className="transition hover:text-[#51392F]">About Us</a>
            </nav>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-4 pb-4 sm:px-6 lg:hidden">
          <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#51392F]">
            <a href="/shop-floors" className="rounded-full border border-[#51392F]/10 bg-[#F4EFE6] px-3 py-2">Shop Floors</a>
            <a href="/#learn" className="rounded-full border border-[#51392F]/10 bg-white px-3 py-2">Resources</a>
            <a href="/#about" className="rounded-full border border-[#51392F]/10 bg-white px-3 py-2">About</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-16">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B58A63] sm:text-sm">
            Browse Floors
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2B2B2B] sm:text-4xl lg:text-[3rem]">
            One SPC construction, available across multiple finishes.
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#2B2B2B]/72 sm:text-[17px]">
            Every option shown below uses the same premium SPC construction. The finish changes, but the build quality remains consistent.
          </p>
        </div>

        <div className="flex justify-end pb-8 pt-10 text-sm text-[#2B2B2B]">
          <p>Showing 10 of 10</p>
        </div>

        <div className="grid grid-cols-1 gap-x-[32px] gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-[40px]">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
