import type { Metadata } from "next";
import { Phone, EnvelopeSimple, WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { SITE_INFO } from "@/data/site";
import { EstimateForm } from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: `Inquire | ${SITE_INFO.name}`,
  description:
    "Schedule an on-site renovation estimate in Greater Boston with Ashori Partners LLC.",
};

export default function ContactPage() {
  return (
    <div id="estimate" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Direct Consultation
          </p>
          <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl leading-[1.06]">
            Arrange a Walkthrough in Greater Boston.
          </h1>
          <p className="text-base text-ink-muted leading-relaxed">
            Call, message on WhatsApp, or complete the specification form to
            set up an on-site estimate.
          </p>

          <div className="border border-border-subtle bg-surface divide-y divide-border-subtle">
            <a href={SITE_INFO.phoneHref} className="flex items-center gap-3 p-4 hover:bg-surface-soft">
              <Phone weight="bold" className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="font-semibold">{SITE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={SITE_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 hover:bg-surface-soft"
            >
              <WhatsappLogo weight="bold" className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="font-semibold">WhatsApp Direct</span>
            </a>
            <a href={SITE_INFO.emailHref} className="flex items-center gap-3 p-4 hover:bg-surface-soft break-all">
              <EnvelopeSimple weight="bold" className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">{SITE_INFO.email}</span>
            </a>
            <div className="flex items-start gap-3 p-4 text-ink-muted">
              <MapPin weight="bold" className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm">{SITE_INFO.serviceArea}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <EstimateForm />
        </div>
      </div>
    </div>
  );
}
