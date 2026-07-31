import { useState } from "react";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState<"landing" | "dashboard">("landing");

  if (page === "dashboard") {
    return <Dashboard />;
  }

  return <Landing onStart={() => setPage("dashboard")} />;
}