const products = [
  {
    code: "B183",
    name: "Natural Beige Oak",
    description: "Rich amber oak tones with warm, natural character.",
    tag: "SPC Vinyl",
    image: "/floors/b183.png",
  },
  {
    code: "B184",
    name: "Warm Sand Oak",
    description: "Soft gray oak with warm sandy undertones.",
    tag: "SPC Vinyl",
    image: "/floors/b184.png",
  },
  {
    code: "B186",
    name: "Light Ash Oak",
    description: "Natural brown oak with authentic rustic grain.",
    tag: "SPC Vinyl",
    image: "/floors/b186.png",
  },
  {
    code: "B189",
    name: "Smoked Taupe Oak",
    description: "Light taupe oak with subtle beige undertones.",
    tag: "SPC Vinyl",
    image: "/floors/b189.png",
  },
  {
    code: "B190",
    name: "Soft Honey Oak",
    description: "Soft golden hues that bring warmth and brightness.",
    tag: "SPC Vinyl",
    image: "/floors/b190.png",
  },
  {
    code: "B191",
    name: "Midtone Wheat Oak",
    description: "Balanced midtone oak with cozy, natural depth.",
    tag: "SPC Vinyl",
    image: "/floors/b191.png",
  },
  {
    code: "B193",
    name: "Raw Linen Oak",
    description: "Light neutral oak with subtle linen undertones.",
    tag: "SPC Vinyl",
    image: "/floors/b193.png",
  },
  {
    code: "B194",
    name: "Drifted Stone Oak",
    description: "Cool gray oak with a soft, weathered look.",
    tag: "SPC Vinyl",
    image: "/floors/b194.png",
  },
  {
    code: "B195",
    name: "Coastal Taupe Oak",
    description: "Soft taupe oak with a relaxed, coastal feel.",
    tag: "SPC Vinyl",
    image: "/floors/b195.png",
  },
  {
    code: "B197",
    name: "Scandinavian Blonde Oak",
    description: "Light blonde oak for a clean, airy, modern look.",
    tag: "SPC Vinyl",
    image: "/floors/b197.png",
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

export default function ShopFloorsPage() {
  return (
    <main className="min-h-screen bg-white text-[#51392F]">
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

      <section className="h-20 w-full bg-[linear-gradient(90deg,#F4EFE6_0%,#d9c2aa_55%,#AD7042_100%)] sm:h-24" />

      <section className="mx-auto max-w-[1120px] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A2F24] sm:text-sm">Browse Floors</p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
            One SPC construction, available across multiple finishes.
          </h1>
          <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base">
            Every option shown below uses the same core specification. The finish changes, but the build quality stays consistent.
          </p>
        </div>

        <div className="mb-8 rounded-[1.25rem] border border-[#51392F]/10 bg-[#F4EFE6] px-5 py-5 text-black sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A2F24] sm:text-sm">Standard Construction</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-black/50">Material</p>
              <p className="mt-1 text-sm font-semibold">SPC Core</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-black/50">Size</p>
              <p className="mt-1 text-sm font-semibold">1220 × 183 mm</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-black/50">Build</p>
              <p className="mt-1 text-sm font-semibold">5 mm + 1.5 mm IXPE</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-black/50">Wear Layer</p>
              <p className="mt-1 text-sm font-semibold">0.3 mm</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-3 text-sm text-black sm:pr-4">
          <p>Showing 10 of 10</p>
        </div>

        <div className="mt-8 grid gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-9 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.code}>
              <div
                className="relative aspect-square max-w-[300px] overflow-hidden rounded-[1rem] bg-cover bg-center sm:max-w-[320px] sm:rounded-[1.1rem]"
                style={{ backgroundImage: `url('${product.image}')` }}
              />

              <div className="px-0 pb-0 pt-3 text-black">
                <h2 className="text-base font-semibold">{product.name}</h2>
                <p className="mt-1 text-sm leading-6 text-black/75">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
