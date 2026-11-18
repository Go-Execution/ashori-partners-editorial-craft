import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SITE_INFO, STANDARDS } from "@/data/site";

export const metadata: Metadata = {
  title: `Practice | ${SITE_INFO.name}`,
  description:
    "20+ years of residential construction experience and 10+ years serving Boston homeowners.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 space-y-20">
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center border-b border-border-subtle pb-16">
        <div className="lg:col-span-6 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Our Practice
          </p>
          <h1 className="font-serif text-4xl font-semibold text-ink sm:text-6xl leading-[1.05]">
            Your home, handled with quiet architectural precision.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-ink-muted">
            Ashori Partners LLC brings over 20 years of residential building
            craft and more than 10 years in business to Boston homeowners. From
            precision kitchen carpentry to watertight tile baths and oak stairs,
            every phase is executed with care.
          </p>
          <Link
            href="/contact#estimate"
            className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-accent-hover"
          >
            <span>Request Walkthrough</span>
            <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] border border-border-subtle">
            <Image
              src="/images/craftsman-cabinetry.jpg"
              alt="Ashori Partners craftsman installing kitchen cabinetry"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] border border-border-subtle mt-8">
            <Image
              src="/images/dining-trim-paint.jpg"
              alt="Dining room with crisp white trim and refinished hardwood"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 border-t border-l border-border-subtle md:grid-cols-3">
        <div className="border-r border-b border-border-subtle bg-surface p-8">
          <p className="font-serif text-4xl font-semibold text-accent">20+</p>
          <p className="mt-2 font-semibold text-ink">Years Construction Experience</p>
        </div>
        <div className="border-r border-b border-border-subtle bg-surface p-8">
          <p className="font-serif text-4xl font-semibold text-accent">10+</p>
          <p className="mt-2 font-semibold text-ink">Years in Business</p>
        </div>
        <div className="border-r border-b border-border-subtle bg-surface p-8 flex items-start gap-3">
          <ShieldCheck weight="fill" className="h-7 w-7 text-accent shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold text-ink">Licensed &amp; Insured</p>
            <p className="mt-1 text-sm text-ink-muted">Full residential protection in Massachusetts.</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {STANDARDS.map((s) => (
          <div key={s.number} className="border border-border-subtle bg-surface p-7 space-y-3">
            <span className="font-mono text-xs text-accent">{s.number}</span>
            <h2 className="font-serif text-2xl font-semibold text-ink">{s.title}</h2>
            <p className="text-sm text-ink-muted leading-relaxed">{s.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
