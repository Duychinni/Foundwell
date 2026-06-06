export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="/"
      className={`flex items-center gap-3 ${inverse ? "text-white" : "text-[#20201D]"}`}
      aria-label="Go to FoundWell home"
    >
      <span className="fw-condensed text-[1.35rem] font-medium uppercase leading-none tracking-[0.18em] sm:text-[1.55rem]">
        FOUNDWELL
      </span>
      <span className="relative block h-[42px] w-16 shrink-0" aria-hidden="true">
        <span className={`absolute left-0 top-[5px] h-[7px] w-[39px] rounded-[2px] ${inverse ? "bg-white" : "bg-[#20201D]"}`} />
        <span className="absolute right-0 top-[18px] h-[7px] w-[50px] rounded-[2px] bg-[#A68F6B]" />
        <span className="absolute left-1 top-[31px] h-[7px] w-[59px] rounded-[2px] bg-[#D2C1A6]" />
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#20201D]/10 bg-white/94 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-7 px-4 py-4 sm:px-6 lg:px-12">
        <BrandMark />
        <nav className="hidden items-center gap-7 text-[13px] text-[#716C61] lg:flex xl:gap-9">
          <a href="/" className="transition hover:text-[#20201D]">Home</a>
          <a href="/shop-floors" className="transition hover:text-[#20201D]">Collection</a>
          <a href="/#direct-supply" className="transition hover:text-[#20201D]">Direct Supply</a>
          <a href="/request-quote" className="transition hover:text-[#20201D]">Request Quote</a>
          <a
            href="/request-quote"
            className="rounded-full border border-[#20201D] px-5 py-2.5 text-[#20201D] transition hover:bg-[#20201D] hover:text-white"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="fw-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#A68F6B]">
      {children}
    </p>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="fw-mono rounded-full border border-[#20201D]/12 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#20201D]">
      {children}
    </span>
  );
}
