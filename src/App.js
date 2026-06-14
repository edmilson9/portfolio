import React from "react";
import Home from "./composants/Home";
import Profil from "./composants/Profil"
import Projets from "./composants/Projets"
import Footer from "./composants/Footer"
export default function App() {
  return (
    // Fond global sombre pour contraster avec le jaune intense
    <div className="bg-[#0f0e0a] min-h-screen font-sans selection:bg-black selection:text-[#ffcc00]">
      <Home />
      <Profil/>
      <Projets/>
      <Footer/>
    </div>
  );
}