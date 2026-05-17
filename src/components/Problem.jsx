import { useState } from "react";
import Reveal from "./Reveal";

const stats = [
  { n: "91%",  label: "dei ragazzi intervistati userebbe o considera Pulse — su 43 risposte reali raccolte" },
  { n: "58%",  label: "ha provato ansia o insicurezza legata alla sessualità spesso o a volte" },
  { n: "77%",  label: "si informa principalmente da social media e TikTok, senza fonti attendibili" },
  { n: "60%",  label: "ritiene che l'educazione sessuale tradizionale non sia sufficiente per i giovani" },
];

const points = [
  { icon: "📱", text: "Il 77% dei giovani si informa su sessualità e relazioni tramite social media e TikTok — fonti che distorcono la realtà invece di spiegarla. Solo il 14% dichiara di non avere alcuna fonte affidabile." },
  { icon: "😰", text: "Il 58% ha vissuto ansia o insicurezza legata alla sessualità. Solo il 12% dice di non averla mai provata. Eppure l'educazione tradizionale viene giudicata insufficiente dal 60% degli intervistati." },
  { icon: "🔒", text: "L'81% dà la massima priorità alla privacy, e l'88% vorrebbe che i propri dati restassero solo sul dispositivo. La riservatezza non è un'opzione — è una necessità." },
];

const tags = ["Privato", "Sicuro", "Non giudicante", "Moderno"];

function StatCard({ n, label, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className={`rounded-2xl p-8 border transition-all duration-300 cursor-default ${
          hov ? "bg-purple/[0.07] border-purple/20" : "bg-[#12121e] border-white/[0.07]"
        }`}
      >
        <div className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] grad-text leading-none mb-3 tracking-tight">
          {n}
        </div>
        <p className="font-body font-light text-sm text-[#6b6a80] leading-[1.7]">{label}</p>
      </div>
    </Reveal>
  );
}

export default function Problem() {
  return (
    <section id="problema" className="py-32 px-[5vw] border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left */}
          <div>
            <Reveal>
              <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">
                Il problema — dati reali
              </div>
              <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#f1f0ff] leading-[1.1] tracking-tight mb-8">
                Troppe domande,<br />
                <span className="grad-text">poche risposte vere.</span>
              </h2>
            </Reveal>
            <div className="flex flex-col gap-5">
              {points.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-[10px] bg-purple/10 flex items-center justify-center text-base shrink-0 mt-0.5">
                      {p.icon}
                    </div>
                    <p className="font-body font-light text-sm text-[#9d9cb8] leading-[1.8]">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Survey note */}
            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple/[0.06] border border-purple/[0.12] w-fit">
                <span className="text-xs">📊</span>
                <span className="font-body text-xs text-[#6b6a80]">
                  Dati raccolti da <span className="text-violet">43 risposte reali</span> — maggio 2025
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => <StatCard key={i} {...s} delay={i * 0.1} />)}
          </div>
        </div>

        {/* Banner */}
        <Reveal delay={0.2}>
          <div className="mt-20 p-10 rounded-2xl bg-purple/[0.06] border border-purple/[0.15] flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <div className="font-display font-bold text-lg text-[#f1f0ff] mb-1.5">
                Pulse non è un'app sessuale.
              </div>
              <div className="font-body font-light text-sm text-[#6b6a80] leading-[1.7]">
                È uno spazio di crescita personale — privato, moderno e costruito attorno alle reali esigenze dei giovani.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-purple/10 border border-purple/20 font-body text-xs text-violet">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
