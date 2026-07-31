import Background from "../components/landing/Background";
import Navbar from "../components/layout/Navbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import XPCard from "../components/dashboard/XPCard";
import ProgressCard from "../components/dashboard/ProgressCard";

export default function Dashboard() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040816] text-white">

      {/* Uncomment one by one */}

      <Background /> 

      <div className="relative z-10">

        <Navbar />

        <section className="mx-auto max-w-7xl px-8 py-20">

          <DashboardHeader />

          <div className="grid gap-8 md:grid-cols-2">
            <XPCard />
            <ProgressCard />
          </div>

        </section>

      </div>

    </main>
  );
}