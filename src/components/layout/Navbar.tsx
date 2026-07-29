import { Shield } from "lucide-react";

export default function Navbar(){

return(

<nav className="sticky top-0 z-50 border-b border-cyan-500/10 backdrop-blur-xl">

<div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

<div className="flex items-center gap-4">

<div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3">

<Shield className="h-6 w-6 text-cyan-400"/>

</div>

<div>

<h1 className="text-2xl font-black tracking-wider">

TYPE<span className="text-cyan-400">PY</span>

</h1>

<p className="text-xs uppercase tracking-[0.35em] text-cyan-500">

CYBER ACADEMY

</p>

</div>

</div>

<div className="hidden gap-4 md:flex">

<button className="rounded-lg px-5 py-2 text-slate-300 hover:text-cyan-400">

Login

</button>

<button className="rounded-xl bg-cyan-500 px-6 py-2 font-bold text-black hover:bg-cyan-400">

Initialize

</button>

</div>

</div>

</nav>

)

}