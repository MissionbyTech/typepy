export default function CodePreview() {
  return (
    <div className="w-[560px] overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#09111d] shadow-2xl shadow-cyan-500/10">

      <div className="flex items-center gap-2 border-b border-cyan-500/10 bg-black/30 px-5 py-3">

        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-slate-400">
          mission_01.py
        </span>

      </div>

      <pre className="overflow-x-auto p-6 text-[15px] leading-8 text-slate-300">
{`def authenticate(user):

    clearance = "operator"

    if user.role == clearance:
        print("ACCESS GRANTED")

    return True


authenticate("Mission")`}
      </pre>

    </div>
  );
}