interface Props {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0b1220] p-8 transition hover:-translate-y-1 hover:border-cyan-400">
      <h3 className="mb-3 text-xl font-semibold text-cyan-400">
        {title}
      </h3>

      <p className="text-slate-400">
        {description}
      </p>
    </div>
  );
}