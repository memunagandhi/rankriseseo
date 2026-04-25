import heroImg from "@/assets/hero-growth.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-3 py-1 text-xs font-mono uppercase tracking-wider">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Now booking — 3 spots left in May
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            More Google traffic in <span className="bg-primary px-2">90 days</span> — or you don't pay.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            I help small businesses and creators rank on page 1 of Google for the keywords their customers actually search. Fixed price. Clear deliverables. No agency fluff.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-semibold text-background transition hover:scale-[1.02]"
            >
              Get my free SEO audit
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-foreground bg-background px-8 text-base font-semibold transition hover:bg-foreground hover:text-background"
            >
              See pricing
            </a>
          </div>

          <ul className="mt-8 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {[
              "100% money-back guarantee",
              "No long contracts",
              "Reply within 12 hours",
              "Reports you actually understand",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-foreground" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-foreground shadow-brutal">
            <img
              src={heroImg}
              alt="SEO growth illustration"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rotate-[-4deg] rounded-xl border-2 border-foreground bg-background p-4 shadow-brutal-sm">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Avg. result</p>
            <p className="font-display text-3xl font-black">+187%</p>
            <p className="text-xs text-muted-foreground">organic traffic in 90 days</p>
          </div>
          <div className="absolute -right-4 top-8 rotate-[6deg] rounded-xl border-2 border-foreground bg-primary p-4 shadow-brutal-sm">
            <p className="font-mono text-xs uppercase tracking-wider">Page 1</p>
            <p className="font-display text-2xl font-black">in 87 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
