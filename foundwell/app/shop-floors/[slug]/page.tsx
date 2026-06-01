"use client";

import { useMemo, useState } from "react";

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
    name: "Cairo Oak",
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
    name: "Sutton Oak",
    slug: "sutton-oak",
    referenceSlug: "coastal-greige-oak",
    description: "Soft taupe oak with quiet sophistication and warmth.",
    generatedFilterClass: "brightness-[1.08]",
  },
  {
    name: "Washed Oak",
    slug: "washed-oak",
    referenceSlug: "warm-sand-oak",
    description: "Soft greige oak with contemporary character.",
  },
  {
    name: "Nevada Oak",
    slug: "nevada-oak",
    referenceSlug: "castle-oak",
    description: "Cool contemporary oak with understated natural variation.",
  },
  {
    name: "Suprem Oak",
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
    name: "Stardust Oak",
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

const featureCards = [
  {
    title: "100% Waterproof",
    copy: "Built to resist spills and moisture for kitchens, baths, and everyday project use.",
    image: "/detail-features/waterproof.png",
  },
  {
    title: "Scratch Resistant",
    copy: "A durable wear layer helps protect the floor from daily scuffs, movement, and impact.",
    image: "/detail-features/scratch-resistant.png",
  },
  {
    title: "Realistic Wood Feel",
    copy: "Wood-textured surfaces and beveled detailing create a cleaner, more natural presentation.",
    image: "/detail-features/wood-feel.png",
  },
];

const accordionItems = [
  {
    title: "Product Overview",
    content: [
      "Luxury-grade SPC flooring built for residential and commercial interiors.",
      "Durable multi-layer construction designed for cleaner installation and long-term performance.",
      "Direct-sourced material program with finish-led options across one consistent construction.",
    ],
  },
  {
    title: "Specifications",
    content: [
      "Construction: SPC core flooring",
      "Estimated wear layer: project-grade resilient surface protection",
      "Application: residential and commercial use",
      "Installation: floating click-lock format",
      "Estimated delivery: 45–50 days",
    ],
  },
];

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

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug) ?? products[0];
  const [activeImage, setActiveImage] = useState(0);
  const [brokenSources, setBrokenSources] = useState<Record<string, boolean>>({});
  const [openSection, setOpenSection] = useState<string>(accordionItems[0].title);

  const gallery = useMemo(() => {
    const referenceFallback = fallbackReferencePath(product.referenceSlug);
    return imageTypes.map((type) => {
      const generated = generatedCandidates(product.slug, type);
      const generatedSrc = generated.find((candidate) => !brokenSources[candidate]);
      return {
        type,
        src: generatedSrc ?? referenceFallback,
      };
    });
  }, [brokenSources, product.referenceSlug, product.slug]);

  const mainImage = gallery[activeImage]?.src ?? fallbackReferencePath(product.referenceSlug);

  return (
    <main className="min-h-screen bg-[#F4EFE6] text-[#51392F]">
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
      </header>

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[1.5rem] bg-[#F8F3EA]">
              <img
                src={mainImage}
                alt={product.name}
                className="h-[320px] w-full object-cover sm:h-[480px]"
                onError={(event) => {
                  const currentSrc = new URL(event.currentTarget.currentSrc).pathname;
                  setBrokenSources((current) => ({ ...current, [currentSrc]: true }));
                }}
              />
            </div>

            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2">
              {gallery.map((image, index) => (
                <button
                  key={`${product.slug}-${image.type}`}
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden rounded-[0.9rem] border ${index === activeImage ? "border-[#51392F]" : "border-[#51392F]/10"}`}
                >
                  <img
                    src={image.src}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-20 w-20 object-cover sm:h-24 sm:w-24"
                    onError={(event) => {
                      const currentSrc = new URL(event.currentTarget.currentSrc).pathname;
                      setBrokenSources((current) => ({ ...current, [currentSrc]: true }));
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#51392F]/10 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A2F24]">V-LINE SPC Flooring</p>
            <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#51392F] sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-base font-medium text-[#51392F]">Starting at $4.99 / sq. ft.</p>
            <p className="mt-4 text-sm leading-7 text-[#51392F]/75">
              {product.description}
            </p>

            <div className="mt-6 space-y-4 border-t border-[#51392F]/10 pt-5">
              <div className="flex items-center justify-between text-sm text-[#51392F]">
                <span>Estimated delivery</span>
                <span className="font-medium">45–50 days</span>
              </div>
              <div className="flex items-center justify-between text-sm text-[#51392F]">
                <span>Project pricing</span>
                <span className="font-medium">Available on request</span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="/request-quote"
                className="inline-flex items-center justify-center rounded-full bg-[#51392F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#422f27]"
              >
                Request Quote
              </a>
              <a
                href="/shop-floors"
                className="inline-flex items-center justify-center rounded-full border border-[#51392F]/10 bg-[#EDE3D4] px-5 py-3 text-sm font-medium text-[#51392F] transition hover:bg-[#e3d5c3]"
              >
                Back to Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[1.35rem] border border-[#51392F]/8 bg-white">
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A2F24]">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#51392F]/75">{card.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-12">
        <div className="space-y-3">
          {accordionItems.map((item) => {
            const open = openSection === item.title;
            return (
              <div key={item.title} className="overflow-hidden rounded-[1.25rem] border border-[#51392F]/10 bg-white">
                <button
                  onClick={() => setOpenSection(open ? "" : item.title)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-base font-medium text-[#51392F]">{item.title}</span>
                  <span className="text-xl text-[#51392F]">{open ? "−" : "+"}</span>
                </button>
                {open ? (
                  <div className="grid gap-4 border-t border-[#51392F]/8 px-5 py-5 sm:grid-cols-2 lg:grid-cols-3">
                    {item.content.map((line) => (
                      <p key={line} className="text-sm leading-7 text-[#51392F]/75">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
