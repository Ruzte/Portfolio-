import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, Facebook } from "lucide-react";
import profile from "../assets/profile.png";

const titles = [
  "Ruzte James Temblor",
  "A Computer Engineer",
  "A Web Developer",
];

const Hero = ({ page, setPage }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];

    // Typing effect
    if (!isDeleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    // Pause before deleting
    if (!isDeleting && charIndex === current.length) {
      const pause = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pause);
    }

    // Deleting effect
    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, 90);
      return () => clearTimeout(timeout);
    }

    // Move to next title
    if (isDeleting && charIndex === 0) {
      setTimeout(() => {
        setIsDeleting(false);
        setIndex((index + 1) % titles.length);
      }, 0);
    }
  }, [charIndex, index, isDeleting]);

  return (
    <section
      className={`
        absolute inset-0 text-white z-10
        bg-[linear-gradient(to_bottom,#810020_0%,#430B19_50%,#071512_100%)]
        flex items-start
        transition-transform duration-700 ease-in-out
        ${page === "home" ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-6xl mx-auto w-full px-10 pt-20 2xl:pt-40 grid grid-cols-[30%_70%] gap-10 items-center">
        
        {/* LEFT */}
        <div className="flex justify-end overflow-hidden">
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full"
        />
      </div>

        {/* RIGHT */}
        <div className="self-end">
          <p className="text-lg mb-2 text-[40px]">
            Hello I am,
          </p>

          <h1 className="text-[64px] leading-[1.05] font-bold">
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <div className="mt-6 space-y-2 text-sm">
            {/* Education */}
            <div className="flex items-center gap-2">
              <span>🎓 B.S Computer Engineering</span>
            </div>

            {/* Employment */}
            <div className="flex items-center gap-2">
              <span>🟢 Employed</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/Ruzte"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ruzte-temblor-073a952b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:ruztejames.temblor@gmail.com"
                className="hover:text-red-300 transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              <a
                href="tel:09683252543"
                className="hover:text-green-300 transition"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>

              <a
                href="https://www.facebook.com/RJ.Temblor28"
                className="hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
    
            </div>
          </div>
        </div>

        {/* Divider + Buttons */}
        <div className="absolute bottom-12 2xl:bottom-32 left-0 w-full flex flex-col items-center">
          {/* Top Divider */}
          <div className="hidden md:block w-3/4 border-t border-white/30 mb-6"></div>

          {/* Buttons */}
          <div className="flex items-center text-sm tracking-widest gap-8 w-full max-w-6xl mx-auto">
            <button
              onClick={() => setPage("stats")}
              className="w-1/2 py-20 hover:text-gray-300 transition font-bold hover:bg-gray-500/10 hover:backdrop-blur-3xl"
            >
              CHARACTER STATS
            </button>

            <button
              onClick={() => setPage("projects")}
              className="w-1/2 py-20 hover:text-gray-300 transition font-bold hover:bg-gray-500/10 hover:backdrop-blur-3xl"
            >
              PROJECTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;