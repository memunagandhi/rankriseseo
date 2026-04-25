import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "I've never heard of you. Why should I trust you?",
    a: "Fair question. I'm new to freelancing — which is exactly why I price below agencies, work harder for every client, and offer a money-back guarantee no agency would dare offer. I studied SEO obsessively for 2+ years (Ahrefs Academy, Backlinko, real case studies) and I'd rather over-deliver for 5 happy clients than overcharge 50.",
  },
  {
    q: "How long until I see results?",
    a: "Technical fixes show up in 2–4 weeks. Real ranking movement on competitive keywords takes 60–120 days. SEO is compound interest — slow at first, then exponential. If you need leads tomorrow, run ads. If you want a traffic source that works in your sleep for years, that's SEO.",
  },
  {
    q: "What if my niche is super competitive?",
    a: "We start with low-competition, high-intent keywords nobody's targeting yet. You get quick wins while we build authority for the bigger ones. I'll tell you upfront on the audit call if your niche is realistic on your budget.",
  },
  {
    q: "Do I need to write the content myself?",
    a: "No. I write all SEO content (or work with vetted writers in your niche). You only review and approve. If you want to write yourself, I provide briefs and edit for SEO.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts. No cancellation fees. Pay month to month. If I'm not delivering, fire me — but I plan to make that the hardest decision you don't make.",
  },
  {
    q: "What if SEO doesn't work for my business?",
    a: "On the free audit call I'll tell you honestly. Some businesses (brand new products, super hyperlocal services with low search volume, B2B with tiny audiences) are better served by ads or outreach. I'd rather lose a sale than take your money for nothing.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-border bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Honest answers</p>
          <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">
            What you're really thinking.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border-2 border-foreground bg-background"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-display text-lg font-bold md:text-xl">{faq.q}</span>
                {open === i ? (
                  <Minus className="h-5 w-5 shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="border-t border-border px-6 pb-6 pt-4 text-muted-foreground animate-fade-up">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
