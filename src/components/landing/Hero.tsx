import { motion } from "framer-motion";
import CodePreview from "./CodePreview";

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
   <section className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-between gap-16 px-8 py-20 lg:flex-row">

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-xl"
>

        <p className="mb-4 text-cyan-400 uppercase tracking-[0.35em]">
          CYBER OPERATIONS TRAINING PLATFORM
        </p>

        <h1 className="mb-6 text-5xl lg:text-7xl font-black leading-tight">

          Learn Python

          <span className="block text-cyan-400">
            Like A Security Engineer
          </span>

        </h1>

        <p className="mb-10 text-lg leading-8 text-slate-400">

          Master Python through interactive cybersecurity-inspired missions,
          real code typing challenges, XP progression and operator rankings.

        </p>

        <div className="flex gap-4">

        <button
  onClick={() => {
    console.log("Button clicked");
    onStart();
  }}
  className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,.45)]"
>
  INITIALIZE TRAINING
</button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/10">
          VIEW GITHUB
        </button>

        </div>

        </motion.div>

      <CodePreview />

    </section>
  );
}