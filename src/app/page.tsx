import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CaretDown,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { SERVICES, PROCESS_STEPS, STANDARDS, FAQS, SITE_INFO } from "@/data/site";
import { ProjectDossier } from "@/components/ProjectDossier";
import { EstimateForm } from "@/components/EstimateForm";
import { EditorialFade } from "@/components/MotionPrimitives";

export default function EditorialHomePage() {
  return (
    <>
      {/* 1. Swiss Architectural Print Hero */}
      <section className="border-b border-border-subtle bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-border-subtle">
            <div className="lg:col-span-6 py-14 lg:py-20 lg:pr-12 flex flex-col justify-between space-y-10">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Boston · Residential Remodeling Monograph
                </p>
                <h1 className="font-serif text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl leading-[1.05] pb-1">
                  Crafted Interiors for <span className="italic text-accent">Boston</span> Living.
                </h1>
                <p className="max-w-md text-base leading-relaxed text-ink-muted">
                  Over 20 years of building experience and 10+ years in business:
                  kitchen joinery, watertight bathrooms, white oak staircases,
                  and fine interior painting.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#estimate"
                    className="inline-flex items-center gap-2 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-hover active:scale-[0.98]"
                  >
                    <span>Schedule Walkthrough</span>
                    <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#dossier"
                    className="inline-flex items-center gap-2 border border-border-subtle bg-surface px-6 py-4 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-accent"
                  >
                    <span>Inspect Dossier</span>
                    <ArrowUpRight weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-border-subtle pt-6 gap-4">
                <div>
                  <p className="font-serif text-3xl font-semibold text-ink">20+</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    Years Craft
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-ink">10+</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    Years Business
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-accent">MA</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    Licensed &amp; Insured
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 py-10 lg:py-16 lg:pl-12 grid grid-cols-12 gap-4 items-end">
              <div className="col-span-7 space-y-2">
                <div className="relative aspect-[3/4] border border-border-subtle bg-surface-soft overflow-hidden">
                  <Image
                    src="/images/two-tone-kitchen.jpg"
                    alt="Two-tone white and natural oak kitchen renovation in Newton"
                    fill
                    priority
                    sizes="(max-width: 1024px) 60vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Plate 01 · Two-Tone Cabinetry &amp; Oak Floor
                </p>
              </div>
              <div className="col-span-5 space-y-2">
                <div className="relative aspect-[3/4] border border-border-subtle bg-surface-soft overflow-hidden">
                  <Image
                    src="/images/staircase-vertical.jpg"
                    alt="White oak staircase with warm recessed LED step illumination"
                    fill
                    priority
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Plate 02 · LED Oak Stairs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Split-Screen Four Disciplines Narrative */}
      <section className="border-b border-border-subtle bg-canvas py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                The Four Disciplines
              </p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl leading-[1.08]">
                Executed with cabinetmaker restraint.
              </h2>
              <p className="text-base leading-relaxed text-ink-muted">
                Every trade in our practice follows the same discipline: thorough
                substrate prep, square reveals, clean masking, and lasting
                materials suited to Greater Boston homes.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-border-subtle bg-surface px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink hover:border-accent"
                >
                  <span>Compare Full Specifications</span>
                  <ArrowRight weight="bold" className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {SERVICES.map((service) => (
                <EditorialFade
                  key={service.slug}
                  className="border border-border-subtle bg-surface p-6 sm:p-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-5 relative aspect-[4/3] overflow-hidden border border-border-subtle bg-surface-soft">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-accent">
                      <span>{service.plate}</span>
                      <span className="text-ink-muted">{service.timeline}</span>
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-ink leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                    <div className="pt-1">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:underline"
                      >
                        <span>Read {service.shortTitle} Brief</span>
                        <ArrowRight weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </EditorialFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Toggleable Project Dossier */}
      <ProjectDossier />

      {/* 4. Five-Stage Architectural Build Protocol */}
      <section className="border-b border-border-subtle bg-canvas py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              From First Measurement to Handover
            </h2>
            <p className="text-base text-ink-muted">
              A clear five-step residential protocol built for occupied homes.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-border-subtle sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="border-r border-b border-border-subtle bg-surface p-6 space-y-4"
              >
                <span className="font-mono text-xs font-semibold text-accent">
                  STAGE {item.step}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Six Standards Matrix */}
      <section className="border-b border-border-subtle bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Practice Standards
            </p>
            <h2 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
              We treat your home like our own.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((s) => (
              <div key={s.number} className="border border-border-subtle bg-canvas p-7 space-y-3">
                <span className="font-mono text-xs font-semibold text-accent">
                  {s.number}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs & Consultation Inquiry */}
      <section id="estimate" className="bg-canvas py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 border-b border-border-subtle pb-20">
            <div className="lg:col-span-4 space-y-3">
              <h2 className="font-serif text-4xl font-semibold text-ink">
                Frequently Asked
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
                Essential details before scheduling an on-site estimate in
                Greater Boston.
              </p>
            </div>
            <div className="lg:col-span-8 divide-y divide-border-subtle border-y border-border-subtle">
              {FAQS.map((faq) => (
                <details key={faq.question} className="faq-details bg-surface">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-medium text-ink">
                    <span>{faq.question}</span>
                    <CaretDown
                      weight="bold"
                      className="faq-chevron h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-sm text-ink-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
                  Request a Boston Home Walkthrough
                </h2>
                <p className="text-base text-ink-muted leading-relaxed">
                  Reach our office directly by phone, WhatsApp, or email, or
                  complete the consultation form.
                </p>
              </div>

              <div className="border border-border-subtle bg-surface divide-y divide-border-subtle">
                <a
                  href={SITE_INFO.phoneHref}
                  className="flex items-center gap-4 p-5 hover:bg-surface-soft transition-colors"
                >
                  <Phone weight="bold" className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      Telephone
                    </p>
                    <p className="font-semibold text-ink">{SITE_INFO.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={SITE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 hover:bg-surface-soft transition-colors"
                >
                  <WhatsappLogo weight="bold" className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      WhatsApp
                    </p>
                    <p className="font-semibold text-ink">Send Project Photos</p>
                  </div>
                </a>
                <a
                  href={SITE_INFO.emailHref}
                  className="flex items-center gap-4 p-5 hover:bg-surface-soft transition-colors"
                >
                  <EnvelopeSimple weight="bold" className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-ink break-all">
                      {SITE_INFO.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-5">
                  <MapPin weight="bold" className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      Office &amp; Territory
                    </p>
                    <p className="text-sm text-ink">{SITE_INFO.serviceArea}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
