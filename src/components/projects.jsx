const Projects = ({ page, setPage }) => {
  return (
    <section
      className={`
        absolute inset-0 text-white overflow-y-auto
        ${page === "projects" ? "z-20" : "z-0"}
        bg-[linear-gradient(to_bottom,#071512_0%,#430B19_50%,#810020_100%)]
        transition-transform duration-700
        ${page === "projects"
          ? "translate-x-0"
          : page === "stats"
          ? "translate-x-full"
          : "translate-y-full"}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-6 grid grid-cols-3 items-center text-xs sm:text-sm">
        <button onClick={() => setPage("stats")} className="text-left hover:text-gray-300">
          ← CHARACTER STATS
        </button>
        <h3 className="text-center text-lg sm:text-2xl">PROJECTS</h3>
        <button onClick={() => setPage("home")} className="text-right hover:text-gray-300">
          HOME →
        </button>
      </div>

      <div className="w-11/12 mx-auto border-t border-white/30 2xl:pt-32" />

      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-8 space-y-6">
        {[
          {
            title: "INVENTORY MANAGEMENT SYSTEM APP",
            desc:
              "Designed and developed a commissioned Inventory Management System using React, Vite, Tailwind, MongoDB, and Electron.",
            link: "https://github.com/Ruzte/Inventory-System",
          },
          {
            title: "FINANCE TRACKER APP",
            desc:
              "Developed on a whim to track expenses and budgeting, it does not look appealing but it works.",
            link: "https://github.com/Ruzte/finance-tracker",
          },
        ].map((p, i) => (
          <div key={i} className="bg-[#373535]/25 p-6 rounded">
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-sm opacity-80 mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="inline-block px-5 py-2 bg-white/10 hover:bg-white/20 rounded">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;