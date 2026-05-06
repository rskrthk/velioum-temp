import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { RobotImagesSection } from "@/components/site/RobotImagesSection";
import {
  AnimatedWords,
  CountUp,
  Magnetic,
  Parallax,
  Spotlight,
  TiltCard,
} from "@/components/site/MotionExtras";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Velioum — Driving Your Digital Future" },
      { name: "description", content: "AI, automation, cobotics and cloud solutions designed to power the next generation of smart manufacturing." },
    ],
  }),
});

const pillars = [
  { label: "Innovation", icon: "</>" },
  { label: "AI & Automation", icon: "◍" },
  { label: "Reliability", icon: "✦" },
  { label: "Scalability", icon: "△" },
  { label: "Precision", icon: "◎" },
];

const capabilities = [
  { title: "Digital Factory Solutions", desc: "Cobotics, SPM design and end-to-end deployment that bridge human intelligence with robotic precision." },
  { title: "Emerging Technologies", desc: "AI, IoT, AR/VR and RPA layered into every cobot deployment for adaptive, measurable performance." },
  { title: "Software Development", desc: "Bespoke operator apps, SaaS platforms and integrations that own the full technical stack." },
  { title: "Cloud Services", desc: "Migration, DevOps and serverless infrastructure on AWS, Azure and Google Cloud." },
  { title: "IT Security", desc: "End-to-end encryption, identity management and secure APIs across your automation surface." },
  { title: "Enterprise & Data", desc: "ERP, CRM, big data and predictive analytics that turn factory signals into boardroom insight." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <Spotlight />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 md:pt-32 md:pb-40">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Velioum Systems · April 2026
                </span>
              </Reveal>
              <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] md:text-7xl">
                <AnimatedWords text="Driving your" delay={0.1} />{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">
                    <AnimatedWords text="digital future" delay={0.35} />
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
                    className="absolute bottom-1 left-0 right-0 h-3 origin-left rounded-sm bg-accent/40"
                  />
                </span>
                .
              </h1>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  AI, cobotics and intelligent automation engineered to make every factory smarter,
                  every operation faster, and every decision sharper.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Magnetic>
                    <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 transition-all">
                      Explore services
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link to="/factory" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-semibold hover:border-foreground/40 transition-colors">
                      Digital Factory
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            </div>

            {/* Right side decorative */}
            <div className="lg:col-span-5">
              <StaggerGroup className="space-y-3" stagger={0.09}>
                {pillars.map((p, i) => (
                  <StaggerItem key={p.label}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft ${
                        i === 4 ? "bg-primary text-primary-foreground border-primary" : ""
                      }`}
                    >
                      <div className={`grid h-10 w-10 place-items-center rounded-lg font-bold ${
                        i === 4 ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                      }`}>
                        {p.icon}
                      </div>
                      <span className="font-semibold">{p.label}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>

        {/* Floating accents */}
        <motion.div
          aria-hidden
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
      </section>

      {/* MARQUEE / pillars text */}
      <section className="border-y border-border bg-primary py-6 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-2xl font-display font-semibold text-primary-foreground/80"
        >
          {Array.from({ length: 2 }).flatMap((_, j) =>
            ["Innovation", "AI & Automation", "Reliability", "Scalability", "Precision"].map((t, i) => (
              <span key={`${j}-${i}`} className="flex items-center gap-12">
                {t}
                <span className="text-accent">✦</span>
              </span>
            ))
          )}
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-8 md:grid-cols-2 md:items-end mb-14">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              What we do, end to end.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-muted-foreground">
              From the operator app on your production floor to the cloud platform managing it all,
              Velioum builds and owns the full technical stack.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <StaggerItem key={c.title}>
              <TiltCard className="h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-glow"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground font-display font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </motion.article>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <RobotImagesSection />

      {/* QUOTE / value */}
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-16 md:py-24 text-primary-foreground">
            <div className="relative z-10 max-w-3xl">
              <div className="text-accent text-6xl font-display leading-none">"</div>
              <p className="mt-2 text-2xl md:text-4xl font-display font-semibold leading-tight text-balance">
                Velioum does not just supply robots. We design, deploy, train your team
                and keep your systems running.
              </p>
              <p className="mt-8 text-sm uppercase tracking-widest text-primary-foreground/60">
                — Concept to Commissioning
              </p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full border-2 border-dashed border-accent"
            />
            <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-accent/30 blur-2xl" />
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <StaggerGroup className="grid gap-10 sm:grid-cols-3">
          {[
            { n: 7, suffix: "+", v: "Service domains" },
            { n: 24, suffix: "/7", v: "Cloud operations" },
            { n: 100, suffix: "%", v: "Concept to commissioning" },
          ].map((s) => (
            <StaggerItem key={s.v}>
              <Parallax offset={20}>
                <div className="border-t-2 border-accent pt-6">
                  <div className="font-display text-6xl md:text-7xl font-bold text-primary">
                    <CountUp to={s.n} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-muted-foreground">{s.v}</div>
                </div>
              </Parallax>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-12 md:p-16 text-center shadow-soft">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Ready to drive your digital future?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Let's build something great together.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-glow hover:opacity-90">
              sales@velioum.com →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
