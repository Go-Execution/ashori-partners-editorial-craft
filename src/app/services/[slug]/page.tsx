import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, SITE_INFO } from "@/data/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: SITE_INFO.name };
  return {
    title: `${service.title} | ${SITE_INFO.name}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20 space-y-16">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 border border-border-subtle bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink"
      >
        <ArrowLeft weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
        <span>All Disciplines</span>
      </Link>

      <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {service.plate} · {service.timeline} · {service.warranty}
          </p>
          <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl leading-[1.06]">
            {service.headline}
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {service.description}
          </p>
          <ul className="space-y-2.5">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-base text-ink">
                <CheckCircle weight="fill" className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact#estimate"
            className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-accent-hover"
          >
            <span>Request {service.shortTitle} Estimate</span>
            <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="lg:col-span-6 relative aspect-[4/3] border border-border-subtle bg-surface-soft">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 border-t border-border-subtle pt-12">
        {service.deliverables.map((d, idx) => (
          <div key={d.name} className="border border-border-subtle bg-surface p-7 space-y-3">
            <span className="font-mono text-xs text-accent">0{idx + 1}</span>
            <h2 className="font-serif text-2xl font-semibold text-ink">{d.name}</h2>
            <p className="text-sm text-ink-muted leading-relaxed">{d.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
