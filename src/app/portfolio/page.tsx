"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassPlayer } from "@/components/GlassPlayer";
import Image from "next/image";
import Link from "next/link";
import { useAudio, MOCK_PLAYLIST } from "@/contexts/AudioContext";
import { useState, useRef, useEffect } from "react";

const BEAT_DO_MES = {
  title: "Shadow Drill Vol. 4",
  artist: "Prod. SonicArchitect",
  url: "/audios/beat-do-mes.mp3",
};

export default function Portfolio() {
  const { playTrack } = useAudio();

  // Inline player state for Beat do Mês
  const beatAudioRef = useRef<HTMLAudioElement | null>(null);
  const [beatPlaying, setBeatPlaying] = useState(false);
  const [beatProgress, setBeatProgress] = useState(0);
  const [beatCurrentTime, setBeatCurrentTime] = useState(0);
  const [beatDuration, setBeatDuration] = useState(0);
  const beatProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = new Audio(BEAT_DO_MES.url);
    beatAudioRef.current = audio;

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        setBeatProgress((audio.currentTime / audio.duration) * 100);
        setBeatCurrentTime(audio.currentTime);
      }
    });
    audio.addEventListener("loadedmetadata", () => setBeatDuration(audio.duration));
    audio.addEventListener("ended", () => setBeatPlaying(false));

    return () => { audio.pause(); audio.src = ""; };
  }, []);

  const toggleBeat = () => {
    const audio = beatAudioRef.current;
    if (!audio) return;
    if (beatPlaying) {
      audio.pause();
      setBeatPlaying(false);
    } else {
      audio.play().catch(() => {});
      setBeatPlaying(true);
    }
  };

  const seekBeat = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = beatAudioRef.current;
    if (!audio || !beatProgressRef.current) return;
    const rect = beatProgressRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
  };

  const formatTime = (t: number) => {
    if (!t || isNaN(t)) return "0:00";
    return `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, "0")}`;
  };

  const handlePlayTrack = (index: number) => {
    if (MOCK_PLAYLIST[index]) {
      playTrack(MOCK_PLAYLIST[index]);
    }
  };

  const whatsappBase = "https://wa.me/5519997791763?text=";

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-low p-12 md:p-24 shadow-[0_0_40px_rgba(35,218,237,0.03)] border border-white/5">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfO_tYw7QVOF3jgut5se5zjdigKDLmEqywSENPNdyhSMQoCiOed2rlcVI815OxHT_Y7IbKzcSSOEKXmD4hHRymB72WBgp_OZEkR2QPSrM9zhQihrTyo18A1Z4rlue0mZXhWNySqXAohMHdTFZ6J9JAJ4LTP3bbbyJ45idQH5q6snYWtsraRBwUYGqKm2RF1_-upsR14iVfZn-7jFtrp8a_vVr8V90kZyWytp22M2noZnc7M_ip3v1-Nv3My2gv3Wc0lTwy3U6L51k"
                alt="cinematic close-up of a high-end mixing console in a dark studio with glowing cyan and blue indicators"
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-cover mix-blend-luminosity"
                priority
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfólio & Lançamentos</span>
              <h1 className="text-5xl md:text-8xl font-headline font-black text-white leading-none tracking-tighter mb-8 drop-shadow-[0_0_15px_rgba(35,218,237,0.4)] uppercase">
                Onde o <span className="text-primary">Groove</span> vira Legado.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
                A SonicArchitect é o epicentro da sonoridade urbana. Do Drill agressivo ao Funk envolvente, transformamos visões artísticas em hits de alta fidelidade.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-12">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-4">
            <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-headline font-bold uppercase text-sm whitespace-nowrap transition-all shadow-[0_0_15px_rgba(35,218,237,0.2)] hover:scale-105 active:scale-95">Todos</button>
            <button className="px-8 py-3 rounded-full bg-surface-container-highest text-on-surface-variant hover:text-white font-headline font-bold uppercase text-sm whitespace-nowrap transition-all hover:bg-surface-bright">Trap</button>
            <button className="px-8 py-3 rounded-full bg-surface-container-highest text-on-surface-variant hover:text-white font-headline font-bold uppercase text-sm whitespace-nowrap transition-all hover:bg-surface-bright">Drill</button>
            <button className="px-8 py-3 rounded-full bg-surface-container-highest text-on-surface-variant hover:text-white font-headline font-bold uppercase text-sm whitespace-nowrap transition-all hover:bg-surface-bright">Funk</button>
            <button className="px-8 py-3 rounded-full bg-surface-container-highest text-on-surface-variant hover:text-white font-headline font-bold uppercase text-sm whitespace-nowrap transition-all hover:bg-surface-bright">R&B</button>
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative aspect-square overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 hover:scale-[1.02]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo8NF5T5vrHHVq-K3vaWr4NlM19unyMX_bUcqYF69jwMgEMFqTVSbs31nqzoXNSifeTVTFV4bNQsj3kdzwWajWKHb_q9W-Hq-3E7u4Z0eszftcx9eHwfgIpvvUBy45sCtOlTtCUmAMMSA2G0VZt3vmUWGpS-8yTIl72eBb3RDKlwCgfNhG_5ZnvMnUeOPYVLJ-mBqGC3UaMaZA2wbOWDNa1Yi5zMTui0o8pk3n1PUNQk7WJbLVyQ9KgrjWQntQHhOZuirD6tXSXvw"
                alt="artistic album cover featuring a silhouette of a rapper against a vibrant cyan neon cityscape background"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/40 to-transparent opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-2 block">Artista Trap</span>
                <h3 className="text-2xl font-headline font-black text-white uppercase mb-4 tracking-tight">Cidades de Neon</h3>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  <button 
                    onClick={() => handlePlayTrack(2)}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">play_circle</span> Ouvir Preview
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative aspect-square overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 hover:scale-[1.02]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDizzx7N7oQjf0D_61NNG6_BIISo87qSDj6I0DeH3tPXn8EB98XC-p30nPXECzsWw6gD29Cd8xGrDcghgUjHtpWzfQcWBlvJBPxfkyaRCcpuuzym_IXKIEqk1xCX2x4pEwc8LVSvNR2AfqPAst5aH8MqZdSyD3eKBIQxPhUUZg7gl_aVUvAsRqz1OPuAMNCpJTTP-sdCfsqNH1V8CSmmc1gI5XKbKp7mwNAPrCxvKp2yd-EuH3vxnykl5M3D0sDVCbteuK-AWDy9VE"
                alt="grainy black and white portrait of a singer in a recording booth with dramatic shadows and cyan light leak"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/40 to-transparent opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-2 block">Coletivo Drill</span>
                <h3 className="text-2xl font-headline font-black text-white uppercase mb-4 tracking-tight">Noites de Drill</h3>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  <button 
                    onClick={() => handlePlayTrack(0)}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">play_circle</span> Ouvir Preview
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative aspect-square overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 hover:scale-[1.02]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpMkQ6KL8uAm_5m_zRSy-PKWqfOYDMOUFFD8otNQyqwajTWuWjxvJbT6OxWF6OreOsDzpwWrHLdtLHDUY48SyCUUGdBnexEqcbJ_orDnzJDH7Jcf7c_lD4JnLeioUmeDr1EqKvX50XP_80GoMA6dKFauV_Ljib-eXq7oS_V9yc-VH2XM-7L2OQTDxdXEFYGWiNMl0mqp41Ty-_jsp5eA8qxizb4THW4pRo7gqHk0biV8UA54jOUSYEVxygLSRRqk-69FXZgtSHWUg"
                alt="abstract visual representation of sound waves in electric blue and deep purple against a black background"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/40 to-transparent opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-2 block">Impacto Real</span>
                <h3 className="text-2xl font-headline font-black text-white uppercase mb-4 tracking-tight">Impacto Real</h3>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  <button 
                    onClick={() => handlePlayTrack(1)}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">play_circle</span> Ouvir Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Beat Section */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-32">
          <div className="bg-surface-container p-8 md:p-16 rounded-[2rem] flex flex-col lg:flex-row items-center gap-12 border border-outline-variant/10 shadow-[0_0_40px_rgba(35,218,237,0.02)]">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Beat do Mês</span>
                <div className="h-px flex-grow bg-outline-variant/20"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-6">
                Shadow <span className="text-primary">Drill</span> Vol. 4
              </h2>
              <p className="text-on-surface-variant mb-10 max-w-md text-lg leading-relaxed">
                Um instrumental carregado de graves distorcidos e ambiência cinemática. Exclusivo para artistas que buscam o som das ruas de Londres.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`${whatsappBase}${encodeURIComponent("Estou interessado no Beat Shadow Drill Vol.4 do portfólio. Ainda está disponível?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-black uppercase text-sm group shadow-[0_0_20px_rgba(35,218,237,0.2)] hover:scale-105 transition-transform active:scale-95"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                  Adquirir Exclusiva
                </a>
                <a 
                  href={`${whatsappBase}${encodeURIComponent("Salve! Pode me mandar a Demo do Shadow Drill Vol.4 pra eu testar umas rimas?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-outline-variant px-8 py-4 rounded-full font-headline font-black uppercase text-sm hover:bg-surface-container-highest hover:border-primary/50 transition-all hover:text-primary"
                >
                  <span className="material-symbols-outlined">download</span>
                  Demo Grátis
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-surface-lowest p-8 rounded-2xl relative overflow-hidden shadow-inner">
              {/* Waveform visual animado */}
              <div className="flex items-end justify-between h-24 gap-0.5 px-2 mb-6">
                {Array.from({ length: 48 }).map((_, i) => {
                  const heights = [8, 12, 20, 28, 16, 32, 24, 18, 30, 14, 26, 22, 36, 20, 28, 16, 12, 24, 32, 18, 28, 30, 16, 22, 36, 24, 20, 28, 14, 18, 32, 26, 20, 16, 30, 24, 28, 18, 22, 36, 14, 20, 28, 24, 16, 32, 18, 10];
                  const h = heights[i % heights.length];
                  const isPast = (i / 48) * 100 <= beatProgress;
                  return (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-75 ${isPast ? "bg-primary" : "bg-white/10"} ${beatPlaying ? "animate-pulse" : ""}`}
                      style={{ height: `${h}px`, animationDelay: `${i * 20}ms`, animationDuration: "800ms" }}
                    />
                  );
                })}
              </div>

              {/* Barra de progresso clicável */}
              <div
                ref={beatProgressRef}
                onClick={seekBeat}
                className="h-1 bg-white/10 rounded-full cursor-pointer mb-4 relative group"
              >
                <div
                  className="h-full bg-primary rounded-full relative"
                  style={{ width: `${beatProgress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_white]" />
                </div>
              </div>

              {/* Controles e tempo */}
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant font-mono text-xs">{formatTime(beatCurrentTime)}</span>
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => {
                      if (beatAudioRef.current) {
                        beatAudioRef.current.currentTime = Math.max(0, beatAudioRef.current.currentTime - 10);
                      }
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">replay_10</span>
                  </button>
                  <button
                    onClick={toggleBeat}
                    className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(35,218,237,0.3)] active:scale-95"
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {beatPlaying ? "pause" : "play_arrow"}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      if (beatAudioRef.current) {
                        beatAudioRef.current.currentTime = Math.min(beatDuration, beatAudioRef.current.currentTime + 10);
                      }
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">forward_10</span>
                  </button>
                </div>
                <span className="text-on-surface-variant font-mono text-xs">{formatTime(beatDuration)}</span>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 max-w-screen-2xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary text-on-primary p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnsRGQsYJMu1F6S0Y3Z9ad4vRj5Sy-XDEeciI1nqrDkL2vqzAlA9X_zuVedJ_CBf_RN-P4SiIuLCrcVzij0w5rj1zF3ZSwJOcZ_33JvGiqeMhm8TLw0hskNLEc9q5HJkpebYNlQfODfPvQOcJDuF1prQZX3Ib6Ux5kVrxbz64ZtAXYVp3PzC09XmvVpx5jKSwOeilCo4O2c9d9u6mOPQi6nm2Q9ewCZWCnpO12kOMfmRFayXEsx0IlZLp1USzx-JVUTyEQe3v64ss"
                alt="blurred motion shot of a crowded concert stage with bright strobe lights and silhouettes"
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter mb-8 leading-none">
                Quer que seu próximo <br/>hit esteja aqui?
              </h2>
              <p className="text-on-primary/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Não deixe sua arte guardada. Entre para o time da SONIC ARCHITECT e leve seu som para o topo.
              </p>
              <a 
                href={`${whatsappBase}${encodeURIComponent("Fala! Gostaria de agendar uma sessão com vocês, vi o portfólio e curti demais o trampo.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-on-primary text-primary font-headline font-black uppercase px-12 py-5 rounded-full text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all inline-block"
              >
                Agendar Sessão
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <GlassPlayer />
    </>
  );
}

