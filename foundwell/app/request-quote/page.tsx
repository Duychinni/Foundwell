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

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-white text-[#51392F]">
      <header className="border-b border-[#51392F]/8 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
          <div className="flex w-full items-start justify-between gap-4 lg:items-center">
            <BrandMark />

            <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-[0.04em] text-[#51392F]/75 lg:flex xl:gap-9">
              <a href="/shop-floors" className="transition hover:text-[#51392F]">Browse Floors</a>
              <a href="/#learn" className="transition hover:text-[#51392F]">Learn Resources</a>
              <a href="/#about" className="transition hover:text-[#51392F]">About Us</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="h-20 w-full bg-[linear-gradient(90deg,#F4EFE6_0%,#d9c2aa_55%,#AD7042_100%)] sm:h-24" />

      <section className="mx-auto max-w-[980px] px-4 py-10 sm:px-6 sm:py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A2F24] sm:text-sm">Request a Quote</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Tell us about your flooring project and we’ll follow up with pricing and next steps.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#51392F]/75 sm:text-base">
            FoundWell is built for project teams that need clear pricing, material confidence, and dependable supply communication.
          </p>
        </div>

        <form className="mt-10 grid gap-4 rounded-[1.75rem] border border-[#51392F]/10 bg-[#F4EFE6] p-6 shadow-sm sm:grid-cols-2 sm:p-8 lg:p-10">
          <input
            type="text"
            placeholder="Full name"
            className="h-12 rounded-2xl border border-[#51392F]/10 bg-white px-4 text-sm text-[#51392F] outline-none"
          />
          <input
            type="text"
            placeholder="Company"
            className="h-12 rounded-2xl border border-[#51392F]/10 bg-white px-4 text-sm text-[#51392F] outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-12 rounded-2xl border border-[#51392F]/10 bg-white px-4 text-sm text-[#51392F] outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="h-12 rounded-2xl border border-[#51392F]/10 bg-white px-4 text-sm text-[#51392F] outline-none"
          />
          <input
            type="text"
            placeholder="Project type"
            className="h-12 rounded-2xl border border-[#51392F]/10 bg-white px-4 text-sm text-[#51392F] outline-none"
          />
          <input
            type="text"
            placeholder="Estimated square footage"
            className="h-12 rounded-2xl border border-[#51392F]/10 bg-white px-4 text-sm text-[#51392F] outline-none"
          />
          <input
            type="text"
            placeholder="Product interest"
            className="h-12 rounded-2xl border border-[#51392F]/10 bg-white px-4 text-sm text-[#51392F] outline-none sm:col-span-2"
          />
          <textarea
            placeholder="Timeline / notes"
            className="min-h-[140px] rounded-2xl border border-[#51392F]/10 bg-white px-4 py-3 text-sm text-[#51392F] outline-none sm:col-span-2"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#8A2F24] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#76261d] sm:col-span-2 sm:w-[240px]"
          >
            Submit Quote Request
          </button>
        </form>
      </section>
    </main>
  );
}
