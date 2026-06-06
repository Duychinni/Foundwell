import { Eyebrow, FoundWellIcon, SiteHeader } from "../components/FoundWellBrand";

type Product = {
  name: string;
  slug: string;
  code: string;
  description: string;
  tags: string[];
};

const products: Product[] = [
  { name: "Castle Oak", slug: "castle-oak", code: "VL-01", description: "Bright blonde oak for airy, refined spaces.", tags: ["Blonde", "20 mil"] },
  { name: "Cairo", slug: "cairo-oak", code: "VL-02", description: "Golden midtone oak with grounded texture.", tags: ["Warm", "IXPE"] },
  { name: "Royal Oak", slug: "royal-oak", code: "VL-03", description: "Rich taupe-brown oak with elevated character.", tags: ["Taupe", "Waterproof"] },
  { name: "Sutton", slug: "sutton-oak", code: "VL-04", description: "Soft taupe oak with quiet sophistication.", tags: ["Neutral", "SPC"] },
  { name: "Washed Grey", slug: "washed-oak", code: "VL-05", description: "Soft greige oak with contemporary character.", tags: ["Greige", "Click-lock"] },
  { name: "Nevada", slug: "nevada-oak", code: "VL-06", description: "Cool contemporary oak with natural variation.", tags: ["Cool", "Project"] },
  { name: "Suprem", slug: "suprem-oak", code: "VL-07", description: "Warm honeyed oak with a smooth showroom feel.", tags: ["Honey", "Commercial"] },
  { name: "Oxford Oak", slug: "oxford-oak", code: "VL-08", description: "Light neutral oak for modern palettes.", tags: ["Neutral", "Modern"] },
  { name: "Stardust", slug: "stardust-oak", code: "VL-09", description: "Balanced beige oak with subtle grain.", tags: ["Balanced", "Luminous"] },
  { name: "Sherwood Oak", slug: "sherwood-oak", code: "VL-10", description: "Classic oak with balanced warmth and depth.", tags: ["Classic", "Oak"] },
];

function imagePath(slug: string) {
  return `/generated-flooring/${slug}-hero.jpg`;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="fw-hover-lift group overflow-hidden rounded-[1.5rem] border border-[#20201D]/10 bg-white shadow-[0_14px_36px_rgba(32,32,29,0.045)] transition hover:shadow-[0_22px_55px_rgba(32,32,29,0.08)]">
      <a href={`/shop-floors/${product.slug}`} aria-label={`View ${product.name} details`}>
        <div className="overflow-hidden border-b border-[#20201D]/10">
          <img src={imagePath(product.slug)} alt={product.name} className="aspect-[1.04/0.82] w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
        </div>
      </a>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="fw-condensed text-[1.85rem] font-semibold uppercase leading-tight tracking-[0.01em] text-[#20201D]">
            {product.name}
          </h2>
          <span className="fw-mono whitespace-nowrap pt-1 text-right text-[10px] font-bold uppercase tracking-[0.12em] text-[#A68F6B]">
            {product.code}
          </span>
        </div>
        <p className="mt-3 min-h-[3.3rem] text-[15px] leading-[1.72] text-[#716C61]">{product.description}</p>
        <div className="mt-4 border-y border-[#20201D]/10 py-3">
          <p className="fw-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#A68F6B]">Starting at</p>
          <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-[#20201D]">$3.49 / sq. ft.</p>
        </div>
        <a href="/request-quote" className="fw-mono mt-5 inline-flex rounded-full border border-[#20201D]/12 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#20201D] transition hover:border-[#20201D]">
          Request Quote
        </a>
      </div>
    </article>
  );
}

export default function ShopFloorsPage() {
  return (
    <main className="fw-grid-bg min-h-screen bg-white text-[#20201D]">
      <SiteHeader />
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 border-b border-[#20201D]/10 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Eyebrow>FoundWell Collection</Eyebrow>
            <h1 className="fw-display mt-4 max-w-3xl text-[3rem] font-[650] leading-[0.94] tracking-[-0.055em] sm:text-[5rem]">
              V-Line / SPC flooring.
            </h1>
          </div>
          <div>
            <p className="max-w-3xl text-[17px] leading-[1.72] text-[#716C61]">
              One premium SPC construction across ten curated finishes — built for residential projects, commercial spaces, and design-led installs.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 text-sm text-[#716C61]">
          <p className="fw-mono flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#A68F6B]">
            <FoundWellIcon name="finish" className="h-9 w-9 rounded-xl" />
            Finish library
          </p>
          <p>Showing 10 of 10</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>
    </main>
  );
}
