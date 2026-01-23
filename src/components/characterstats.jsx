import profile from "../assets/profile.png";
import { Github, Linkedin, Mail, Phone, Facebook } from "lucide-react";
import citLogo from "../assets/cit-logo.png";
import getmilkLogo from "../assets/getmilk-logo.png";
import WalterLogo from "../assets/Intern.png";
import AllianceLogo from "../assets/Intern-2.png";



const CharacterStats = ({ page, setPage }) => {
  const calculateLevel = () => {
    const birthDate = new Date("2002-08-28");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const calculateXPProgress = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // August is month 7 (0-indexed)
    const birthdayThisYear = new Date(currentYear, 7, 28);
    const hasBirthdayPassed = today >= birthdayThisYear;

    const lastBirthday = new Date(
      hasBirthdayPassed ? currentYear : currentYear - 1,
      7,
      28
    );

    const nextBirthday = new Date(
      hasBirthdayPassed ? currentYear + 1 : currentYear,
      7,
      28
    );

    const total = nextBirthday - lastBirthday;
    const elapsed = today - lastBirthday;

    return Math.min(100, Math.max(0, (elapsed / total) * 100));
  };

  const level = calculateLevel();
  const xp = calculateXPProgress();

  return (
    <section
      className={`
        absolute inset-0 text-white overflow-y-auto
        ${page === "stats" ? "z-20" : "z-0"}
        bg-[linear-gradient(to_bottom,#071512_0%,#430B19_50%,#810020_100%)]
        transition-transform duration-700 ease-in-out
        ${
          page === "stats"
            ? "translate-x-0 translate-y-0"
            : page === "projects"
            ? "-translate-x-full"
            : "translate-y-full"
        }
      `}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-6 grid grid-cols-3 items-center text-xs sm:text-sm tracking-widest">
        <button
          onClick={() => setPage("home")}
          className="text-left hover:text-gray-300"
        >
          ⬑ HOME
        </button>

        <h3 className="text-center text-lg sm:text-2xl">
          CHARACTER STATS
        </h3>

        <button
          onClick={() => setPage("projects")}
          className="text-right hover:text-gray-300"
        >
          COMPLETED QUESTS  →
        </button>
      </div>

      <div className="w-11/12 sm:w-3/4 border-t border-white/30 mx-auto" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-10 2xl:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 2xl:gap-5">

          {/* Column 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover mb-4"
            />

            {/* EXP BAR */}
            <div className="w-3/4 max-w-xs">
              <div className="flex justify-between text-xs opacity-70 mb-1">
                <span>EXP</span>
                <span>{Math.floor(xp)}%</span>
              </div>

              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                  style={{ width: `${xp}%` }}
                />
              </div>
            </div>

            <span className="text-xs sm:text-sm uppercase opacity-80 pt-2">
              Lvl {level} Web Developer
            </span>

            <div className="mt-4 text-xs sm:text-sm opacity-80">
              <p className=" opacity-70 ">Faction</p>
              <p className="font-semibold">
                <a 
                  href="https://www.linkedin.com/company/getmilk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-blue-400 transition-colors"
                >
                  Getmilk Pty Ltd
                </a>
              </p>
            </div>
            
            <div>
              <h4 className=" opacity-70 mb-1 mt-4 pt-2 text-xs sm:text-sm">Summon Me</h4>
              <div className="flex items-center gap-4 ">
                <a href="https://github.com/Ruzte" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ruzte-temblor-073a952b2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:ruztejames.temblor@gmail.com" rel="noopener noreferrer" className="hover:text-red-300 transition">
                  <Mail size={20} />
                </a>
                <a href="tel:09683252543" className="hover:text-green-300 transition">
                  <Phone size={20} />
                </a>
                <a href="https://www.facebook.com/RJ.Temblor28" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 text-sm">
            <div className="space-y-2">
              <div><span className="opacity-70">Name:</span> Ruzte James Temblor</div>
              <div><span className="opacity-70">Level:</span> {level}</div>
              <div><span className="opacity-70">Sex:</span> Male</div>
              <div><span className="opacity-70">Race:</span> Filipino</div>
              <div><span className="opacity-70">Blood Type:</span> A+</div>
              <div><span className="opacity-70">Role:</span> Web Developer</div>
            </div>

            <div>
              <h4 className="tracking-widest opacity-70 mb-1">Lore:</h4>
              {<p className="opacity-80 leading-relaxed">
                Graduated with a B.S. in Computer Engineering, Ruzte searched far and wide
                for new experiences and applications of his skills. With time, he will
                become more experienced and knowledgeable ...who knows how far he can go.
              </p>}
            </div>

            <div>
            <h4 className="tracking-widest opacity-70 mb-1 mt-10">Abilities:</h4>
            <div className="flex flex-wrap gap-2 pt-2">
              {["JavaScript", "React", "MongoDB", "Tailwind", "Electron", "Wordpress", "CSS", "Yootheme", ].map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/10 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2 h-full">

            {/* Card 1 - Achievements */}
            <div className="bg-[#373535]/25 p-6 space-y-3 flex-1">
              <h4 className="text-lg font-semibold">
                ACHIEVEMENTS UNLOCKED
              </h4>

              {[
                {
                  img: citLogo,
                  title: "You Made It",
                  desc: "Graduated May 2025 as a Computer Engineer",
                },
                {
                  img: getmilkLogo,
                  title: "Getting Started",
                  desc: "Got hired on September 2025",
                },
              ].map((a, i) => (
                <div key={i} className="group relative flex items-center gap-2">
                  <img src={a.img} alt={a.title} className="w-12 h-12 rounded-md" />
                  <span className="italic text-sm opacity-80">
                    {a.title}
                  </span>

                  <div className="absolute left-0 top-full mt-2 w-max max-w-xs bg-black/80 text-white text-xs px-3 py-3 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-10">
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Card 2 - SIDE QUEST */}
            <div className="bg-[#373535]/25 p-6 space-y-3">
              <h4 className="text-lg font-semibold">
                SIDE QUEST
              </h4>

              <div className="grid grid-cols-4 gap-3">
                {[
                  {
                    img: WalterLogo,
                    desc: "Internship at Walter's Computer Inc. For 2 months handling hardware components and PC builds.",
                  },
                  {
                    img: AllianceLogo,
                    desc: "Internship for Alliance Software Inc. Assigned as a collaborator in a group to create an expense tracker website.",
                  },
                ].map((a, i) => (
                  <div key={i} className="group relative">
                    <img 
                      src={a.img} 
                      alt="Quest" 
                      className="w-12 h-12 aspect-square rounded-md object-cover cursor-pointer hover:opacity-80 transition-opacity" 
                    />

                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-xs bg-black/80 text-white text-xs px-3 py-3 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-10">
                      {a.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Footer 
      <div className="static sm:fixed bottom-0 left-0 right-0 h-10 flex items-center justify-center backdrop-blur-md bg-black/10 
                      border-t border-white/20">
        <p className="text-[10px] sm:text-[14px]">
          ©2026 Ruzte James Temblor. All rights reserved.
        </p>
      </div>
      */}
    </section>
  );
};

export default CharacterStats;