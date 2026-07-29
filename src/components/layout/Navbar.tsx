import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/10 bg-[#040816]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="flex items-center gap-3">

          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2">
            <Shield className="h-6 w-6 text-cyan-400" />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-wider">
              TYPE<span className="text-cyan-400">PY</span>
            </h1>

            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/70">
              Cyber Operations
            </p>
          </div>

        </div>

        <div className="flex gap-4">

          <button className="rounded-lg px-5 py-2 text-slate-300 transition hover:text-cyan-300">
            Login
          </button>

          <button className="rounded-lg border border-cyan-400 bg-cyan-500/20 px-5 py-2 font-semibold text-cyan-300 transition hover:bg-cyan-500/30">
            Initialize Training
          </button>

        </div>
      </div>
    </nav>
  );
}