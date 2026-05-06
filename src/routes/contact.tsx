import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Velioum" },
      { name: "description", content: "Talk to Velioum about cobotics, AI and digital factory deployments. sales@velioum.com" },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-balance">
              Let's build something <span className="text-primary">great</span> together.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Tell us about your operation. We'll come back with ideas, a feasibility view and a plan
              for what's next.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 space-y-4">
              {[
                { k: "Email", v: "sales@velioum.com" },
                { k: "Web", v: "www.velioum.com" },
                { k: "Hours", v: "Mon — Fri · 24/7 cloud ops" },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{row.k}</span>
                  <span className="font-medium">{row.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
          >
            <div className="grid gap-5">
              <Field label="Name" name="name" />
              <Field label="Work email" name="email" type="email" />
              <Field label="Company" name="company" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell us about your project</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                {sent ? "Thanks — we'll be in touch ✓" : "Send message →"}
              </button>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
