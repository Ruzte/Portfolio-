import { useState } from "react";
import Hero from "./components/hero";
import CharacterStats from "./components/characterstats";
import Projects from "./components/projects";
import MobileDetector from "./components/mobiledetector";

function App() {
  const [page, setPage] = useState("home");

  return (
    <MobileDetector>
      <div className="relative overflow-hidden h-screen w-screen">
        <Hero page={page} setPage={setPage} />
        <CharacterStats page={page} setPage={setPage} />
        <Projects page={page} setPage={setPage} />
      </div>
    </MobileDetector>
  );
}

export default App;