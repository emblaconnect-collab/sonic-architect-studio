"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassPlayer } from "@/components/GlassPlayer";
import Image from "next/image";
import Link from "next/link";
import { useAudio, MOCK_PLAYLIST } from "@/contexts/AudioContext";

export default function Home() {
  const { playTrack } = useAudio();

  const handlePlayDefault = (index: number) => {
    if (MOCK_PLAYLIST[index]) {
      playTrack(MOCK_PLAYLIST[index]);
    }
  };

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero.png"
              alt="SonicArchitect Studio"
              fill
              sizes="100vw"
              quality={60}
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs tracking-widest uppercase">
                Estúdio Urbano Premium
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-surface leading-[0.9] mb-8">
                SEU SOM.<br/>NOSSA MISSÃO.
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl mb-12 leading-relaxed">
                Produção musical urbana de alto nível. <span className="text-white font-medium">Transformamos sua voz em impacto real</span> no cenário do Trap, Drill e Funk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://wa.me/5519997791763?text=Olá! Gostaria de saber mais sobre as sessões no SonicArchitect." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary-container px-10 py-5 rounded-full font-black font-headline tracking-tight flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(35,218,237,0.2)] hover:scale-105 transition-transform duration-300"
                >
                  AGENDAR SESSÃO
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <Link href="/portfolio" className="border border-outline/30 text-on-surface px-10 py-5 rounded-full font-black font-headline tracking-tight flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-surface-container transition-colors duration-300">
                  OUVIR PORTFÓLIO
                  <span className="material-symbols-outlined">play_circle</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section: Bento Grid */}
        <section className="py-32 bg-surface-container-low relative">
          <div className="max-w-screen-2xl mx-auto px-8">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline tracking-tighter mb-8 uppercase">Especialidades</h2>
                <p className="text-on-surface-variant text-lg">
                  Oferecemos a infraestrutura completa para transformar ideias brutas em sucessos das plataformas de streaming.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Record */}
              <div className="md:col-span-2 bg-surface-container-highest p-10 rounded-xl relative overflow-hidden group hover:bg-surface-bright transition-all duration-500">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="material-symbols-outlined text-primary text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>mic_external_on</span>
                  <div>
                    <h3 className="text-2xl font-black font-headline mb-4 uppercase">Gravação</h3>
                    <p className="text-on-surface-variant leading-relaxed">Captação de voz e instrumentos em ambiente tratado com microfones valvulados de padrão internacional.</p>
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[15rem]">mic</span>
                </div>
              </div>

              {/* Mix & Master */}
              <div className="bg-surface-container-high p-10 rounded-xl flex flex-col justify-between group hover:bg-surface-bright transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl mb-8">graphic_eq</span>
                <div>
                  <h3 className="text-2xl font-black font-headline mb-4 uppercase">Mix & Master</h3>
                  <p className="text-on-surface-variant text-sm">O peso e a clareza que o Trap e o Drill exigem, otimizados para todos os sistemas.</p>
                </div>
              </div>

              {/* Beats */}
              <div className="bg-surface-container-high p-10 rounded-xl flex flex-col justify-between group hover:bg-surface-bright transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl mb-8">piano</span>
                <div>
                  <h3 className="text-2xl font-black font-headline mb-4 uppercase">Produção</h3>
                  <p className="text-on-surface-variant text-sm">Criação de instrumentais exclusivos com a identidade visual e sonora do artista.</p>
                </div>
              </div>

              {/* Art Direction */}
              <div className="md:col-span-2 bg-surface-container-highest p-10 rounded-xl relative overflow-hidden group hover:bg-surface-bright transition-all duration-500">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="material-symbols-outlined text-primary text-4xl mb-8">palette</span>
                  <div>
                    <h3 className="text-2xl font-black font-headline mb-4 uppercase">Direção Artística</h3>
                    <p className="text-on-surface-variant leading-relaxed">Consultoria completa desde a escolha do repertório até o lançamento estratégico nas redes.</p>
                  </div>
                </div>
                <div className="absolute -right-8 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[12rem]">auto_awesome</span>
                </div>
              </div>

              {/* Video Sessions */}
              <div className="md:col-span-2 bg-surface-container-high p-10 rounded-xl flex flex-col justify-between border border-primary/5 group hover:bg-surface-bright transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl mb-8">videocam</span>
                <div>
                  <h3 className="text-2xl font-black font-headline mb-4 uppercase">Sessões em Estúdio</h3>
                  <p className="text-on-surface-variant leading-relaxed">Gravação de conteúdo visual premium para seu canal, capturando a energia real da sessão.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Recent Releases: Horizontal Scroll */}
        <section className="py-32 bg-surface overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8 mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase mb-4">Lançamentos Recentes</h2>
            <p className="text-on-surface-variant text-base md:text-lg">O que está batendo nas ruas direto da SonicArchitect.</p>
          </div>
          <div className="flex gap-8 px-8 overflow-x-auto pb-12 no-scrollbar scroll-smooth">
            
            {/* Release 1 — Caio Ocean: BNP */}
            <div 
              onClick={() => handlePlayDefault(0)}
              className="min-w-[300px] md:min-w-[400px] group cursor-pointer shrink-0"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <Image 
                  src="/covers/caio-ocean-capa.png"
                  alt="BNP - Caio Ocean" 
                  fill 
                  sizes="(max-width: 768px) 300px, 400px"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
                </div>
              </div>
              <h4 className="text-xl font-bold font-headline uppercase mb-1">BNP</h4>
              <p className="text-on-surface-variant text-sm font-medium">Caio Ocean</p>
              <p className="text-primary/60 text-xs font-medium mt-0.5 uppercase tracking-widest">Boombap · Hip Hop Underground</p>
            </div>

            {/* Release 2 — Big Blakk */}
            <div 
              onClick={() => handlePlayDefault(1)}
              className="min-w-[300px] md:min-w-[400px] group cursor-pointer shrink-0"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <Image 
                  src="/covers/capa-big-blakk.png" 
                  alt="Dinheiro não sai de moda - Big Blakk" 
                  fill 
                  sizes="(max-width: 768px) 300px, 400px"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
                </div>
              </div>
              <h4 className="text-xl font-bold font-headline uppercase mb-1">Dinheiro não sai de moda</h4>
              <p className="text-on-surface-variant text-sm font-medium">Big Blakk ft. MALU</p>
              <p className="text-primary/60 text-xs font-medium mt-0.5 uppercase tracking-widest">R&B / Drill · Hip Hop Underground</p>
            </div>

            {/* Release 3 — Digga D */}
            <div 
              onClick={() => handlePlayDefault(2)}
              className="min-w-[300px] md:min-w-[400px] group cursor-pointer shrink-0"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <Image 
                  src="/covers/capa-digga-d.png" 
                  alt="DPMO - Digga D" 
                  fill 
                  sizes="(max-width: 768px) 300px, 400px"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
                </div>
              </div>
              <h4 className="text-xl font-bold font-headline uppercase mb-1">DPMO</h4>
              <p className="text-on-surface-variant text-sm font-medium">Digga D</p>
              <p className="text-primary/60 text-xs font-medium mt-0.5 uppercase tracking-widest">UK Drill · UK Rap</p>
            </div>


            {/* Release 4 */}
            <div onClick={() => handlePlayDefault(3)} className="min-w-[300px] md:min-w-[400px] group cursor-pointer shrink-0">
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <Image 
                  src="/covers/capa-gabryyzera.jpeg" 
                  alt="Primeiro Ato - Gabryyzera" 
                  fill 
                  sizes="(max-width: 768px) 300px, 400px"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
                </div>
              </div>
              <h4 className="text-xl font-bold font-headline uppercase mb-1">Primeiro Ato</h4>
              <p className="text-on-surface-variant text-sm font-medium">Gabryyzera</p>
              <p className="text-primary/60 text-xs font-medium mt-0.5 uppercase tracking-widest">Boombap · Hip Hop Underground</p>
            </div>

          </div>
        </section>

        {/* Advantages: Tonal Grid */}
        <section className="py-32 bg-surface-container">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center border-l-4 border-primary shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
                </div>
                <h3 className="text-xl font-black font-headline uppercase tracking-tight">Equipamento de Ponta</h3>
                <p className="text-on-surface-variant leading-relaxed">Interfaces UA, microfones Neumann e monitoração Genelec para a melhor fidelidade sonora.</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center border-l-4 border-primary shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                </div>
                <h3 className="text-xl font-black font-headline uppercase tracking-tight">Produtores Experientes</h3>
                <p className="text-on-surface-variant leading-relaxed">Time focado na cultura urbana que entende o feeling necessário para cada vertente.</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center border-l-4 border-primary shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                </div>
                <h3 className="text-xl font-black font-headline uppercase tracking-tight">Ambiente Criativo</h3>
                <p className="text-on-surface-variant leading-relaxed">Espaço desenhado para o conforto do artista, estimulando a performance e inspiração.</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center border-l-4 border-primary shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <h3 className="text-xl font-black font-headline uppercase tracking-tight">Resultado Profissional</h3>
                <p className="text-on-surface-variant leading-relaxed">Seu som pronto para rádios e playlists editoriais com o padrão de mercado atual.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-32 bg-surface relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTXfLgN9kF9kF9zL9l-E0pL-qXF6gQ-q9-9E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E-E"
                alt="Portrait of the head engineer at work in a dark studio room with orange and teal accent lights"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="space-y-8">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Nossa História</span>
              <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase leading-none">
                ENGENHARIA SONORA <br/>PARA A <span className="text-primary">ELITE URBANA.</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  Fundado pelo produtor e engenheiro <strong>Knucks</strong>, o SonicArchitect nasceu da necessidade de um som que não apenas ocupasse espaço, mas que dominasse a cena. Localizado no coração pulsante de São Paulo, somos o ponto de convergência entre a técnica refinada e a atitude das ruas.
                </p>
                <p>
                  Nossa filosofia é simples: <strong>fidelidade absoluta</strong>. Trabalhamos com equipamentos de ponta e acústica cirúrgica para garantir que cada grave bata com precisão e cada lírica tenha a clareza que merece.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-white font-headline font-black text-3xl mb-1">500+</h4>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Faixas Produzidas</p>
                </div>
                <div>
                  <h4 className="text-white font-headline font-black text-3xl mb-1">15M+</h4>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Total de Streams</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary opacity-5" />
            <div className="absolute -right-64 -top-64 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[160px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-headline tracking-tighter uppercase mb-8 leading-tight">
              PRONTO PARA O PRÓXIMO NÍVEL?
            </h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">
              Não deixe seu talento guardado. Venha para a SonicArchitect e dê a potência que sua música merece.
            </p>
            <Link href="/contato" className="bg-primary text-on-primary-container inline-flex px-12 py-6 rounded-full font-black font-headline text-lg tracking-widest hover:scale-105 transition-all shadow-[0_0_50px_rgba(35,218,237,0.4)] group">
              RESERVAR AGORA
              <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
            </Link>
          </div>
        </section>

      </main>
      
      <Footer />
      {/* Mobile player padding compensation handled in layout via pb-28, GlassPlayer remains fixed */}
      <GlassPlayer />
    </>
  );
}

