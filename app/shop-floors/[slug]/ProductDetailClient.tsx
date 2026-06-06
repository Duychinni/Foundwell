"use client";

import { useMemo, useState } from "react";
import { Eyebrow } from "../../components/FoundWellBrand";

type Product = {
  name: string;
  slug: string;
  code: string;
  referenceSlug: string;
  description: string;
  tone: string;
};

const imageTypes = ["hero", "kitchen", "living-room-alt", "closeup-1", "closeup-2"] as const;
type ImageType = (typeof imageTypes)[number];

const featureCards = [
  {
    title: "20 mil wear layer",
    copy: "Commercial-grade surface protection for daily movement, furniture, and project use.",
  },
  {
    title: "5.0mm SPC core",
    copy: "Rigid waterproof core for dimensional stability and cleaner installation confidence.",
  },
  {
    title: "1.5mm IXPE pad",
    copy: "Attached underlayment for comfort and sound absorption through everyday use.",
  },
];

const specificationItems = [
  ["Total Thickness", "6.5mm"],
  ["SPC Core", "5.0mm"],
  ["Underlayment", "1.5mm IXPE"],
  ["Wear Layer", "20 mil"],
  ["Installation", "Click-lock floating floor"],
  ["Waterproof", "100% waterproof"],
  ["Edge Profile", "Micro bevel"],
  ["Application", "Residential & commercial"],
] as const;

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
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[1.65rem] border border-[#20201D]/10 bg-white">
              <img
                src={mainImage}
                alt={product.name}
                className="h-[340px] w-full object-cover sm:h-[520px]"
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
                  className={`overflow-hidden rounded-[0.9rem] border bg-white ${index === activeImage ? "border-[#20201D]" : "border-[#20201D]/10"}`}
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

          <div className="rounded-[1.65rem] border border-[#20201D]/10 bg-white p-6 shadow-[0_22px_60px_rgba(32,32,29,0.07)] sm:p-7 lg:p-8">
            <Eyebrow>V-Line / SPC Collection</Eyebrow>
            <h1 className="fw-condensed mt-4 text-[3rem] font-semibold uppercase leading-none tracking-[0.01em] text-[#20201D] sm:text-[3.6rem]">
              {product.name}
            </h1>
            <p className="mt-5 text-[17px] leading-[1.72] text-[#716C61]">
              {product.description}
            </p>

            <div className="mt-7 space-y-4 border-t border-[#20201D]/10 pt-6 text-sm">
              <div className="flex items-center justify-between gap-4 text-[#716C61]">
                <span>Starting price</span>
                <span className="font-semibold text-[#20201D]">$3.49 / sq. ft.</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-[#716C61]">
                <span>Estimated delivery</span>
                <span className="font-semibold text-[#20201D]">30–35 days</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-[#716C61]">
                <span>Samples</span>
                <span className="font-semibold text-[#20201D]">Available on request</span>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              <a href="/request-quote" className="fw-mono inline-flex items-center justify-center rounded-full bg-[#20201D] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-black">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="fw-hover-lift rounded-[1.35rem] border border-[#20201D]/10 bg-white p-6">
              <p className="fw-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#A68F6B]">{card.title}</p>
              <p className="mt-4 text-[15.5px] leading-[1.72] text-[#716C61]">{card.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-12">
        <div className="overflow-hidden rounded-[1.5rem] border border-[#20201D]/10 bg-white">
          <div className="border-b border-[#20201D]/8 px-5 py-4">
            <p className="text-base font-semibold text-[#20201D]">Specifications</p>
          </div>
          <div className="grid gap-6 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {specificationItems.map(([label, value]) => (
              <div key={label}>
                <p className="fw-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#A68F6B]">{label}</p>
                <p className="mt-2 text-sm leading-7 text-[#716C61]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
