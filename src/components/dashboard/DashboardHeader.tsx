export default function DashboardHeader() {
  return (
    <div className="mb-12">
      <p className="uppercase tracking-[0.4em] text-cyan-400">
        Operator Dashboard
      </p>

      <h1 className="mt-4 text-5xl font-black">
        Welcome back,
        <span className="text-cyan-400"> Mission</span>
      </h1>

      <p className="mt-4 max-w-2xl text-slate-400">
        Continue your cybersecurity training and improve your Python skills
        through interactive missions.
      </p>
    </div>
  );
}