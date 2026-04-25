import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden border-b border-border bg-foreground py-24 text-background">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Free SEO audit</p>
          <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">
            Let's see if I can actually help you.
          </h2>
          <p className="mt-6 max-w-md text-background/70">
            Tell me about your site. Within 24 hours I'll send back a 5-minute Loom video with 3 specific things I'd fix first — free, no pitch, no follow-up spam.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:hello@rankrise.co" className="flex items-center gap-3 text-sm hover:text-primary">
              <Mail className="h-4 w-4" /> hello@rankrise.co
            </a>
            <a href="#" className="flex items-center gap-3 text-sm hover:text-primary">
              <MessageCircle className="h-4 w-4" /> Reply within 12 hours
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-2xl border-2 border-primary bg-background p-8 text-foreground shadow-brutal"
        >
          {submitted ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <ArrowRight className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">Got it. Talk soon.</h3>
              <p className="mt-2 text-muted-foreground">
                Check your inbox in the next 24 hours for your custom Loom audit.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl font-bold">Get your free audit</h3>
              <p className="mt-1 text-sm text-muted-foreground">Takes 60 seconds.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider">Your name</label>
                  <input
                    required
                    className="mt-1 h-12 w-full rounded-lg border-2 border-foreground bg-background px-4 outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 h-12 w-full rounded-lg border-2 border-foreground bg-background px-4 outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider">Your website URL</label>
                  <input
                    type="url"
                    required
                    placeholder="https://"
                    className="mt-1 h-12 w-full rounded-lg border-2 border-foreground bg-background px-4 outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider">What do you sell? (1 sentence)</label>
                  <textarea
                    required
                    rows={3}
                    className="mt-1 w-full rounded-lg border-2 border-foreground bg-background p-4 outline-none focus:border-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-foreground text-base font-semibold text-background transition hover:scale-[1.01]"
              >
                Send me my free audit
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No spam. No selling your email. Ever.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
