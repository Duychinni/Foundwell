"use client";

import { useMemo, useState } from "react";

type Product = {
  name: string;
  slug: string;
  referenceSlug: string;
  description: string;
};

const products: Product[] = [
  {
    name: "Toasted Oak",
    slug: "toasted-oak",
    referenceSlug: "natural-beige-oak",
    description: "Warm natural oak tones with authentic wood grain.",
  },
  {
    name: "Washed Oak",
    slug: "washed-oak",
    referenceSlug: "warm-sand-oak",
    description: "Soft greige oak with contemporary character.",
  },
  {
    name: "Sherwood Oak",
    slug: "sherwood-oak",
    referenceSlug: "light-ash-oak",
    description: "Classic oak character with balanced warmth and depth.",
  },
  {
    name: "Modena Oak",
    slug: "modena-oak",
    referenceSlug: "smoked-taupe-oak",
    description: "Light taupe oak designed for calm, elevated interiors.",
  },
  {
    name: "Grey Beach",
    slug: "grey-beach",
    referenceSlug: "soft-honey-oak",
    description: "Cool coastal oak with a soft weathered finish.",
  },
  {
    name: "Cairo Oak",
    slug: "cairo-oak",
    referenceSlug: "cairo-oak",
    description: "Golden midtone oak with grounded, premium texture.",
  },
  {
    name: "Oxford Oak",
    slug: "oxford-oak",
    referenceSlug: "raw-linen-oak",
    description: "Light neutral oak tailored for modern interior palettes.",
  },
  {
    name: "Nevada Oak",
    slug: "nevada-oak",
    referenceSlug: "castle-oak",
    description: "Cool contemporary oak with understated natural variation.",
  },
  {
    name: "Sutton Oak",
    slug: "sutton-oak",
    referenceSlug: "coastal-greige-oak",
    description: "Soft taupe oak with quiet sophistication and warmth.",
  },
  {
    name: "Castle Oak",
    slug: "castle-oak",
    referenceSlug: "nordic-blonde-oak",
    description: "Bright blonde oak for airy, refined, premium spaces.",
  },
];

const imageTypes = ["hero", "kitchen", "living-room-alt", "closeup-1", "closeup-2"] as const;

type ImageType = (typeof imageTypes)[number];

type GalleryImage = {
  key: string;
  type: ImageType;
  generatedPath: string;
  fallbackPath: string;
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

function generatedPath(slug: string, type: ImageType) {
  return `/generated-flooring/${slug}-${type}.jpg`;
}

function fallbackReferencePath(referenceSlug: string) {
  return `/floor-references/${referenceSlug}-reference.jpg`;
}

function ProductCard({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const [brokenGenerated, setBrokenGenerated] = useState<Record<string, boolean>>({});

  const gallery = useMemo<GalleryImage[]>(() => {
    const fallback = fallbackReferencePath(product.referenceSlug);
    return imageTypes.map((type) => ({
      key: `${product.slug}-${type}`,
      type,
      generatedPath: generatedPath(product.slug, type),
      fallbackPath: fallback,
    }));
  }, [product.referenceSlug, product.slug]);

  const active = gallery[index];
  const activeSrc = brokenGenerated[active.generatedPath] ? active.fallbackPath : active.generatedPath;

  const prev = () => setIndex((current) => (current - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((current) => (current + 1) % gallery.length);

  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-[12px] bg-[#F4F0EA] transition duration-300 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]">
        <img
          key={active.key}
          src={activeSrc}
          alt={`${product.name} ${active.type}`}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          onError={() => {
            setBrokenGenerated((current) => ({ ...current, [active.generatedPath]: true }));
          }}
        />

        <button
          type="button"
          onClick={prev}
          aria-label={`Previous image for ${product.name}`}
          className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[#2B2B2B] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
          <Arrow direction="left" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label={`Next image for ${product.name}`}
          className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[#2B2B2B] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
          <Arrow direction="right" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/82 px-2 py-1 backdrop-blur-sm">
          {gallery.map((item, dotIndex) => (
            <span
              key={item.key}
              className={`h-1.5 w-1.5 rounded-full ${dotIndex === index ? "bg-[#51392F]" : "bg-[#51392F]/25"}`}
            />
          ))}
        </div>
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
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
