export default function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e922,transparent_60%)]" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(#0ea5e922 1px, transparent 1px),
          linear-gradient(90deg,#0ea5e922 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
    </>
  );
}