import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-primary-foreground"><Logo /></div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Robots reimagined for your world. Driving the digital future of manufacturing through
            AI, automation and intelligent systems.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/factory" className="hover:text-accent">Digital Factory</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>sales@velioum.com</li>
            <li>www.velioum.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-6 py-6 text-center text-xs text-primary-foreground/60">
        © 2026 Velioum Systems · Driving Your Digital Future
      </div>
    </footer>
  );
}
