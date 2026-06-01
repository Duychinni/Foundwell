import ProductDetailClient from "./ProductDetailClient";

type Product = {
  name: string;
  slug: string;
  referenceSlug: string;
  description: string;
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

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug) ?? products[0];

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

      <ProductDetailClient product={product} />
    </main>
  );
}
