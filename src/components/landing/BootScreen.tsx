import { useEffect, useState } from "react";

interface BootScreenProps {
  onFinish: () => void;
}

export default function BootScreen({ onFinish }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 700);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712] text-cyan-400">
      <div className="w-full max-w-lg px-8 font-mono">
        <h1 className="mb-6 text-3xl font-bold">TYPEPY</h1>

        <p className="mb-2">Initializing Cyber Operations...</p>

        <div className="h-3 overflow-hidden rounded bg-slate-800">
          <div
            className="h-full bg-cyan-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-sm">{progress}%</p>
      </div>
    </div>
  );
}