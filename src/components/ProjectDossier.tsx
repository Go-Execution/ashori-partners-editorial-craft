"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Rows, SquaresFour, ArrowUpRight, MapPin, X } from "@phosphor-icons/react";
import { PROJECTS, type ProjectItem } from "@/data/site";

type FilterCat = "All" | ProjectItem["category"];
const CATS: FilterCat[] = ["All", "Kitchens", "Bathrooms", "Flooring", "Painting"];

export function ProjectDossier() {
  const [viewMode, setViewMode] = useState<"grid" | "dossier">("grid");
  const [filter, setFilter] = useState<FilterCat>("All");
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section
      id="dossier"
      aria-labelledby="dossier-heading"
      className="border-b border-border-subtle bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-border-subtle pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3 max-w-2xl">
            <h2
              id="dossier-heading"
              className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl leading-[1.08]"
            >
              Project Dossier &amp; Field Plates
            </h2>
            <p className="text-base text-ink-muted leading-relaxed">
              Toggle between architectural photography plates and a structured
              specification index from recent Greater Boston commissions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex border border-border-subtle bg-canvas p-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-pressed={viewMode === "grid"}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  viewMode === "grid"
                    ? "bg-accent text-white"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                <SquaresFour weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Plates</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("dossier")}
                aria-pressed={viewMode === "dossier"}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  viewMode === "dossier"
                    ? "bg-accent text-white"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                <Rows weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Index</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {CATS.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(cat)}
                className={`border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active
                    ? "border-accent bg-accent text-white"
                    : "border-border-subtle bg-canvas text-ink-muted hover:text-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {viewMode === "grid" ? (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <article
                key={project.id}
                className="group border border-border-subtle bg-canvas flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border-subtle bg-surface-soft">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 left-3 bg-canvas/95 border border-border-subtle px-2.5 py-1 font-mono text-[11px] font-medium text-ink">
                      {project.plate}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-accent">
                      <span>{project.category}</span>
                      <span className="text-ink-muted">{project.location}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-ink leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                      {project.scope}
                    </p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 border-t border-border-subtle divide-y divide-border-subtle">
            {visible.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12 md:items-center"
              >
                <div className="md:col-span-2 font-mono text-xs text-accent">
                  {project.plate} · {project.category}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-ink-muted">
                    <MapPin weight="bold" className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {project.location}
                  </p>
                </div>
                <div className="md:col-span-4 text-sm text-ink-muted space-y-1">
                  <p>{project.scope}</p>
                  <p className="font-mono text-[11px] text-ink">
                    Spec: {project.materials}
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 border border-border-subtle bg-canvas px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink hover:border-accent hover:text-accent"
                  >
                    <span>Plate</span>
                    <ArrowUpRight weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="editorial-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl border border-border-subtle bg-canvas shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close plate preview"
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center border border-border-subtle bg-surface text-ink hover:border-accent"
            >
              <X weight="bold" className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="relative aspect-[16/10] w-full bg-surface-soft border-b border-border-subtle">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-accent">
                <span>
                  {selected.plate} · {selected.category}
                </span>
                <span className="text-ink-muted">{selected.location}</span>
              </div>
              <h3 id="editorial-modal-title" className="font-serif text-3xl font-semibold text-ink">
                {selected.title}
              </h3>
              <p className="text-base text-ink-muted leading-relaxed">{selected.scope}</p>
              <p className="font-mono text-xs text-ink border-t border-border-subtle pt-3">
                Materials &amp; Finish: {selected.materials}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact#estimate"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-accent-hover"
                >
                  <span>Inquire About Similar Scope</span>
                  <ArrowUpRight weight="bold" className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
