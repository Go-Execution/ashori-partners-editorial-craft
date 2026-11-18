import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, SITE_INFO } from "@/data/site";

export const metadata: Metadata = {
  title: `Disciplines | ${SITE_INFO.name}`,
  description:
    "Kitchen architecture, bathroom remodeling, hardwood flooring, staircases, and interior painting in Boston.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 space-y-16">
      <div className="max-w-3xl space-y-4 border-b border-border-subtle pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Renovation Disciplines
        </p>
        <h1 className="font-serif text-4xl font-semibold text-ink sm:text-6xl leading-[1.05]">
          Four residential trades under unified site supervision.
        </h1>
      </div>

      <div className="space-y-10">
        {SERVICES.map((service) => (
          <article
            key={service.slug}
            className="grid grid-cols-1 gap-8 border border-border-subtle bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:items-center"
          >
            <div className="lg:col-span-5 relative aspect-[4/3] border border-border-subtle bg-surface-soft">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between font-mono text-xs text-accent">
                <span>{service.plate}</span>
                <span className="text-ink-muted">{service.timeline}</span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-ink">
                {service.title}
              </h2>
              <p className="text-base text-ink-muted leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle weight="fill" className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-accent-hover"
              >
                <span>Open {service.shortTitle} Brief</span>
                <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
