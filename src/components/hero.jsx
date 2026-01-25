import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, Facebook } from "lucide-react";
import profile from "../assets/profile.png";

const titles = [
  "Ruzte James Temblor",
  "A Computer Engineer",
  "A Web Developer",
  "A Tech Enthusiast",
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
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-20 2xl:pt-40 grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 md:gap-10 items-center">
        
        {/* LEFT */}
        <div className="flex justify-center md:justify-end overflow-hidden">
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 object-cover rounded-full"
        />
      </div>

        {/* RIGHT */}
        <div className="self-center md:self-end text-center md:text-left">
          <p className="text-base sm:text-lg md:text-lg mb-2 text-2xl sm:text-3xl md:text-[40px]">
            Greetings! Meet
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.05] font-bold">
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <div className="mt-4 sm:mt-6 space-y-2 text-xs sm:text-sm md:text-sm">
            {/* Education */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span>⚔️ Class: Computer Engineer</span>
            </div>

            {/* Employment */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span>🟢 Status: Employed</span>
            </div>

            {/* Work */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span>🎯 Faction: Getmilk Pty Ltd</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-5 pt-2">
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
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 2xl:bottom-32 left-0 w-full flex flex-col items-center">
          {/* Top Divider */}
          <div className="hidden sm:block w-3/4 border-t border-white/30 mb-4 sm:mb-6"></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center text-xs sm:text-sm tracking-widest gap-0 w-full max-w-6xl mx-auto px-4">
            <button
              onClick={() => setPage("stats")}
              className="w-full sm:w-1/2 py-3 sm:py-6 md:py-20 hover:text-gray-300 transition font-bold hover:bg-gray-500/10 hover:backdrop-blur-3xl border-b sm:border-b-0 sm:border-r border-white/10"
            >
              CHARACTER STATS
            </button>

            <button
              onClick={() => setPage("projects")}
              className="w-full sm:w-1/2 py-3 sm:py-6 md:py-20 hover:text-gray-300 transition font-bold hover:bg-gray-500/10 hover:backdrop-blur-3xl"
            >
              COMPLETED QUESTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;