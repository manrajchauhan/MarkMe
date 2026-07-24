"use client";

import { LandingHeader } from "../components/landing/LandingHeader";
import { HeroSection } from "../components/landing/HeroSection";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { CallToActionSection } from "../components/landing/CallToActionSection";
import { LandingFooter } from "../components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <main className="landing-shell">
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CallToActionSection />
      <LandingFooter />
    </main>
  );
}
