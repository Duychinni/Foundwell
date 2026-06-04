"use client";

import { useMemo, useState } from "react";

type Product = {
  name: string;
  slug: string;
  referenceSlug: string;
  description: string;
};

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

const specificationItems = [
  ["Total Thickness", "6.5mm"],
  ["SPC Core Thickness", "5.0mm"],
  ["Attached Underlayment", "1.5mm IXPE"],
  ["Wear Layer", "20 mil (0.5mm)"],
  ["Installation", "Click-Lock Floating Floor"],
  ["Waterproof", "100% Waterproof"],
  ["Edge Profile", "Micro Bevel"],
  ["Surface Finish", "Wood Grain Embossed"],
  ["Application", "Residential & Commercial"],
  ["Lead Time", "30–35 Days"],
  ["Project Pricing", "Available Upon Request"],
] as const;

const accordionItems = [
  {
    title: "Product Overview",
    content: [
      "Luxury-grade SPC flooring built for residential and commercial interiors.",
      "Durable multi-layer construction with a 5.0mm SPC core and 1.5mm attached IXPE pad.",
      "Specified for projects that need waterproof performance, realistic wood texture, and cleaner installation.",
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

export default function ProductDetailClient({ product }: { product: Product }) {
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
    <>
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
            <p className="mt-3 text-base font-medium text-[#51392F]">Starting at $3.49 / sq. ft.</p>
            <p className="mt-4 text-sm leading-7 text-[#51392F]/75">
              {product.description}
            </p>

            <div className="mt-6 space-y-4 border-t border-[#51392F]/10 pt-5">
              <div className="flex items-center justify-between text-sm text-[#51392F]">
                <span>Estimated delivery</span>
                <span className="font-medium">30–35 days</span>
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
        <div className="mb-4 overflow-hidden rounded-[1.25rem] border border-[#51392F]/10 bg-white">
          <div className="border-b border-[#51392F]/8 px-5 py-4">
            <p className="text-base font-medium text-[#51392F]">Specifications</p>
          </div>
          <div className="grid gap-4 px-5 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {specificationItems.map(([label, value]) => (
              <div key={label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A2F24]">{label}</p>
                <p className="mt-2 text-sm leading-7 text-[#51392F]/80">{value}</p>
              </div>
            ))}
          </div>
        </div>

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
    </>
  );
}
