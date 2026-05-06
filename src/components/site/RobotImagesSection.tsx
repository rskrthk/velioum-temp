import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

const robots = [
  { src: "/images/robots/robot-1.svg", alt: "Robot head illustration" },
  { src: "/images/robots/robot-2.svg", alt: "Industrial robotic arm illustration" },
  { src: "/images/robots/robot-3.svg", alt: "Humanoid robot illustration" },
];

export function RobotImagesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28">
      <div className="grid gap-8 md:grid-cols-2 md:items-end mb-12">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Robotics
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Visual snapshots
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-balance">
              Built for humans. Powered by robots.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-lg text-muted-foreground">
            A quick look at the kind of automation experiences we design—operator friendly, production ready,
            and engineered for measurable throughput.
          </p>
        </Reveal>
      </div>

      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {robots.map((r) => (
          <StaggerItem key={r.src}>
            <motion.figure
              whileHover={{ y: -6, rotate: -0.35 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <img
                  src={r.src}
                  alt={r.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between px-7 py-6">
                <div className="text-sm font-semibold">{r.alt}</div>
                <div className="text-accent transition-transform duration-300 group-hover:translate-x-1">→</div>
              </div>
            </motion.figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
