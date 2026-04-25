import { X, Check } from "lucide-react";

export function PainSection() {
  const pains = [
    "You built a website but nobody finds it on Google",
    "You're paying for ads and the second you stop, leads stop too",
    'Agencies quoted you $3,000+/month for "SEO" with no clear plan',
    "You hired someone who sent confusing reports and zero results",
    "You don't know which keywords actually bring real customers",
  ];

  const fixes = [
    "A clear keyword map of what your buyers actually search",
    "On-page SEO done right — titles, structure, speed, schema",
    "Content that ranks AND convinces (not just AI fluff)",
    "Real backlinks from real sites in your niche",
    "Plain-English monthly reports — what we did, what changed, what's next",
  ];

  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The problem</p>
          <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">
            SEO shouldn't feel like<br />
            <span className="italic text-muted-foreground">a black box.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-foreground bg-card p-8">
            <h3 className="font-display text-2xl font-bold">If this sounds familiar...</h3>
            <ul className="mt-6 space-y-4">
              {pains.map((p) => (
                <li key={p} className="flex gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-foreground bg-foreground p-8 text-background shadow-brutal">
            <h3 className="font-display text-2xl font-bold">Here's what I do instead</h3>
            <ul className="mt-6 space-y-4">
              {fixes.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
