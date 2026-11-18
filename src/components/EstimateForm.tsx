"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle,
  WarningCircle,
  PaperPlaneTilt,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { SITE_INFO } from "@/data/site";

const SCOPES = [
  "Kitchen Architecture",
  "Bathroom Remodel",
  "Hardwood & Staircase",
  "Interior Painting",
  "Full Residence",
];

export function EstimateForm() {
  const [selectedTrade, setSelectedTrade] = useState(SCOPES[0]);
  const [submitted, setSubmitted] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    neighborhood: "",
    details: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInteracted(true);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    const summaryBody = encodeURIComponent(
      `Project Type: ${selectedTrade}\nName: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nLocation: ${formData.neighborhood}\nDetails: ${formData.details}`
    );

    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-accent bg-surface p-8 sm:p-10 space-y-6"
      >
        <div className="inline-flex h-11 w-11 items-center justify-center bg-accent-soft text-accent">
          <CheckCircle weight="fill" className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-3xl font-semibold text-ink">
            Consultation brief ready, {formData.firstName}.
          </h3>
          <p className="text-base text-ink-muted leading-relaxed">
            Forward your notes directly to our Boston office via WhatsApp or
            email, or call {SITE_INFO.phoneDisplay}.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`${SITE_INFO.whatsappHref}?text=${summaryBody}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-accent-hover"
          >
            <WhatsappLogo weight="bold" className="h-4 w-4" aria-hidden="true" />
            <span>Send via WhatsApp</span>
          </a>
          <a
            href={`${SITE_INFO.emailHref}?subject=${encodeURIComponent(
              `Consultation Request: ${selectedTrade}`
            )}&body=${summaryBody}`}
            className="inline-flex items-center gap-2 border border-border-subtle bg-canvas px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:border-accent"
          >
            <span>Open Email Client</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setInteracted(false);
            }}
            className="px-4 py-3 text-sm text-ink-muted hover:text-ink"
          >
            Edit Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-border-subtle bg-surface p-6 sm:p-10 space-y-6"
    >
      <div>
        <span className="block font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
          Discipline Selection
        </span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Discipline Selection">
          {SCOPES.map((type) => {
            const active = selectedTrade === type;
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSelectedTrade(type)}
                className={`border px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active
                    ? "border-accent bg-accent text-white"
                    : "border-border-subtle bg-canvas text-ink-muted hover:text-ink"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ed-first" className="block text-sm font-medium text-ink mb-1.5">
            First Name <span className="text-accent">*</span>
          </label>
          <input
            id="ed-first"
            type="text"
            required
            placeholder="Alex"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={`form-control w-full border border-border-subtle bg-canvas px-4 py-3 text-ink focus:border-accent focus:bg-surface focus:outline-none ${
              interacted && !formData.firstName ? "user-invalid-fallback" : ""
            }`}
          />
          <p className="error-msg">
            <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
            Please enter your first name.
          </p>
        </div>

        <div>
          <label htmlFor="ed-last" className="block text-sm font-medium text-ink mb-1.5">
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            id="ed-last"
            type="text"
            required
            placeholder="Morgan"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={`form-control w-full border border-border-subtle bg-canvas px-4 py-3 text-ink focus:border-accent focus:bg-surface focus:outline-none ${
              interacted && !formData.lastName ? "user-invalid-fallback" : ""
            }`}
          />
          <p className="error-msg">
            <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
            Please enter your last name.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ed-email" className="block text-sm font-medium text-ink mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="ed-email"
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`form-control w-full border border-border-subtle bg-canvas px-4 py-3 text-ink focus:border-accent focus:bg-surface focus:outline-none ${
              interacted && !formData.email ? "user-invalid-fallback" : ""
            }`}
          />
          <p className="error-msg">
            <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
            Enter a valid email address.
          </p>
        </div>

        <div>
          <label htmlFor="ed-phone" className="block text-sm font-medium text-ink mb-1.5">
            Phone
          </label>
          <input
            id="ed-phone"
            type="tel"
            placeholder="(617) 555-0192"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="form-control w-full border border-border-subtle bg-canvas px-4 py-3 text-ink focus:border-accent focus:bg-surface focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ed-area" className="block text-sm font-medium text-ink mb-1.5">
          Neighborhood / Municipality
        </label>
        <input
          id="ed-area"
          type="text"
          placeholder="Boston, Brookline, Cambridge, Newton..."
          value={formData.neighborhood}
          onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
          className="form-control w-full border border-border-subtle bg-canvas px-4 py-3 text-ink focus:border-accent focus:bg-surface focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="ed-details" className="block text-sm font-medium text-ink mb-1.5">
          Scope Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="ed-details"
          rows={4}
          required
          placeholder="Outline rooms, finishes, and desired schedule..."
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className={`form-control w-full border border-border-subtle bg-canvas px-4 py-3 text-ink focus:border-accent focus:bg-surface focus:outline-none ${
            interacted && !formData.details ? "user-invalid-fallback" : ""
          }`}
        />
        <p className="error-msg">
          <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
          Please provide brief project notes.
        </p>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-hover active:scale-[0.98]"
      >
        <span>Submit Walkthrough Inquiry</span>
        <PaperPlaneTilt weight="bold" className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
