type Product = {
  code: string;
  name: string;
  price: string;
  tag: string;
  primaryImage: string;
  hoverImage: string;
};

const products: Product[] = [
  {
    code: "B183",
    name: "Natural Beige Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b183.png",
    hoverImage: "/floors/rooms/b183-room.png",
  },
  {
    code: "B184",
    name: "Warm Sand Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b184.png",
    hoverImage: "/floors/rooms/b184-room.png",
  },
  {
    code: "B186",
    name: "Light Ash Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b186.png",
    hoverImage: "/floors/rooms/b186-room.png",
  },
  {
    code: "B189",
    name: "Smoked Taupe Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b189.png",
    hoverImage: "/floors/rooms/b189-room.png",
  },
  {
    code: "B190",
    name: "Soft Honey Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b190.png",
    hoverImage: "/floors/rooms/b190-room.png",
  },
  {
    code: "B191",
    name: "Midtone Wheat Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b191.png",
    hoverImage: "/floors/rooms/b191-room.png",
  },
  {
    code: "B193",
    name: "Raw Linen Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b193.png",
    hoverImage: "/floors/rooms/b193-room.png",
  },
  {
    code: "B194",
    name: "Drifted Stone Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b194.png",
    hoverImage: "/floors/rooms/b194-room.png",
  },
  {
    code: "B195",
    name: "Coastal Taupe Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b195.png",
    hoverImage: "/floors/rooms/b195-room.png",
  },
  {
    code: "B197",
    name: "Scandinavian Blonde Oak",
    price: "$4.99 per Sq.Ft",
    tag: "SPC Vinyl",
    primaryImage: "/floors/b197.png",
    hoverImage: "/floors/rooms/b197-room.png",
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

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-[#ebe4d8] sm:rounded-[1.15rem]">
        <img
          src={product.primaryImage}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} room view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#51392F] shadow-sm">
          {product.tag}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <h2 className="text-[28px] font-medium leading-[1.05] tracking-[-0.02em] text-black sm:text-[30px] lg:text-[32px]">
            {product.name}
          </h2>
          <p className="mt-1 text-sm text-black/65">{product.price}</p>
        </div>

        <button className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-[#EFE8DC] px-5 text-sm font-medium text-[#51392F] transition hover:bg-[#e6ddd0]">
          Add Sample
        </button>
      </div>
    </article>
  );
}

export default function ShopFloorsPage() {
  return (
    <main className="min-h-screen bg-[#F6F3EE] text-[#51392F]">
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

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A2F24] sm:text-sm">Shop Floors</p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-black sm:text-3xl lg:text-4xl">
            Browse 10 Natural Oak Flooring Options
          </h1>
        </div>

        <div className="flex justify-end pb-6 text-sm text-black">
          <p>Showing 10 of 10</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.code} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
