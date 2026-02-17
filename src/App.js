import React from "react";
import Home from "./composants/Home";

export default function App() {
  return (
    // Fond global sombre pour contraster avec le jaune intense
    <div className="bg-[#0f0e0a] min-h-screen font-sans selection:bg-black selection:text-[#ffcc00]">
      <Home />
    </div>
  );
}