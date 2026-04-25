import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground">
            <span className="font-display text-lg font-black text-primary">R</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight">RankRise<span className="text-primary">.</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#offer" className="hover:text-muted-foreground">Offer</a>
          <a href="#process" className="hover:text-muted-foreground">Process</a>
          <a href="#pricing" className="hover:text-muted-foreground">Pricing</a>
          <a href="#faq" className="hover:text-muted-foreground">FAQ</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:scale-[1.02]"
        >
          Free SEO Audit
        </a>
      </div>
    </header>
  );
}
