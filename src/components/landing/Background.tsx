import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 bg-[#030712]" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500 blur-[180px]"
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,229,255,.25) 1px,transparent 1px),
          linear-gradient(90deg,rgba(0,229,255,.25) 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

    </div>
  );
}