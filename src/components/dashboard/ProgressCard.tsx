export default function ProgressCard() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur">
      <p className="text-sm uppercase tracking-widest text-cyan-400">
        Today's Objective
      </p>

      <h3 className="mt-5 text-xl font-semibold">
        Complete Variables Mission
      </h3>

      <p className="mt-3 text-slate-400">
        Finish your first Python mission to unlock new operations.
      </p>

      <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400">
        Continue Training
      </button>
    </div>
  );
}