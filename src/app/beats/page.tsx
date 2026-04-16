"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassPlayer } from "@/components/GlassPlayer";
import { LicenseModal } from "@/components/LicenseModal";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { LicenseOption } from "@/contexts/CartContext";
import { BEATS_CATALOG, GENRES, FEATURED_BEAT, Beat } from "@/data/beats";

const WA = "https://wa.me/5519997791763?text=";

// Beats não-featured para o grid
const BEATS = BEATS_CATALOG.filter((b) => !b.featured);

export default function Beats() {
  const [activeGenre, setActiveGenre] = useState("Todos");
  const [search, setSearch] = useState("");
  const [modalBeat, setModalBeat] = useState<Beat | null>(null);
  const { addToCart } = useCart();

  // ── Audio inline (sem player global) ──
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const togglePlay = (beat: Beat) => {
    if (!beat.audio) return;

    // Se já tá tocando esse, pausa
    if (playingId === beat.id) {
      audioRef.current?.pause();
      setPlayingId(null);
      return;
    }

    // Para o anterior
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }

    // Cria novo audio e toca
    const audio = new Audio(beat.audio);
    audioRef.current = audio;
    audio.addEventListener("ended", () => setPlayingId(null));
    audio.play().catch(() => {});
    setPlayingId(beat.id);
  };

  const filtered = BEATS.filter((b) => {
    const matchGenre = activeGenre === "Todos" || b.genre === activeGenre;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase());
    return matchGenre && matchSearch;
  });

  const handleAddToCart = (beat: Beat, license: LicenseOption) => {
    addToCart({
      beatId: beat.id,
      title: beat.title,
      genre: beat.genre,
      img: beat.img,
      license,
    });
  };

  return (
    <>
      <Header />

      <main className="flex-1 pt-24 pb-28 md:pb-24">

        {/* ── Hero Beat Destaque ── */}
        <section className="relative px-6 md:px-8 py-12 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />

          <div className="relative bg-surface-container rounded-3xl p-6 md:p-12 border border-white/5 flex flex-col md:flex-row gap-10 items-center">
            {/* Capa — clique pra ouvir */}
            <div
              onClick={() => togglePlay(FEATURED_BEAT)}
              className="w-full md:w-72 lg:w-80 aspect-square relative rounded-2xl overflow-hidden flex-shrink-0 group shadow-[0_0_40px_rgba(35,218,237,0.1)] cursor-pointer"
            >
              <Image
                src={FEATURED_BEAT.img}
                alt={`${FEATURED_BEAT.title} - Beat Destaque`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className={`absolute inset-0 bg-background/30 flex items-center justify-center transition-opacity ${playingId === FEATURED_BEAT.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 72, fontVariationSettings: "'FILL' 1" }}>
                  {playingId === FEATURED_BEAT.id ? "pause_circle" : "play_circle"}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-6">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Beat do Mês</span>
                <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none mb-4 uppercase">
                  {FEATURED_BEAT.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? <span key={i} className="text-primary">{word}</span> : <span key={i}>{word} </span>
                  )}
                </h1>
                <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                  {FEATURED_BEAT.description}
                </p>
              </div>

              {/* Waveform mockup */}
              <div className="bg-surface-container-lowest rounded-xl p-5 h-24 flex items-end gap-1 overflow-hidden">
                {[1/3,1/2,2/3,3/4,1/2,1,4/5,2/3,1/2,1/4,1/2,3/4,2/3,1/2,4/5,1/2,1/4,3/4,1,2/3,1/2,1/3,1/2,2/3,3/4,1/2,1,4/5,2/3,1/2].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full ${i > 4 && i < 20 ? "bg-primary shadow-[0_0_6px_rgba(35,218,237,0.6)]" : "bg-primary/20"}`}
                    style={{ height: `${h * 100}%` }}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalBeat(FEATURED_BEAT)}
                  className="bg-primary text-on-primary font-black px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(35,218,237,0.3)] text-sm uppercase tracking-wide"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_shopping_cart</span>
                  Adquirir Beat
                </button>
                <div className="flex gap-5 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-base">speed</span>{FEATURED_BEAT.bpm} BPM</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-base">music_note</span>{FEATURED_BEAT.key}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Filtros & Busca ── */}
        <section className="px-6 md:px-8 mb-10 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 bg-surface-container-low p-5 md:p-6 rounded-2xl border border-white/5">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-surface-container-lowest border-none rounded-full py-3 pl-12 pr-6 text-on-surface focus:ring-1 focus:ring-primary text-sm"
                placeholder="Buscar beats..."
                type="text"
              />
            </div>
            {/* Genre Filters */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 w-full md:w-auto">
              {GENRES.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                    activeGenre === g
                      ? "bg-primary text-on-primary shadow-[0_0_12px_rgba(35,218,237,0.3)]"
                      : "bg-surface-container-highest text-on-surface-variant hover:text-white"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Grid de Beats ── */}
        <section className="px-6 md:px-8 mb-28 max-w-screen-2xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-4 block">search_off</span>
              <p className="text-lg">Nenhum beat encontrado para "<span className="text-white">{search}</span>"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filtered.map((beat) => (
                <div key={beat.id} className="bg-surface-container-high rounded-2xl p-4 group hover:bg-surface-bright transition-all duration-300 border border-white/0 hover:border-primary/10">
                  <div
                    onClick={() => togglePlay(beat)}
                    className="relative aspect-square rounded-xl overflow-hidden mb-5 shadow-lg cursor-pointer"
                  >
                    <Image
                      src={beat.img}
                      alt={beat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-background/50 flex items-center justify-center transition-opacity ${playingId === beat.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: 56, fontVariationSettings: "'FILL' 1" }}>
                        {playingId === beat.id ? "pause_circle" : "play_circle"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-headline font-black text-lg truncate text-white uppercase tracking-tight">{beat.title}</h3>
                      <p className="text-on-surface-variant text-xs mt-0.5">{beat.genre} · {beat.bpm} BPM · {beat.key}</p>
                      {beat.description && (
                        <p className="text-on-surface-variant/60 text-[11px] mt-1.5 line-clamp-2 leading-relaxed">{beat.description}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-primary font-black text-lg">{beat.price}</span>
                      <button
                        onClick={() => setModalBeat(beat)}
                        className="bg-surface-container-lowest hover:bg-primary hover:text-on-primary p-2.5 rounded-full transition-all group/btn border border-white/5"
                      >
                        <span className="material-symbols-outlined text-primary group-hover/btn:text-on-primary text-xl">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-14 text-center">
            <button className="border border-outline-variant/30 text-on-surface-variant font-bold px-8 py-3 rounded-full hover:bg-surface-container hover:text-white transition-all text-sm uppercase tracking-widest">
              Carregar Mais Instrumentais
            </button>
          </div>
        </section>

        {/* ── Opções de Licenciamento ── */}
        <section className="bg-surface-container-low py-24 px-6 md:px-8 border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Licenciamento</span>
              <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-4 uppercase">Escolha Seu Plano</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
                Todos os beats são entregues em formato WAV de alta qualidade. Escolha a licença ideal para o seu projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Básico */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/15 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-2xl font-black font-headline mb-1 uppercase">Licença Básica</h3>
                <p className="text-primary font-black text-3xl mb-8">R$ 179</p>
                <ul className="space-y-3 mb-10 text-sm">
                  {[
                    { ok: true, text: "MP3 + WAV" },
                    { ok: true, text: "50.000 Streams" },
                    { ok: true, text: "1 Videoclipe" },
                    { ok: false, text: "Stems separados" },
                    { ok: false, text: "Áudio sem tag" },
                  ].map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 ${item.ok ? "text-on-surface" : "text-on-surface-variant/40"}`}>
                      <span className={`material-symbols-outlined text-base ${item.ok ? "text-primary" : "text-on-surface-variant/30"}`}>
                        {item.ok ? "check_circle" : "cancel"}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA}${encodeURIComponent("Olá! Tenho interesse na Licença Básica de beats. Como funciona?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl border border-outline-variant text-center font-black font-headline text-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                >
                  Selecionar Básico
                </a>
              </div>

              {/* Premium — Destaque */}
              <div className="bg-surface-container-highest rounded-2xl p-8 border-2 border-primary relative shadow-[0_0_40px_rgba(35,218,237,0.12)] scale-[1.02]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                  Mais Popular
                </div>
                <h3 className="text-2xl font-black font-headline mb-1 uppercase">Licença Premium</h3>
                <p className="text-primary font-black text-3xl mb-8">R$ 599</p>
                <ul className="space-y-3 mb-10 text-sm">
                  {[
                    "WAV + Stems Separados",
                    "500.000 Streams",
                    "Videoclipes Ilimitados",
                    "Áudio Sem Tag",
                    "Mixagem Profissional Inclusa",
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-surface">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      {text}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA}${encodeURIComponent("Quero adquirir a Licença Premium de beats do SonicArchitect. Como prosseguir?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl bg-primary text-on-primary text-center font-black font-headline text-sm uppercase tracking-wider hover:scale-95 transition-transform shadow-[0_0_20px_rgba(35,218,237,0.4)]"
                >
                  Selecionar Premium
                </a>
              </div>

              {/* Exclusivo */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/15 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-2xl font-black font-headline mb-1 uppercase">Direitos Exclusivos</h3>
                <p className="text-primary font-black text-3xl mb-8">Sob Consulta</p>
                <ul className="space-y-3 mb-10 text-sm">
                  {[
                    "Transferência Total de Propriedade",
                    "Streams Ilimitados",
                    "Execução em Rádio Ilimitada",
                    "Modificações Personalizadas",
                    "Beat Retirado do Catálogo",
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-surface">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      {text}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA}${encodeURIComponent("Tenho interesse em adquirir os Direitos Exclusivos de um beat. Podemos conversar?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl border border-outline-variant text-center font-black font-headline text-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                >
                  Fazer Proposta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="px-6 md:px-8 py-24 max-w-screen-2xl mx-auto">
          <div className="bg-primary rounded-3xl p-10 md:p-24 text-center text-on-primary overflow-hidden relative">
            <div className="absolute inset-0 bg-background/10 pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none mb-6 relative z-10 uppercase">
              PRONTO PARA DROPAR<br />SEU PRÓXIMO HIT?
            </h2>
            <p className="text-on-primary/80 text-xl font-medium mb-10 max-w-2xl mx-auto relative z-10">
              Não vendemos apenas beats. Engenheiramos a base sônica para performances de elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href={`${WA}${encodeURIComponent("Fala! Quero conversar sobre beats e produção no SonicArchitect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-on-primary text-primary font-black px-12 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-xl uppercase tracking-tight"
              >
                Ver Catálogo
              </a>
              <a
                href={`${WA}${encodeURIComponent("Olá! Tenho interesse em uma produção personalizada. Podemos conversar sobre o projeto?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-on-primary/30 text-on-primary font-black px-12 py-5 rounded-full text-lg hover:bg-on-primary hover:text-primary transition-all uppercase tracking-tight"
              >
                Produção Personalizada
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* LicenseModal */}
      {modalBeat && (
        <LicenseModal
          beat={modalBeat}
          isOpen={!!modalBeat}
          onClose={() => setModalBeat(null)}
          onSelect={(license) => handleAddToCart(modalBeat, license)}
        />
      )}

      <Footer />
      <GlassPlayer />
    </>
  );
}
