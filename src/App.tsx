export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">TypePy</h1>

        <div className="flex gap-4">
          <button className="text-slate-300 hover:text-white">
            Login
          </button>

          <button className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold hover:bg-cyan-400">
            Start Learning
          </button>
        </div>
      </nav>

      <main className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">
        <h2 className="mb-6 text-6xl font-extrabold">
          Learn Python by Typing Real Code
        </h2>

        <p className="mb-10 max-w-2xl text-xl text-slate-400">
          Improve your typing speed while mastering Python with real coding
          exercises, achievements, and interactive lessons.
        </p>

        <div className="flex gap-4">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold hover:bg-cyan-400">
            Start Learning
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 text-lg hover:bg-slate-900">
            View GitHub
          </button>
        </div>
      </main>
    </div>
  );
}