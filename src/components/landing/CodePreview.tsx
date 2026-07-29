import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";

const code = `def authenticate(user):
    clearance = "operator"

    if user.role == clearance:
        print("ACCESS GRANTED")

    return True


authenticate("Mission")
`;

export default function CodePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, rotate: 4 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[650px] overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0b1220] shadow-[0_0_60px_rgba(0,229,255,.12)]"
    >
      <Editor
        height="420px"
        defaultLanguage="python"
        value={code}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 16,
          fontFamily: "JetBrains Mono",
          scrollBeyondLastLine: false,
          lineNumbers: "on",
          folding: false,
          wordWrap: "on",
        }}
      />
    </motion.div>
  );
}