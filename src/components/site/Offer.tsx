import { Search, FileText, Link2, BarChart3 } from "lucide-react";

export function Offer() {
  const services = [
    {
      icon: Search,
      title: "Keyword Strategy",
      desc: "I find the exact phrases your customers Google before buying — not vanity terms with no intent.",
      deliverables: ["50+ ranked keywords", "Buyer-intent mapping", "Competitor gap analysis"],
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      desc: "Every page optimized: titles, meta, headings, internal links, schema, page speed, mobile.",
      deliverables: ["Full technical audit", "Page-by-page fixes", "Schema + structured data"],
    },
    {
      icon: Link2,
      title: "Content & Links",
      desc: "Articles written to rank AND convert. Backlinks from sites that actually move the needle.",
      deliverables: ["4 SEO articles/mo", "Outreach to 50+ sites", "Niche-relevant links only"],
    },
    {
      icon: BarChart3,
      title: "Reporting You Get",
      desc: "Monthly Loom + dashboard. Rankings, traffic, leads — explained like you're a human.",
      deliverables: ["Live ranking dashboard", "Monthly video walkthrough", "Direct WhatsApp access"],
    },
  ];

  return (
    <section id="offer" className="border-b border-border bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">What you get</p>
            <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">
              Four things. Done right.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            No 47-tab spreadsheets. No "we're working on it" emails. Just the work that moves rankings.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border-2 border-foreground bg-background p-8 transition hover:shadow-brutal"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <s.icon className="h-6 w-6 text-foreground" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
