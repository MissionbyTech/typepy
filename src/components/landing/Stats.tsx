export default function Stats() {
  const stats = [
    { value: "100+", label: "Python Missions" },
    { value: "XP", label: "Progress System" },
    { value: "24/7", label: "Practice" },
  ];

  return (
    <section className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 px-8 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center backdrop-blur"
        >
          <h2 className="text-4xl font-bold text-cyan-400">{item.value}</h2>
          <p className="mt-2 text-slate-400">{item.label}</p>
        </div>
      ))}
    </section>
  );
}