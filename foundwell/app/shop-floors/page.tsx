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
    <div className="flex items-center gap-3 text-slate-950">
      <span className="text-lg font-semibold tracking-[0.22em] sm:text-xl">
        FOUNDWELL
      </span>
      <span className="relative block h-8 w-16 sm:h-9 sm:w-18" aria-hidden="true">
        <span className="absolute left-0 top-0 h-2.5 w-8 rounded-sm bg-slate-950" />
        <span className="absolute left-5 top-3 h-2.5 w-9 rounded-sm bg-[#9a6844]" />
        <span className="absolute left-2 top-6 h-2.5 w-10 rounded-sm bg-[#d4b28d]" />
      </span>
    </div>
  );
}

export default function ShopFloorsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-slate-900">
      <header className="border-b border-slate-900/8 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-8 xl:gap-12">
            <a href="/">
              <BrandMark />
            </a>

            <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-[0.04em] text-slate-700 lg:flex xl:gap-9">
              <a href="/shop-floors" className="text-slate-950">Browse Floors</a>
              <a href="/#learn" className="transition hover:text-slate-950">Learn Resources</a>
              <a href="/#about" className="transition hover:text-slate-950">About Us</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="h-24 w-full bg-[linear-gradient(90deg,#e9dfd0_0%,#d8c1a4_55%,#c3a078_100%)]" />

      <section className="mx-auto max-w-[1040px] px-6 py-10 sm:px-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          {filters.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-slate-900/8 bg-white px-4 py-2 transition hover:border-slate-900/20 hover:bg-slate-50"
            >
              {filter}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-4 text-xs sm:text-sm">
            <span>56 of 56 items shown</span>
            <button className="rounded-full border border-slate-900/8 bg-white px-4 py-2 transition hover:border-slate-900/20 hover:bg-slate-50">
              Sort by
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="rounded-[1.5rem] bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div
                className="relative h-[260px] overflow-hidden rounded-[1.2rem] bg-cover bg-center"
                style={{ backgroundImage: `url('${product.image}')` }}
              >
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700">
                  {product.tag}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-4">
                <div>
                  <h2 className="text-base font-semibold text-slate-950">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{product.price}</p>
                </div>

                <button className="rounded-full bg-[#f4efe7] px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-[#ece4d8]">
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
