export function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground">
            <span className="font-display text-lg font-black text-primary">R</span>
          </div>
          <span className="font-display text-lg font-bold">RankRise<span className="text-primary">.</span></span>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} — Built to rank. Built to convert.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="#offer" className="hover:text-foreground">Offer</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
