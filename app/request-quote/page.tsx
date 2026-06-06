import { Eyebrow, FoundWellIcon, SiteHeader } from "../components/FoundWellBrand";

const quoteSteps = [
  {
    icon: "flooring" as const,
    title: "Share product + quantity.",
    copy: "Tell us which finish you like and the approximate square footage.",
  },
  {
    icon: "quote" as const,
    title: "Confirm pricing.",
    copy: "We review quantity, availability, shipping, and project timing.",
  },
  {
    icon: "delivery" as const,
    title: "Coordinate samples or delivery.",
    copy: "We follow up with sample options, lead time, and next steps.",
  },
];

function Field({ label, placeholder, type = "text", span = false }: { label: string; placeholder: string; type?: string; span?: boolean }) {
  return (
    <label className={`grid gap-2 ${span ? "sm:col-span-2" : ""}`}>
      <span className="fw-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#20201D]">{label}</span>
      <input
        type={type}
        name={label.toLowerCase().replaceAll(" ", "-")}
        placeholder={placeholder}
        className="h-13 rounded-2xl border border-[#20201D]/12 bg-white px-4 text-sm font-medium text-[#20201D] outline-none transition placeholder:text-[#716C61]/70 focus:border-[#20201D]"
      />
    </label>
  );
}

export default function RequestQuotePage() {
  return (
    <main className="fw-grid-bg min-h-screen bg-white text-[#20201D]">
      <SiteHeader />
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 rounded-[1.9rem] border border-[#20201D]/10 bg-white p-6 shadow-[0_22px_60px_rgba(32,32,29,0.07)] sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
          <div>
            <Eyebrow>Request Quote</Eyebrow>
            <h1 className="fw-display mt-4 text-[2.6rem] font-[610] leading-[1] tracking-[-0.044em] sm:text-[3.6rem]">
              Get pricing for your project.
            </h1>
            <p className="mt-5 text-[17px] leading-[1.72] text-[#716C61]">
              Share the product, quantity, and project basics. We’ll follow up with pricing, lead time, and sample or delivery next steps.
            </p>
            <div className="mt-8 grid gap-4">
              {quoteSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 border-t border-[#20201D]/10 pt-4 text-[#716C61]">
                  <FoundWellIcon name={step.icon} className="h-10 w-10 rounded-xl" />
                  <p>
                    <b className="text-[#20201D]">{index + 1}. {step.title}</b><br />{step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" placeholder="Full name" />
            <Field label="Company" placeholder="Company" />
            <Field label="Email" placeholder="name@email.com" type="email" />
            <Field label="Phone" placeholder="Phone" type="tel" />
            <Field label="Project type" placeholder="Commercial buildout" />
            <Field label="Square footage" placeholder="4,800 sq. ft." />
            <Field label="Product interest" placeholder="Castle Oak / V-Line SPC" span />
            <label className="grid gap-2 sm:col-span-2">
              <span className="fw-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#20201D]">Timeline / notes</span>
              <textarea
                name="timeline-notes"
                placeholder="Tell us about timing, delivery city, samples, or installation needs."
                className="min-h-[140px] rounded-2xl border border-[#20201D]/12 bg-white px-4 py-3 text-sm font-medium text-[#20201D] outline-none transition placeholder:text-[#716C61]/70 focus:border-[#20201D] sm:col-span-2"
              />
            </label>
            <button
              type="submit"
              className="fw-mono inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-[#20201D] px-7 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-black sm:col-span-2 sm:w-[340px]"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
