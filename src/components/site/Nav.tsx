import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/factory", label: "Digital Factory" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary rounded-md bg-primary/10" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft"
          >
            Talk to us →
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="grid gap-1">
              <span className="h-0.5 w-5 bg-foreground/80" />
              <span className="h-0.5 w-5 bg-foreground/80" />
              <span className="h-0.5 w-5 bg-foreground/80" />
            </span>
          </button>
        </div>
      </div>
      <div id="mobile-nav" className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="mx-auto max-w-7xl px-6 pb-5">
          <nav className="grid gap-1 rounded-2xl border border-border bg-background/70 p-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block w-full rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-primary/5 hover:text-foreground transition-colors"
                activeProps={{ className: "block w-full rounded-xl px-4 py-3 text-sm font-semibold text-primary bg-primary/10" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Talk to us →
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
