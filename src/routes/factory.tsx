import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/factory")({
  component: FactoryPage,
  head: () => ({
    meta: [
      { title: "Digital Factory — Velioum" },
      { name: "description", content: "Cobotics, SPM design, vision systems and end-to-end deployment. Velioum is your strategic partner for automation, sales and service." },
    ],
  }),
});

const pillars = [
  { name: "Automation", desc: "Deploying collaborative robots for precision manufacturing workflows." },
  { name: "Sales", desc: "Authorised reseller and solution design partner for Franka robots." },
  { name: "Service", desc: "End-to-end support, maintenance and operator training programs." },
];

const features = [
  { title: "Cobotics: Collaborative Robots", desc: "Robots designed to safely work alongside humans in shared environments." },
  { title: "End-to-End Deployment", desc: "Feasibility studies, system design, installation and commissioning." },
  { title: "SPM Design and Build", desc: "Custom-engineered machines built for specific process automation needs." },
  { title: "Vision Systems Integration", desc: "AI-based camera inspection for defect detection and quality assurance." },
  { title: "Simulation and Validation", desc: "Digital twin technology to validate performance and ROI before deployment." },
  { title: "Capability Building", desc: "Operator training, predictive maintenance and continuous improvement." },
];

function FactoryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative z-10">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Digital Factory</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-4xl text-5xl md:text-7xl font-bold text-balance">
              Bridging human intelligence with{" "}
              <span className="text-accent">robotic precision</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
              From first conversation to full production. Velioum owns the entire journey —
              strategic business partners for automation, sales and service.
            </p>
          </Reveal>
        </div>
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-2 border-dashed border-accent"
        />
        <div className="absolute right-20 bottom-0 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <StaggerItem key={p.name}>
              <div className={`h-full rounded-3xl border-t-4 p-8 shadow-soft ${
                i === 1 ? "border-accent bg-accent/5" : "border-primary bg-card"
              }`}>
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <h3 className="mt-3 text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Quote band */}
      <section className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-center text-2xl md:text-4xl font-display font-semibold text-balance">
            "Every cobot Velioum deploys is powered by a layer of intelligent technology —
            <span className="text-primary"> adaptive, connected and measurable.</span>"
          </p>
        </Reveal>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-12">
            Concept to commissioning.
          </h2>
        </Reveal>
        <StaggerGroup className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title} className="bg-card">
              <motion.div
                whileHover={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                className="group h-full p-8 transition-colors"
              >
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-accent-foreground/90">
                  {f.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-2xl md:text-3xl font-bold">
                <span className="font-display tracking-tight">
                  veli<span className="text-accent">o</span>um
                </span>
                <span className="text-accent">×</span>
                <span className="inline-flex items-center gap-3">
                  <img
                    src="/images/partners/franka-robotics-mark.svg"
                    alt=""
                    aria-hidden
                    className="h-9 w-9 md:h-10 md:w-10"
                    draggable={false}
                  />
                  <span className="font-display uppercase tracking-wide">Franka Robotics</span>
                </span>
              </h3>
              <p className="mt-2 text-muted-foreground">Authorised partner for design, deployment and lifecycle service.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Start a project →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
