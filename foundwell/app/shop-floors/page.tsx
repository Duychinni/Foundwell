"use client";

import { useState } from "react";

type Product = {
  code: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  images: string[];
};

const products: Product[] = [
  {
    code: "B183",
    name: "Natural Beige Oak",
    description: "Rich amber oak tones with warm, natural character.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b183.png", "/landing-slide-one-clean.png", "/landing-slide-three.png"],
  },
  {
    code: "B184",
    name: "Warm Sand Oak",
    description: "Soft gray oak with warm sandy undertones.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b184.png", "/engineered-hardwood-slide2.png", "/landing-slide-one.png"],
  },
  {
    code: "B186",
    name: "Light Ash Oak",
    description: "Natural brown oak with authentic rustic grain.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b186.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    code: "B189",
    name: "Smoked Taupe Oak",
    description: "Light taupe oak with subtle beige undertones.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b189.png", "/landing-slide-one.png", "/engineered-hardwood-slide2.png"],
  },
  {
    code: "B190",
    name: "Soft Honey Oak",
    description: "Soft golden hues that bring warmth and brightness.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b190.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    code: "B191",
    name: "Midtone Wheat Oak",
    description: "Balanced midtone oak with cozy, natural depth.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b191.png", "/engineered-hardwood-slide2.png", "/landing-slide-one.png"],
  },
  {
    code: "B193",
    name: "Raw Linen Oak",
    description: "Light neutral oak with subtle linen undertones.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b193.png", "/landing-slide-one-clean.png", "/landing-slide-three.png"],
  },
  {
    code: "B194",
    name: "Drifted Stone Oak",
    description: "Cool gray oak with a soft, weathered look.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b194.png", "/landing-slide-one.png", "/engineered-hardwood-slide2.png"],
  },
  {
    code: "B195",
    name: "Coastal Taupe Oak",
    description: "Soft taupe oak with a relaxed, coastal feel.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b195.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    code: "B197",
    name: "Scandinavian Blonde Oak",
    description: "Light blonde oak for a clean, airy, modern look.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b197.png", "/engineered-hardwood-slide2.png", "/landing-slide-one.png"],
  },
  {
    code: "B198",
    name: "Quiet Greige Oak",
    description: "Muted greige oak with a smooth contemporary tone.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b184.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    code: "B199",
    name: "Golden Wheat Oak",
    description: "Warm wheat-brown planks with soft golden depth.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b190.png", "/landing-slide-one.png", "/engineered-hardwood-slide2.png"],
  },
  {
    code: "B200",
    name: "Dusty Linen Oak",
    description: "A pale linen oak with understated natural grain.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b193.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    code: "B201",
    name: "Weathered Sand Oak",
    description: "Soft-weathered oak tones with a calm sandy cast.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b184.png", "/engineered-hardwood-slide2.png", "/landing-slide-one.png"],
  },
  {
    code: "B202",
    name: "Natural Stone Beige",
    description: "A balanced beige oak finish with a grounded feel.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b183.png", "/landing-slide-three.png", "/landing-slide-one-clean.png"],
  },
  {
    code: "B203",
    name: "Soft Drift Oak",
    description: "Light driftwood-inspired oak with cool neutral softness.",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    images: ["/floors/b194.png", "/landing-slide-one.png", "/engineered-hardwood-slide2.png"],
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
      <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-[#ebe4d8] sm:rounded-[1.15rem]">
        <img
          src={product.images[index]}
          alt={product.name}
          className="h-full w-full object-cover"
        />

        <button
          onClick={prev}
          aria-label={`Previous image for ${product.name}`}
          className="absolute left-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#51392F] backdrop-blur-sm transition hover:bg-white"
        >
          <Arrow direction="left" />
        </button>

        <button
          onClick={next}
          aria-label={`Next image for ${product.name}`}
          className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#51392F] backdrop-blur-sm transition hover:bg-white"
        >
          <Arrow direction="right" />
        </button>

        <span className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#51392F] shadow-sm">
          {product.tag}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <h2 className="text-[28px] font-medium leading-[1.05] tracking-[-0.02em] text-black sm:text-[30px] lg:text-[32px]">
            {product.name}
          </h2>
          <p className="mt-1 text-sm text-black/65">{product.price}</p>
        </div>

        <button className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-[#EFE8DC] px-5 text-sm font-medium text-[#51392F] transition hover:bg-[#e6ddd0]">
          Add Sample
        </button>
      </div>
    </article>
  );
}

export default function ShopFloorsPage() {
  return (
    <main className="min-h-screen bg-[#F6F3EE] text-[#51392F]">
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

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A2F24] sm:text-sm">Shop Floors</p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-black sm:text-3xl lg:text-4xl">
            Browse 16 Natural Oak Flooring Options
          </h1>
        </div>

        <div className="flex justify-end pb-6 text-sm text-black">
          <p>Showing 16 of 16</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.code} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
