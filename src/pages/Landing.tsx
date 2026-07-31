
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/landing/Hero";
import Background from "../components/landing/Background";
import BootScreen from "../components/landing/BootScreen";
import Stats from "../components/landing/Stats";
import FeatureCard from "../components/landing/FeatureCard";
interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <BootScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040816] text-white">
      <Background />

      <div className="relative z-10">
        <Navbar />

        <Hero onStart={onStart} />

        <Stats />

        <section className="mx-auto my-24 grid max-w-6xl grid-cols-1 gap-6 px-8 md:grid-cols-3">
          <FeatureCard
            title="Interactive Missions"
            description="Learn Python by typing real code."
          />

          <FeatureCard
            title="Cyber Challenges"
            description="Security-inspired exercises and scenarios."
          />

          <FeatureCard
            title="XP Progression"
            description="Track your skills and unlock new missions."
          />
        </section>

        <Footer />
      </div>
    </main>
  );
}