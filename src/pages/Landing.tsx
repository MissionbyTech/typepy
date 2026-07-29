
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Background from "../components/landing/Background";

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040816] text-white">
      <Background />

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}