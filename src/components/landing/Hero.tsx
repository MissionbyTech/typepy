import CodePreview from "./CodePreview";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between gap-20 px-8">

      <div className="max-w-xl">

        <p className="mb-4 text-cyan-400 uppercase tracking-[0.35em]">
          CYBER OPERATIONS TRAINING PLATFORM
        </p>

        <h1 className="mb-6 text-6xl font-black leading-tight">

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

          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400">
            INITIALIZE TRAINING
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 hover:border-cyan-400">
            VIEW GITHUB
          </button>

        </div>

      </div>

      <CodePreview />

    </section>
  );
}