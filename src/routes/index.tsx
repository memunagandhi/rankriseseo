import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { PainSection } from "@/components/site/PainSection";
import { Offer } from "@/components/site/Offer";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Guarantee } from "@/components/site/Guarantee";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RankRise — SEO that gets you on page 1 of Google in 90 days" },
      {
        name: "description",
        content:
          "Freelance SEO for small businesses and creators. Fixed-price plans, plain-English reports, money-back guarantee. Get a free SEO audit.",
      },
      { property: "og:title", content: "RankRise — SEO that ranks. Or you don't pay." },
      {
        property: "og:description",
        content:
          "Honest, fixed-price SEO services. No retainers. No fluff. 90-day ranking guarantee.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <PainSection />
        <Offer />
        <Process />
        <Pricing />
        <Guarantee />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
