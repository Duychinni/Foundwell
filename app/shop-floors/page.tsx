"use client";

import { useMemo, useRef, useState } from "react";

type Product = {
  name: string;
  slug: string;
  referenceSlug: string;
  description: string;
  generatedFit?: "cover" | "contain";
  generatedFilterClass?: string;
};

const products: Product[] = [
  {
    name: "Castle Oak",
    slug: "castle-oak",
    referenceSlug: "nordic-blonde-oak",
    description: "Bright blonde oak for airy, refined, premium spaces.",
  },
  {
    name: "Cairo",
    slug: "cairo-oak",
    referenceSlug: "cairo-oak",
    description: "Golden midtone oak with grounded, premium texture.",
  },
  {
    name: "Royal Oak",
    slug: "royal-oak",
    referenceSlug: "smoked-taupe-oak",
    description: "Rich taupe-brown oak with a classic, elevated character.",
  },
  {
    name: "Sutton",
    slug: "sutton-oak",
    referenceSlug: "coastal-greige-oak",
    description: "Soft taupe oak with quiet sophistication and warmth.",
    generatedFilterClass: "brightness-[1.08]",
  },
  {
    name: "Washed Grey",
    slug: "washed-oak",
    referenceSlug: "warm-sand-oak",
    description: "Soft greige oak with contemporary character.",
  },
  {
    name: "Nevada",
    slug: "nevada-oak",
    referenceSlug: "castle-oak",
    description: "Cool contemporary oak with understated natural variation.",
  },
  {
    name: "Suprem",
    slug: "suprem-oak",
    referenceSlug: "soft-honey-oak",
    description: "Warm honeyed oak with a smooth premium showroom feel.",
  },
  {
    name: "Oxford Oak",
    slug: "oxford-oak",
    referenceSlug: "raw-linen-oak",
    description: "Light neutral oak tailored for modern interior palettes.",
  },
  {
    name: "Stardust",
    slug: "stardust-oak",
    referenceSlug: "natural-beige-oak",
    description: "Balanced beige oak with subtle grain and luminous warmth.",
  },
  {
    name: "Sherwood Oak",
    slug: "sherwood-oak",
    referenceSlug: "light-ash-oak",
    description: "Classic oak character with balanced warmth and depth.",
  },
];

const imageTypes = ["hero", "kitchen", "living-room-alt", "closeup-1", "closeup-2"] as const;

type ImageType = (typeof imageTypes)[number];

type GalleryImage = {
  key: string;
  type: ImageType;
  sources: string[];
};

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
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function generatedCandidates(slug: string, type: ImageType) {
  return [
    `/generated-flooring/${slug}-${type}.jpg`,
    `/generated-flooring/${slug}-${type}.jpeg`,
    `/generated-flooring/${slug}-${type}.png`,
    `/generated-flooring/${slug}-${type}.webp`,
  ];
}

function fallbackReferencePath(referenceSlug: string) {
  return `/floor-references/${referenceSlug}-reference.jpg`;
}

