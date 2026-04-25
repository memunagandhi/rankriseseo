export function Marquee() {
  const items = [
    "WordPress",
    "Shopify",
    "Webflow",
    "Squarespace",
    "Wix",
    "Framer",
    "Ghost",
    "Custom Sites",
  ];
  return (
    <section className="overflow-hidden border-b border-border bg-foreground py-6 text-background">
      <div className="flex">
        <div className="marquee flex shrink-0 items-center gap-12 px-6 font-mono text-sm uppercase tracking-widest">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              {item}
              <span className="text-primary">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
