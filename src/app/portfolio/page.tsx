"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassPlayer } from "@/components/GlassPlayer";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FEATURED_BEAT } from "@/data/beats";

interface ReleaseItem {
  id: number;
  label: string;
  artist: string;
  title: string;
  description: string;
  cover: string;
  spotifyUrl: string;
  youtubeUrl: string;
}

const RELEASES: ReleaseItem[] = [
  {
    id: 1,
    label: "BNP",
    artist: "Caio Ocean",
    title: "BNP",
    description: "Boombap · Hip Hop Underground",
    cover: "/caio-ocean-capa.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: 2,
    label: "Destaque",
    artist: "Big Blakk ft. MALU",
    title: "Dinheiro não sai de moda",
    description: "R&B / Drill · Hip Hop Underground",
    cover: "/capa-big-blakk.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: 3,
    label: "DPMO",
    artist: "Digga D",
    title: "DPMO",
    description: "UK Drill · UK Rap",
    cover: "/capa-digga-d.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: 4,
    label: "Vibe",
    artist: "DJ Low-Fi x SonicArchitect",
    title: "Vibe Retro",
    description: "Lo-Fi",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtIuW8W1KFV2trgjjkcvVXa2kttnMMgePz_tTX0hIOgcSL1Ed3JL9BTUK3-cxoBJAlji1aA5HonLQBxcXpNgMqXwuYcRggBxxJcIo5yWddGjdUBDhq-IQWwbwTgkWVcdBDO_MvU6AaMNILehLJqn7IpfuKxUlREoE2tf1ED86F_2_X_h_5MVxwcgnkHRD-Hnjau9d_61CZcpMis4ZFYGqC-a8FXflFEke5hCwgymwJWKOUAslahhBvYH0lhxa-08N_FyKyKMU_L8s",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
  },
];

export default function Portfolio() {

  // Inline player state for Beat do Mês
  const beatAudioRef = useRef<HTMLAudioElement | null>(null);
  const [beatPlaying, setBeatPlaying] = useState(false);
  const [beatProgress, setBeatProgress] = useState(0);
  const [beatCurrentTime, setBeatCurrentTime] = useState(0);
  const [beatDuration, setBeatDuration] = useState(0);
  const beatProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audioUrl = FEATURED_BEAT.audio || "";
    const audio = new Audio(audioUrl);
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

        {/* Portfolio Releases Grid */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-32">
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter mb-3">
                Lançamentos Recentes
              </h2>
              <p className="text-on-surface-variant max-w-2xl">
                Portfólio oficial dos trabalhos do estúdio para exposição de artistas e geração de novas oportunidades comerciais.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {RELEASES.map((release) => (
              <div
                key={release.id}
                className="group relative aspect-square overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 hover:scale-[1.02]"
              >
                <Image
                  src={release.cover}
                  alt={`Capa de ${release.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-2 block">
                    {release.label}
                  </span>
                  <h3 className="text-xl font-headline font-black text-white uppercase mb-1 tracking-tight leading-tight">
                    {release.title}
                  </h3>
                  <p className="text-white text-lg leading-tight mb-1">
                    {release.artist}
                  </p>
                  <p className="text-primary text-xs uppercase tracking-widest mb-4">
                    {release.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={release.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvir ${release.title} no Spotify`}
                      className="w-12 h-12 rounded-xl bg-[#1DB954] hover:brightness-110 transition-colors flex items-center justify-center"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#0B0F13" d="M12 1a11 11 0 100 22 11 11 0 000-22zm4.83 15.85a.69.69 0 01-.95.23 9.44 9.44 0 00-4.8-1.27 10.1 10.1 0 00-2.75.37.69.69 0 11-.36-1.34 11.5 11.5 0 013.11-.42c1.95 0 3.86.5 5.48 1.44.33.2.44.62.27.99zm1.24-2.77a.86.86 0 01-1.18.3 11.66 11.66 0 00-5.9-1.53c-1.1 0-2.18.15-3.2.45a.86.86 0 01-.5-1.65 13.58 13.58 0 013.7-.52c2.44 0 4.84.62 6.87 1.79.42.24.56.76.31 1.16zm.12-2.9a14.25 14.25 0 00-7.24-1.84c-1.3 0-2.58.17-3.8.5a1.03 1.03 0 01-.53-2c1.4-.37 2.86-.56 4.33-.56 2.82 0 5.6.7 7.95 2.07a1.03 1.03 0 11-1.03 1.83z"/>
                      </svg>
                    </a>
                    <a
                      href={release.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Assistir ${release.title} no YouTube`}
                      className="w-12 h-12 rounded-xl bg-[#FF0000] hover:brightness-110 transition-colors flex items-center justify-center"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#FFFFFF" d="M19.62 7.43a2.52 2.52 0 00-1.77-1.79C16.3 5.23 12 5.23 12 5.23s-4.3 0-5.85.41a2.52 2.52 0 00-1.77 1.79C4 9.01 4 12 4 12s0 2.99.38 4.57c.2.8.84 1.44 1.77 1.79 1.55.41 5.85.41 5.85.41s4.3 0 5.85-.41a2.52 2.52 0 001.77-1.79C20 14.99 20 12 20 12s0-2.99-.38-4.57zM10.6 15.03V8.97L15.2 12l-4.6 3.03z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
                {FEATURED_BEAT.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 1 ? <span key={i} className="text-primary">{word}</span> : <span key={i}>{word} </span>
                )}
              </h2>
              <p className="text-on-surface-variant mb-10 max-w-md text-lg leading-relaxed">
                {FEATURED_BEAT.description || "Um instrumental pesado que combina synths futuristas com a percussão agressiva do UK Drill. Engenheirado para a elite."}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`${whatsappBase}${encodeURIComponent(`Estou interessado no Beat "${FEATURED_BEAT.title}" do portfólio. Ainda está disponível?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-black uppercase text-sm group shadow-[0_0_20px_rgba(35,218,237,0.2)] hover:scale-105 transition-transform active:scale-95"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                  Adquirir Exclusiva
                </a>
                <a 
                  href={`${whatsappBase}${encodeURIComponent(`Salve! Pode me mandar a Demo do "${FEATURED_BEAT.title}" pra eu testar umas rimas?`)}`}
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
                loading="lazy"
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
