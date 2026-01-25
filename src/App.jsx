import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/hero";
import CharacterStats from "./components/characterstats";
import Projects from "./components/projects";


function App() {
  const [page, setPage] = useState("home");

  return (
      <div className="relative overflow-hidden h-screen w-screen">
        <Hero page={page} setPage={setPage} />
        <CharacterStats page={page} setPage={setPage} />
        <Projects page={page} setPage={setPage} />
        <Analytics />
      </div> 
  );
  
}

export default App;