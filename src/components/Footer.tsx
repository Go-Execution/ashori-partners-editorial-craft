import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { SERVICES, SITE_INFO } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="h-12 w-14 border border-border-subtle bg-surface p-1.5">
                <Image
                  src="/images/ashori-logo.png"
                  alt="Ashori Partners LLC Seal"
                  width={56}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-ink">
                  {SITE_INFO.name}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  Boston, Massachusetts
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-ink-muted max-w-sm">
              Over 20 years of residential renovation experience across Boston.
              Kitchens, bathrooms, hardwood floors, staircases, and interior
              painting delivered with quiet craftsmanship.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={SITE_INFO.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center border border-border-subtle bg-surface text-ink hover:border-accent hover:text-accent"
              >
                <InstagramLogo weight="regular" className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SITE_INFO.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-border-subtle bg-surface text-ink hover:border-accent hover:text-accent"
              >
                <FacebookLogo weight="regular" className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center border border-border-subtle bg-surface text-ink hover:border-accent hover:text-accent"
              >
                <WhatsappLogo weight="regular" className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Disciplines
            </h2>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-ink hover:text-accent transition-colors"
                  >
                    {service.plate} · {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Index
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-ink hover:text-accent">
                  Practice
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-ink hover:text-accent">
                  Project Dossier
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ink hover:text-accent">
                  All Disciplines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink hover:text-accent">
                  Consultations
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Direct Desk
            </h2>
            <ul className="space-y-3 text-sm text-ink">
              <li>
                <a href={SITE_INFO.phoneHref} className="inline-flex items-center gap-2 hover:text-accent">
                  <Phone weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>{SITE_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.emailHref}
                  className="inline-flex items-center gap-2 break-all hover:text-accent"
                >
                  <EnvelopeSimple weight="bold" className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <span>{SITE_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-ink-muted">
                <MapPin weight="bold" className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>{SITE_INFO.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_INFO.name}. Licensed &amp; Insured.</p>
          <p>Greater Boston Residential Renovation Monograph.</p>
        </div>
      </div>
    </footer>
  );
}
