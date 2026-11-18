"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { List, X, Phone, ArrowUpRight } from "@phosphor-icons/react";
import { SITE_INFO } from "@/data/site";

const NAV_LINKS = [
  { href: "/services", label: "Disciplines" },
  { href: "/projects", label: "Dossier" },
  { href: "/about", label: "Practice" },
  { href: "/contact", label: "Inquire" },
];

export function Navbar() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const mobileOpen = openForPath === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3.5 py-1 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <div className="h-10 w-12 overflow-hidden border border-border-subtle bg-surface p-1">
            <Image
              src="/images/ashori-logo.png"
              alt="Ashori Partners LLC Seal"
              width={48}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div>
            <span className="font-serif text-xl font-semibold tracking-tight text-ink block leading-none">
              Ashori Partners
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Boston · Est. 10+ Yrs
            </span>
          </div>
        </Link>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-accent text-accent"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={SITE_INFO.phoneHref}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink hover:text-accent transition-colors"
          >
            <Phone weight="bold" className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>(617) 290-0302</span>
          </a>
          <Link
            href="/contact#estimate"
            className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-hover active:scale-[0.98]"
          >
            <span>Request Estimate</span>
            <ArrowUpRight weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpenForPath(mobileOpen ? null : pathname)}
          aria-expanded={mobileOpen}
          aria-controls="editorial-mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center border border-border-subtle bg-surface text-ink md:hidden"
        >
          {mobileOpen ? (
            <X weight="bold" className="h-5 w-5" aria-hidden="true" />
          ) : (
            <List weight="bold" className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="editorial-mobile-nav"
          className="border-t border-border-subtle bg-surface px-4 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col divide-y divide-border-subtle">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenForPath(null)}
                className="py-3.5 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 pt-2">
            <a
              href={SITE_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-border-subtle bg-canvas px-4 py-3 text-sm font-semibold text-ink"
            >
              <Phone weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>{SITE_INFO.phoneDisplay}</span>
            </a>
            <Link
              href="/contact#estimate"
              onClick={() => setOpenForPath(null)}
              className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white"
            >
              <span>Request Estimate</span>
              <ArrowUpRight weight="bold" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
