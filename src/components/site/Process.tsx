export function Process() {
  const steps = [
    {
      n: "01",
      title: "Free 30-min audit",
      desc: "I look at your site live, show you 3 things hurting your rankings, and tell you honestly if SEO is even right for you. No pitch.",
      time: "Day 1",
    },
    {
      n: "02",
      title: "Strategy & keyword map",
      desc: "I deliver a full plan: which keywords we'll target, what content we'll write, what fixes come first, and what success looks like.",
      time: "Week 1",
    },
    {
      n: "03",
      title: "Build the foundation",
      desc: "Fix every technical issue, optimize all existing pages, set up tracking. Your site is now SEO-ready.",
      time: "Weeks 2–4",
    },
    {
      n: "04",
      title: "Rank & report",
      desc: "Publish content, build links, track keywords climbing. Monthly Loom video showing exactly what moved.",
      time: "Month 2+",
    },
  ];

  return (
    <section id="process" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">How it works</p>
          <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">
            From "Where am I on Google?"<br />to <span className="bg-primary px-2">page one.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/0">
                <span className="rounded-full bg-foreground px-2 py-1 text-background">{s.time}</span>
              </p>
              <p className="mt-4 font-display text-5xl font-black text-muted-foreground/30">{s.n}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
