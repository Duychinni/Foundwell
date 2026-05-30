const filters = [
  "Color",
  "Use Case",
  "Material",
  "Collection",
  "Length",
  "Width",
  "Thickness",
  "All filters",
];

const products = [
  {
    name: "Serra XL",
    price: "$4.99 per Sq Ft",
    tag: "SPC Vinyl",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Burnaby XL",
    price: "$4.99 per Sq Ft",
    tag: "SPC Vinyl",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pendle Oak XL",
    price: "$4.99 per Sq Ft",
    tag: "SPC Vinyl",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Austen Oak XL",
    price: "$4.99 per Sq Ft",
    tag: "SPC Vinyl",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Markham XL",
    price: "$4.99 per Sq Ft",
    tag: "SPC Vinyl",
    image:
      "https://images.unsplash.com/photo-1616594039964-3f1cb0e8d4d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Denton XL",
    price: "$4.99 per Sq Ft",
    tag: "SPC Vinyl",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
];

function BrandMark() {
  return (
    <a href="/" className="flex items-center gap-2.5 text-[#51392F] sm:gap-3" aria-label="Go to FoundWell home">
      <span className="text-base font-semibold tracking-[0.18em] sm:text-lg md:tracking-[0.22em] lg:text-xl">
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

            <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-[0.04em] text-[#51392F]/75 lg:flex xl:gap-9">
              <a href="/shop-floors" className="text-[#51392F]">Browse Floors</a>
              <a href="/#learn" className="transition hover:text-[#51392F]">Learn Resources</a>
              <a href="/#about" className="transition hover:text-[#51392F]">About Us</a>
            </nav>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-4 pb-4 sm:px-6 lg:hidden">
          <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#51392F]">
            <a href="/shop-floors" className="rounded-full border border-[#51392F]/10 bg-[#F4EFE6] px-3 py-2">Browse Floors</a>
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
            Material-led flooring selections for commercial buyers, designers, and project teams.
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-sm text-[#51392F]/80 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-[#51392F]/10 bg-[#F4EFE6] px-3.5 py-2 text-sm transition hover:border-[#51392F]/20 hover:bg-[#efe7db] sm:px-4"
            >
              {filter}
            </button>
          ))}

          <div className="flex w-full flex-wrap items-center gap-3 pt-2 text-xs sm:ml-auto sm:w-auto sm:gap-4 sm:pt-0 sm:text-sm">
            <span>56 of 56 items shown</span>
            <button className="rounded-full border border-[#51392F]/10 bg-white px-4 py-2 transition hover:border-[#51392F]/20 hover:bg-[#faf7f2]">
              Sort by
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="rounded-[1.35rem] border border-[#51392F]/8 bg-white p-3 shadow-[0_10px_30px_rgba(81,57,47,0.06)] sm:rounded-[1.5rem]">
              <div
                className="relative h-[220px] overflow-hidden rounded-[1.1rem] bg-cover bg-center sm:h-[260px] sm:rounded-[1.2rem]"
                style={{ backgroundImage: `url('${product.image}')` }}
              >
                <span className="absolute bottom-3 right-3 rounded-full bg-white/92 px-3 py-1 text-[11px] font-medium text-[#51392F]">
                  {product.tag}
                </span>
              </div>

              <div className="flex flex-col gap-3 px-2 pb-2 pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h2 className="text-base font-semibold">{product.name}</h2>
                  <p className="mt-1 text-sm text-[#51392F]/75">{product.price}</p>
                </div>

                <button className="inline-flex w-full items-center justify-center rounded-full bg-[#8A2F24] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#76261d] sm:w-auto">
                  Add sample
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
