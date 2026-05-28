const services = [
  {
    title: "Foundation Repair",
    description:
      "Targeted structural repairs for settling, bowing walls, cracking slabs, and aging supports.",
  },
  {
    title: "Basement Waterproofing",
    description:
      "Interior and exterior moisture solutions that help protect your home from leaks, mold, and water damage.",
  },
  {
    title: "Crawl Space Solutions",
    description:
      "Encapsulation, drainage, and air quality upgrades that make crawl spaces cleaner, drier, and safer.",
  },
  {
    title: "Concrete Lifting",
    description:
      "Level uneven walkways, driveways, patios, and slabs with fast, minimally invasive repair methods.",
  },
];

const stats = [
  { value: "20+", label: "Years of combined field experience" },
  { value: "1,000+", label: "Projects inspected and repaired" },
  { value: "24hr", label: "Response time for new quote requests" },
];

const processSteps = [
  {
    title: "Inspect",
    description: "We assess the structure, moisture issues, and visible damage to understand what your property really needs.",
  },
  {
    title: "Plan",
    description: "You get a clear scope, pricing guidance, and a repair strategy built around long-term stability.",
  },
  {
    title: "Restore",
    description: "Our team completes the work cleanly and efficiently, with communication the whole way through.",
  },
];

const gallery = [
  "Settling foundation wall stabilization",
  "Waterproofed basement with drainage system",
  "Crawl space encapsulation and cleanup",
  "Lifted concrete patio and walkway",
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-semibold tracking-[0.24em] text-slate-900 sm:text-3xl">
        FOUNDWELL
      </span>
      <span className="relative block h-10 w-20 sm:h-12 sm:w-24" aria-hidden="true">
        <span className="absolute left-0 top-0 h-3.5 w-10 rounded-sm bg-slate-900" />
        <span className="absolute left-7 top-4 h-3.5 w-11 rounded-sm bg-[#7b3f2a]" />
        <span className="absolute left-3 top-8 h-3.5 w-12 rounded-sm bg-[#b3875b]" />
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5f1ea_0%,#e5ddcf_55%,#d7c5ae_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-5 border-b border-slate-900/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <BrandMark />

            <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-700">
              <a href="#services" className="transition hover:text-slate-950">Services</a>
              <a href="#about" className="transition hover:text-slate-950">About</a>
              <a href="#projects" className="transition hover:text-slate-950">Projects</a>
              <a href="#contact" className="transition hover:text-slate-950">Contact</a>
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
              >
                Request Inspection
              </a>
            </nav>
          </header>

          <div className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7b3f2a]">
                Structural repair • waterproofing • crawl space care
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Protect the home beneath everything that matters.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                FoundWell helps homeowners solve foundation, basement, crawl space,
                and concrete issues with clear inspections, honest recommendations,
                and repair plans built for long-term peace of mind.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#7b3f2a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#643120]"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/70 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:bg-white"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-900/10 bg-white/70 p-5 shadow-sm">
                    <div className="text-3xl font-semibold text-slate-950">{stat.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/35 blur-3xl" />
              <div className="absolute -left-6 bottom-10 h-32 w-32 rounded-full bg-[#7b3f2a]/12 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-2xl backdrop-blur">
                <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="min-h-[360px] rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(17,24,39,0.18),rgba(17,24,39,0.45)),url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
                  <div className="flex flex-col gap-4">
                    <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
                      <p className="text-sm uppercase tracking-[0.2em] text-white/70">Why FoundWell</p>
                      <h2 className="mt-3 text-2xl font-semibold">Built around trust, not pressure.</h2>
                      <p className="mt-3 text-sm leading-7 text-white/75">
                        We make complex home repair decisions easier to understand so clients can move forward with confidence.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-slate-900/10 bg-[#efe4d3] p-6">
                      <p className="text-sm uppercase tracking-[0.2em] text-[#7b3f2a]">Service Area</p>
                      <p className="mt-3 text-xl font-semibold text-slate-950">Regional specialists for homes needing structural care.</p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        Replace this with your city, counties, or local neighborhoods once you finalize your service footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b3f2a]">Core services</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            The layout you liked — adapted for a premium foundation and waterproofing brand.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            This homepage structure is designed to feel trustworthy, established, and easy to scan on both desktop and mobile.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] border border-slate-900/8 bg-white p-6 shadow-sm">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#efe4d3]" />
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-[#7b3f2a]">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-slate-900/8 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b3f2a]">About FoundWell</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              A brand positioned for confidence, clarity, and serious home repair work.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] bg-[#f7f3ec] p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2a]">0{index + 1}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b3f2a]">Featured work</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Project gallery section for before/after proof.</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-[#7b3f2a]">
            Schedule your inspection →
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item, index) => (
            <div key={item} className="overflow-hidden rounded-[1.75rem] border border-slate-900/8 bg-white shadow-sm">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    index % 2 === 0
                      ? "linear-gradient(rgba(15,23,42,0.12), rgba(15,23,42,0.2)), url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80')"
                      : "linear-gradient(rgba(15,23,42,0.12), rgba(15,23,42,0.2)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80')",
                }}
              />
              <div className="p-5">
                <p className="text-lg font-semibold text-slate-950">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Swap these placeholders with real project photos and short result summaries.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b189]">Get in touch</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to turn this into your real business website?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              I can keep building this out with your real copy, phone number, city, service pages, forms, and gallery content.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <div className="grid gap-5 sm:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Full name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Phone number" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none sm:col-span-2" placeholder="Email address" />
              <textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none sm:col-span-2" placeholder="Tell us about your foundation, basement, or crawl space issue" />
            </div>
            <button className="mt-5 w-full rounded-full bg-[#7b3f2a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#643120]">
              Request My Estimate
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
