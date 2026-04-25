import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-foreground bg-foreground p-10 text-background shadow-brutal md:p-16">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30"
            style={{ background: "var(--color-primary)" }}
          />
          <div className="relative grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-foreground">
              <ShieldCheck className="h-12 w-12" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">My promise to you</p>
              <h2 className="mt-2 font-display text-3xl font-black md:text-5xl">
                If you don't rank, you don't pay.
              </h2>
              <p className="mt-4 max-w-2xl text-background/80">
                If after 90 days I haven't moved at least 5 of your target keywords into the top 30 of Google, I refund your last month and keep working until I do. In writing. Every client. No exceptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
