import { BrandMark, Eyebrow, Pill, SiteHeader } from "./components/FoundWellBrand";

const services = [
  {
    title: "Flooring Supply",
    description: "SPC flooring in a focused finish range, with clear specs and project-ready construction.",
  },
  {
    title: "Project Quotes",
    description: "Pricing based on finish choice, square footage, delivery location, and project timing.",
  },
  {
    title: "Sample Support",
    description: "Help narrowing colors before ordering, so the floor fits the space and design direction.",
  },
  {
    title: "Delivery Planning",
    description: "Lead time, quantities, and shipping details coordinated before the order is placed.",
  },
];

export default function Home() {
  return (
    <main className="fw-grid-bg min-h-screen bg-white text-[#20201D]">
      <SiteHeader />

      <section className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-12 lg:py-20">
        <div>
          <Eyebrow>Architectural Flooring Supply</Eyebrow>
          <h1 className="fw-display mt-5 max-w-[720px] text-[3rem] font-[610] leading-[0.98] tracking-[-0.052em] sm:text-[4.35rem] lg:text-[5rem]">
            Direct-sourced flooring for serious projects.
          </h1>
          <p className="mt-7 max-w-2xl text-[17px] leading-[1.72] tracking-[-0.004em] text-[#716C61] sm:text-lg">
            FoundWell supplies specification-ready SPC flooring with clear product details, direct-supply pricing, and support for builders, contractors, and commercial buyers.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/shop-floors" className="fw-mono inline-flex h-14 items-center justify-center rounded-full bg-[#20201D] px-7 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-black">
              Explore V-Line
            </a>
            <a href="/request-quote" className="fw-mono inline-flex h-14 items-center justify-center rounded-full border border-[#20201D]/24 bg-white px-7 text-[11px] font-bold uppercase tracking-[0.13em] text-[#20201D] transition hover:border-[#20201D]">
              Request Quote
            </a>
          </div>
          <div className="mt-11 grid grid-cols-2 overflow-hidden border-y border-[#20201D]/12 sm:grid-cols-4">
            {[
              ["10", "Curated finishes"],
              ["6.5mm", "Total thickness"],
              ["20 mil", "Wear layer"],
              ["30–35", "Day lead time"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-[#20201D]/12 px-5 py-5 last:border-r-0 sm:px-6">
                <b className="fw-mono block text-lg tracking-[-0.04em]">{value}</b>
                <span className="fw-mono mt-1 block whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.14em] text-[#716C61] sm:text-[10px]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="fw-hover-lift overflow-hidden rounded-[1.75rem] border border-[#20201D]/12 bg-white shadow-[0_22px_60px_rgba(32,32,29,0.07)]">
          <div className="overflow-hidden">
            <img src="/generated-flooring/castle-oak-hero.jpg" alt="Castle Oak flooring in a bright commercial-ready interior" className="h-[360px] w-full object-cover transition duration-700 hover:scale-[1.025] sm:h-[520px]" />
          </div>
          <div className="border-t border-[#20201D]/12 p-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="fw-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#A68F6B]">Featured finish</p>
                <span className="fw-mono rounded-full border border-[#20201D]/14 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#716C61]">VL-01</span>
              </div>
              <h2 className="fw-condensed mt-2 text-[2.1rem] font-semibold uppercase leading-tight tracking-[0.005em]">Castle Oak</h2>
              <p className="mt-2 leading-[1.62] text-[#716C61]">A bright blonde SPC floor shown as the first finish in the V-Line collection. Use it as a quick preview before browsing all colors.</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="direct-supply" className="border-t border-[#20201D]/10">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Eyebrow>Direct Supply Path</Eyebrow>
              <h2 className="fw-display mt-4 max-w-xl text-[2.35rem] font-[610] leading-[1] tracking-[-0.044em] sm:text-[3.35rem]">
                Fewer handoffs. Clearer pricing.
              </h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-[1.72] text-[#716C61]">
              Most flooring quotes pass through several retail layers before reaching the buyer. FoundWell keeps the path simpler, so product information, pricing, and timing are easier to understand.
            </p>
          </div>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.45rem] border border-[#20201D]/12 bg-white p-6">
              <p className="fw-mono text-[11px] font-bold uppercase tracking-[0.22em]">Traditional retail path</p>
              <div className="mt-6 grid gap-2">
                {["Factory", "Importer", "Distributor", "Retail showroom", "Client"].map((item, index, path) => (
                  <div key={item}>
                    <div className="fw-mono rounded-xl border border-[#20201D]/45 bg-white px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.13em] text-[#20201D]/78 shadow-[0_8px_22px_rgba(32,32,29,0.025)]">
                      {item}
                    </div>
                    {index < path.length - 1 ? (
                      <div className="flex h-6 items-center justify-center text-[#A68F6B]" aria-hidden="true">
                        <span className="h-px w-8 bg-[#A68F6B]/55" />
                        <span className="fw-mono mx-2 text-base leading-none">↓</span>
                        <span className="h-px w-8 bg-[#A68F6B]/55" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-[1.65] text-[#716C61]">More handoffs can add markup, slow communication, and make product details harder to verify.</p>
            </div>

            <div className="self-start overflow-hidden rounded-[1.45rem] border border-[#20201D] bg-[#20201D] text-white shadow-[0_26px_70px_rgba(32,32,29,0.18)]">
              <div className="h-2 fw-accent-sheen bg-gradient-to-r from-[#A68F6B] via-[#D2C1A6] to-[#A68F6B]" />
              <div className="p-6 text-center sm:p-7">
                <p className="fw-mono text-center text-[11px] font-bold uppercase tracking-[0.24em] text-[#D2C1A6]">Direct supply</p>
                <div className="mt-7 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="fw-mono rounded-xl border border-white/70 bg-white/[0.04] px-5 py-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_14px_30px_rgba(0,0,0,0.1)]">
                    Factory
                  </div>
                  <div className="flex items-center justify-center text-[#D2C1A6]" aria-hidden="true">
                    <span className="hidden h-px w-10 bg-[#D2C1A6]/75 sm:block" />
                    <span className="fw-mono grid h-10 w-10 rotate-90 place-items-center rounded-full border border-[#D2C1A6]/70 bg-[#D2C1A6] text-xl leading-none text-[#20201D] shadow-[0_0_28px_rgba(210,193,166,0.25)] sm:mx-2 sm:rotate-0">→</span>
                    <span className="hidden h-px w-10 bg-[#D2C1A6]/75 sm:block" />
                  </div>
                  <div className="fw-mono rounded-xl border border-white bg-white px-5 py-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#20201D] shadow-[0_14px_30px_rgba(0,0,0,0.14)]">
                    Client
                  </div>
                </div>
                <p className="mx-auto mt-6 max-w-2xl leading-[1.65] text-white/72">A cleaner supply path from factory to client with fewer layers, clearer specs, and more straightforward pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-[#20201D]/10">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-12">
          <div className="max-w-3xl">
            <Eyebrow>How FoundWell helps</Eyebrow>
            <h2 className="fw-display mt-4 text-[2.35rem] font-[610] leading-[1] tracking-[-0.044em] sm:text-[3.35rem]">
              A simpler way to choose and quote flooring.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="fw-hover-lift rounded-[1.35rem] border border-[#20201D]/10 bg-white p-6 shadow-[0_14px_36px_rgba(32,32,29,0.045)]">
                <div className="mb-5 h-[7px] w-[50px] rounded-[2px] bg-[#A68F6B]" />
                <h3 className="fw-condensed text-2xl font-semibold uppercase tracking-[0.01em]">{service.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.72] text-[#716C61]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="about" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-12">
        <div className="overflow-hidden rounded-[1.9rem] bg-[#20201D] text-white">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <div>
              <p className="fw-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#D2C1A6]">About FoundWell</p>
              <h2 className="fw-display mt-4 text-[2.35rem] font-[610] leading-[1] tracking-[-0.044em] sm:text-[3.35rem]">
                A direct flooring supply partner for project buyers.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {["Direct sourcing", "Quality standard", "Client value"].map((item) => (
                <div key={item}>
                  <p className="fw-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#D2C1A6]">{item}</p>
                  <p className="mt-3 leading-[1.72] text-white/72">Fewer layers, clearer specs, and a more confident route from selection to delivery.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
