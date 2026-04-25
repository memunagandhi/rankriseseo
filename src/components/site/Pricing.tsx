import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter Audit",
      price: "$297",
      sub: "one-time",
      tag: "Perfect to start",
      featured: false,
      desc: "You get a full SEO action plan you can give to anyone — including me.",
      features: [
        "Full technical SEO audit",
        "30+ keyword opportunities",
        "Top 5 fixes prioritized",
        "60-min strategy call",
        "Loom walkthrough video",
      ],
      cta: "Get the audit",
    },
    {
      name: "Growth Engine",
      price: "$1,200",
      sub: "/month",
      tag: "Most popular",
      featured: true,
      desc: "Done-for-you SEO. I handle everything — you watch rankings climb.",
      features: [
        "Everything in Audit",
        "All on-page fixes implemented",
        "4 SEO articles per month",
        "10+ quality backlinks/mo",
        "Live ranking dashboard",
        "Monthly report + Loom",
        "WhatsApp access",
      ],
      cta: "Book a call",
    },
    {
      name: "Local Domination",
      price: "$700",
      sub: "/month",
      tag: "For local businesses",
      featured: false,
      desc: "Rank for \"[service] near me\" and own your local map.",
      features: [
        "Google Business Profile setup",
        "Local citations + directories",
        "2 location-targeted articles",
        "Review generation system",
        "Map pack tracking",
      ],
      cta: "Dominate locally",
    },
  ];

  return (
    <section id="pricing" className="border-b border-border bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">
            Honest prices. No retainers.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cancel any time. If you don't see ranking improvements in 90 days, I'll work for free until you do.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border-2 border-foreground p-8 ${
                p.featured ? "bg-foreground text-background shadow-brutal lg:-mt-4 lg:mb-4" : "bg-background"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-foreground">
                  <Sparkles className="h-3 w-3" /> {p.tag}
                </div>
              )}
              {!p.featured && (
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
              )}
              <h3 className="mt-3 font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-black">{p.price}</span>
                <span className={p.featured ? "text-background/60" : "text-muted-foreground"}>{p.sub}</span>
              </div>
              <p className={`mt-3 text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <ul className="mt-6 space-y-3 border-t border-border/30 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-primary" : "text-foreground"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition hover:scale-[1.02] ${
                  p.featured
                    ? "bg-primary text-foreground"
                    : "border-2 border-foreground bg-background hover:bg-foreground hover:text-background"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
