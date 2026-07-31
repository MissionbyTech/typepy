export default function XPCard() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur">
      <p className="text-sm uppercase tracking-widest text-cyan-400">
        Operator Rank
      </p>

      <h2 className="mt-3 text-3xl font-bold">Cadet</h2>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-700">
        <div className="h-full w-1/4 rounded-full bg-cyan-400" />
      </div>

      <div className="mt-2 flex justify-between text-sm text-slate-400">
        <span>25 XP</span>
        <span>100 XP</span>
      </div>
    </div>
  );
}