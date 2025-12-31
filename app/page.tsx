"use client";

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-28">

      <Navigation />

      <section id="home">
        <HeroSection />
      </section>

      <LogoMarquee />

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="articles">
        <ArticlesSection />
      </section>

      <Footer />

    </main>
  )
}