function ProductCard({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const [brokenSources, setBrokenSources] = useState<Record<string, boolean>>({});
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);

  const gallery = useMemo<GalleryImage[]>(() => {
    return imageTypes.map((type) => ({
      key: `${product.slug}-${type}`,
      type,
      sources: generatedCandidates(product.slug, type),
    }));
  }, [product.slug]);

  const referenceFallbackSrc = fallbackReferencePath(product.referenceSlug);

  const slides = gallery.map((item) => {
    const generatedSrc = item.sources.find((candidate) => !brokenSources[candidate]);
    return {
      ...item,
      src: generatedSrc ?? referenceFallbackSrc,
      isFallback: !generatedSrc,
    };
  });

  const safeIndex = index % slides.length;

  const prev = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % slides.length);
  };

  const handlePointerDown = (clientX: number) => {
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
  };

  const handlePointerMove = (clientX: number) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (dragStartX.current === null) return;
    const threshold = 40;
    if (dragDeltaX.current <= -threshold) {
      next();
    } else if (dragDeltaX.current >= threshold) {
      prev();
    }
    dragStartX.current = null;
    dragDeltaX.current = 0;
  };

  return (
    <article className="group">
      <a
        href={`/shop-floors/${product.slug}`}
        className="block"
        aria-label={`View ${product.name} details`}
      >
        <div
          className="relative aspect-square overflow-hidden rounded-[14px] border border-[#51392F]/8 bg-[#F8F3EA] transition duration-300 group-hover:shadow-[0_22px_50px_rgba(81,57,47,0.12)] touch-pan-y select-none"
          onMouseDown={(event) => handlePointerDown(event.clientX)}
          onMouseMove={(event) => handlePointerMove(event.clientX)}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={(event) => handlePointerDown(event.touches[0].clientX)}
          onTouchMove={(event) => handlePointerMove(event.touches[0].clientX)}
          onTouchEnd={handlePointerUp}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${safeIndex * 100}%)` }}
          >
            {slides.map((item) => (
              <img
                key={item.key}
                src={item.src}
                alt={`${product.name} ${item.type}`}
                className={`h-full min-w-full object-center transition duration-300 group-hover:scale-[1.02] ${
                  item.isFallback
                    ? "object-contain bg-[#F4F0EA] p-3"
                    : product.generatedFit === "contain"
                      ? `object-contain bg-[#F4F0EA] p-3 ${product.generatedFilterClass ?? ""}`
                      : `object-cover ${product.generatedFilterClass ?? ""}`
                }`}
                onError={(event) => {
                  const currentSrc = new URL(event.currentTarget.currentSrc).pathname;
                  setBrokenSources((current) => ({ ...current, [currentSrc]: true }));
                }}
                draggable={false}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              prev();
            }}
            aria-label={`Previous image for ${product.name}`}
            className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center text-white/90 transition hover:text-white"
          >
            <Arrow direction="left" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              next();
            }}
            aria-label={`Next image for ${product.name}`}
            className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center text-white/90 transition hover:text-white"
          >
            <Arrow direction="right" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/82 px-2 py-1 backdrop-blur-sm">
            {slides.map((item, dotIndex) => (
              <span
                key={item.key}
                className={`h-1.5 w-1.5 rounded-full ${dotIndex === safeIndex ? "bg-[#51392F]" : "bg-[#51392F]/25"}`}
              />
            ))}
          </div>
        </div>
      </a>

      <div className="pt-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-serif text-[1.78rem] font-medium leading-[1.08] tracking-[-0.015em] text-[#51392F] sm:text-[2rem]">
            {product.name}
          </h2>
          <p className="pt-1 text-right text-sm font-medium whitespace-nowrap text-[#51392F]/78">
            Starting at $3.49 / sq. ft.
          </p>
        </div>
        <p className="mt-2 max-w-[34ch] text-[15px] leading-7 text-[#51392F]/72">
          {product.description}
        </p>
        <div className="mt-5 flex items-end justify-between gap-4">
          <a
            href="/request-quote"
            className="inline-flex items-center justify-center rounded-full border border-[#8A2F24]/10 bg-[#EDE3D4] px-5 py-3 text-sm font-medium text-[#51392F] transition duration-300 hover:bg-[#e3d5c3]"
          >
            Request Quote
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ShopFloorsPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE6] text-[#51392F]">
      <header className="border-b border-[#51392F]/8 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
          <div className="flex w-full items-start justify-between gap-4 lg:items-center">
            <BrandMark />

            <nav className="hidden items-center gap-7 text-[13px] font-normal tracking-[0.04em] text-[#51392F]/75 lg:flex xl:gap-9">
              <a href="/shop-floors" className="transition hover:text-[#51392F]">Shop Floors</a>
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

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-14">
        <div className="mb-10 h-px w-full bg-[#51392F]/10" />

        <div className="max-w-4xl overflow-hidden rounded-[1.5rem] border border-black/8 bg-white px-6 py-7 sm:px-8 sm:py-8 lg:px-9">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4E6A57] sm:text-xs">
              FoundWell Collection
            </p>
            <div className="mt-4 flex items-center gap-4">
              <p className="text-[2rem] font-semibold leading-none tracking-[0.22em] text-[#111111] sm:text-[2.4rem] lg:text-[2.8rem]">
                V-LINE
              </p>
              <span className="inline-block h-8 w-px bg-[#4E6A57] sm:h-10" />
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-black/58 sm:text-xs">
                SPC Flooring
              </p>
            </div>
            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-black/68 sm:text-[17px]">
              One premium SPC construction across ten curated finishes — built for residential projects, commercial spaces, and design-led installs.
            </p>
          </div>
        </div>

        <div className="mt-8 mb-6 grid items-end gap-3 md:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap gap-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white sm:text-xs">
            <span className="rounded-full border border-[#4E6A57] bg-[#4E6A57] px-3 py-2">Waterproof</span>
            <span className="rounded-full border border-[#4E6A57] bg-[#4E6A57] px-3 py-2">Scratch-resistant</span>
            <span className="rounded-full border border-[#4E6A57] bg-[#4E6A57] px-3 py-2">Easy installation</span>
            <span className="rounded-full border border-[#4E6A57] bg-[#4E6A57] px-3 py-2">Residential & commercial</span>
          </div>
          <div className="text-right text-sm text-[#51392F] md:pb-1">
            <p>Showing 10 of 10</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-[32px] gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-[40px]">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
