import { createFileRoute } from "@tanstack/react-router";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Velioum" },
      { name: "description", content: "Software development, cloud, IT security, enterprise data and emerging tech services from Velioum." },
    ],
  }),
});

const groups = [
  {
    title: "Emerging Technologies",
    tagline: "The intelligence behind smart manufacturing.",
    items: [
      { name: "AI & Machine Learning", points: ["Computer vision and defect detection", "Adaptive robot motion and control", "Predictive maintenance"] },
      { name: "IoT Solutions", points: ["Real-time factory floor monitoring", "Device and sensor integration", "Remote control and dashboards"] },
      { name: "AR / VR Experiences", points: ["Operator training before deployment", "Digital twin simulation", "Product design and demos"] },
      { name: "Automation & RPA", points: ["Factory to ERP / CRM data flow", "Elimination of manual data entry", "Workflow automation across systems"] },
    ],
  },
  {
    title: "Software Development & Cloud",
    tagline: "The technical foundation powering every deployment.",
    items: [
      { name: "Custom Software", points: ["Operator dashboards", "Web and mobile applications", "API and systems integration"] },
      { name: "SaaS Products", points: ["Multi-site management platforms", "Subscription-based services", "Serverless, event-driven apps"] },
      { name: "Cloud Migration", points: ["AWS, Azure, Google Cloud", "DevOps and CI/CD automation", "24/7 monitoring and auto-scaling"] },
    ],
  },
  {
    title: "IT Security",
    tagline: "Enterprise-grade security, built in from day one.",
    items: [
      { name: "Data Encryption", points: ["End-to-end encryption", "Secure data storage", "Protection in transit and at rest"] },
      { name: "Identity & Access", points: ["Multi-factor authentication", "Role-based controls", "SSO across factory systems"] },
      { name: "Secure APIs", points: ["SSL pinning", "Secure API gateways", "Authenticated data exchange"] },
    ],
  },
  {
    title: "Enterprise & Data Solutions",
    tagline: "From digital operations to boardroom decisions.",
    items: [
      { name: "ERP & CRM", points: ["SAP, Salesforce, MS Dynamics", "Business process automation", "Enterprise mobility solutions"] },
      { name: "Data & Analytics", points: ["Data engineering and warehousing", "Big data pipelines", "Predictive analytics"] },
    ],
  },
  {
    title: "Web & Digital Services",
    tagline: "Building your digital presence, end to end.",
    items: [
      { name: "Web & Commerce", points: ["Responsive websites", "Shopify, Magento, WooCommerce", "Checkout and payment integration"] },
      { name: "UI/UX Design", points: ["User research and personas", "Interactive prototypes", "Dashboards and operator interfaces"] },
      { name: "SEO & Marketing", points: ["Technical SEO", "Google Ads & LinkedIn", "Content strategy"] },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-4xl text-5xl md:text-7xl font-bold text-balance">
              One partner for the full <span className="text-primary">digital stack</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From cobotics on the factory floor to cloud platforms running global operations,
              Velioum designs, builds and runs the systems that move your business forward.
            </p>
          </Reveal>
        </div>
      </section>

      {groups.map((g, idx) => (
        <section key={g.title} className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <Reveal>
                <div className="text-sm font-mono text-accent">0{idx + 1}</div>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-balance">{g.title}</h2>
                <p className="mt-3 text-muted-foreground">{g.tagline}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <StaggerGroup className="grid gap-5 sm:grid-cols-2">
                {g.items.map((it) => (
                  <StaggerItem key={it.name}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft"
                    >
                      <h3 className="text-lg font-bold">{it.name}</h3>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {it.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
