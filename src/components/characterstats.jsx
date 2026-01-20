import profile from "../assets/profile.png";
import { Github, Linkedin, Mail, Phone, Facebook } from "lucide-react";
import citLogo from "../assets/cit-logo.png";
import getmilkLogo from "../assets/getmilk-logo.png";

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
    const birthDate = new Date("2002-08-28");
    const today = new Date();
    const currentYear = today.getFullYear();

    const lastBirthday = new Date(
      today >= new Date(currentYear, 7, 28)
        ? currentYear
        : currentYear - 1,
      7,
      28
    );

    const nextBirthday = new Date(
      today >= new Date(currentYear, 7, 28)
        ? currentYear + 1
        : currentYear,
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
        absolute inset-0 text-white
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
          ← HOME
        </button>

        <h3 className="text-center text-lg sm:text-2xl">
          CHARACTER STATS
        </h3>

        <button
          onClick={() => setPage("projects")}
          className="text-right hover:text-gray-300"
        >
          PROJECTS →
        </button>
      </div>

      <div className="w-11/12 sm:w-3/4 border-t border-white/30 mx-auto" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-10 2xl:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 2xl:gap-20">

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
              Lvl {level} Employed
            </span>

            <div className="mt-4 text-xs sm:text-sm opacity-80">
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
              <p>September 2025 – Present</p>
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
              <p className="opacity-80 leading-relaxed">
                Graduated with a B.S. in Computer Engineering, Ruzte searched far and wide
                for new experiences and applications of his skills. With time, he will
                become more experienced and knowledgeable ...who knows how far he can go.
              </p>
            </div>

            <div>
              <h4 className="tracking-widest opacity-70 mb-2">Channels</h4>
              <div className="flex items-center gap-5 pt-2">
                <a href="https://github.com/Ruzte" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ruzte-temblor-073a952b2/" target="_blank">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:ruztejames.temblor@gmail.com">
                  <Mail size={20} />
                </a>
                <a href="tel:09683252543">
                  <Phone size={20} />
                </a>
                <a href="https://www.facebook.com/RJ.Temblor28" target="_blank">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-[#373535]/25 p-6 space-y-6">
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
              <div key={i} className="group relative flex items-center gap-4">
                <img src={a.img} alt={a.title} className="w-14 h-14 rounded-md" />
                <span className="italic text-sm opacity-80">
                  {a.title}
                </span>

                <div className="absolute left-0 top-full mt-2 w-max max-w-xs bg-black/80 text-white text-xs px-3 py-2 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-10">
                  {a.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CharacterStats;
