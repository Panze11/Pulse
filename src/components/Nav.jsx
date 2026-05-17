import { useEffect, useState } from "react";

const links = ["Problema", "Funzionalità", "Percorso", "Valori", "Contatti"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-4 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] backdrop-blur-xl bg-[#09090f]/85"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg grad-bg flex items-center justify-center text-sm">
          💜
        </div>
        <span className="font-display font-extrabold text-lg tracking-tight text-[#f1f0ff]">
          Pulse
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-body text-sm text-[#6b6a80] hover:text-[#f1f0ff] transition-colors duration-200"
          >
            {l}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="grad-bg text-white text-sm font-body font-medium px-5 py-2 rounded-full cursor-pointer glow-purple-sm hover:opacity-90 transition-opacity">
        Presto disponibile
      </div>
    </nav>
  );
}
