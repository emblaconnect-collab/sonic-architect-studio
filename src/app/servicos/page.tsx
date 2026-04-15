"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassPlayer } from "@/components/GlassPlayer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Como faço para agendar uma sessão?",
      a: "O agendamento é feito diretamente pelo nosso WhatsApp ou pela página de contato. Você escolhe o pacote, definimos a data e confirmamos via sinal de reserva."
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "Aceitamos PIX, Cartão de Crédito (até 12x) e transferência bancária. O pagamento é dividido em 50% na reserva e 50% na entrega dos arquivos brutos ou mixados."
    },
    {
      q: "Em quanto tempo recebo os arquivos finalizados?",
      a: "Para gravações simples, as guias saem na hora. Mixagem e Masterização levam em média de 3 a 7 dias úteis, dependendo da complexidade do projeto."
    },
    {
      q: "Posso levar acompanhantes para a sessão?",
      a: "Sim, permitimos até 2 acompanhantes por sessão para garantir que o foco e o fluxo de trabalho no estúdio sejam mantidos em alto nível."
    }
  ];

  const whatsappBase = "https://wa.me/5519997791763?text=";

  return (
    <>
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative px-8 py-24 md:py-32 hero-gradient overflow-hidden">
          <div className="max-w-screen-2xl mx-auto flex flex-col items-start gap-6">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Produção Musical Premium</span>
            <h1 className="font-headline text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] max-w-4xl">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-2xl max-w-2xl leading-relaxed">
              A engenharia sonora definitiva para o cenário urbano. Transformamos sua visão artística em hits prontos para o topo das paradas.
            </p>
          </div>
          {/* Decorative Visual Beat */}
          <div className="absolute -right-20 top-20 opacity-10 hidden lg:block pointer-events-none">
            <span className="material-symbols-outlined text-[30rem]" style={{ fontVariationSettings: "'FILL' 1" }}>graphic_eq</span>
          </div>
        </section>

        {/* Core Services Detail (Bento Grid Style) */}
        <section className="px-8 py-24 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Gravação */}
            <div className="lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high min-h-[350px] md:min-h-[500px] flex flex-col justify-end p-8 md:p-10 hover:bg-surface-bright transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBM7w4Nc_cyupuh7c4nin7ZZsAxucrpcFv7VSEmWcrMljjHUJXCFDX9-wgWksfxfd20E_OJ4m8XsSNGd2O3ATv3U_n6rDx1RnEVpKhyDFz6bWGfBBItH3g3UDlDGh19gYy9fAt7ORBPitOpQOFkVSBwksRG1lb49iDI8qkreNCd7SJdmXd9_qDz3TKiJeEgu16SeJHgpsOPb5i7NPWSEtMrFCqlgNSXIDpTx6e-_RClLrCGAdq_48FNpWB3DjemXZgbxFq1lppDck"
                  alt="Modern high-end music studio with professional microphones"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  loading="lazy"
                  className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                </div>
                <h3 className="font-headline text-4xl font-bold tracking-tight">Gravação Vocal & Instrumental</h3>
                <p className="font-body text-on-surface-variant max-w-xl text-lg">
                  Experiência imersiva com os melhores microfones do mundo (Neumann, AKG). Nossas salas são acusticamente projetadas para capturar a essência da sua voz com precisão cirúrgica e orientação profissional em cada take.
                </p>
              </div>
            </div>

            {/* Produção de Beats */}
            <div className="lg:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high min-h-[350px] md:min-h-[500px] flex flex-col justify-end p-8 md:p-10 hover:bg-surface-bright transition-all duration-500">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYIr3WayZLUCI9Nk7QtDXqloG82LGaaAq47NXh_FWugDEvBMQXROMcrm-kX24aNfXAJB2OzjiH0Y5mqE5EpWrno-hV6bl0-hJ04JVIqi7rdVlDL_mWCj_NJBkXJAGZybiY30nWvDwI6xHAUSmSkg7GYXRl57R9ok7kG8Q2Jt4tmTzjI6A574xHHf0xv8QzDXyS40jv-TNm-Ro_iIOD1HuTrJZ1qV19CcmAISX6sRh_TtsvAQ89XtJyN1D71cI2yy-eAKcrj8aNJLE"
                  alt="Close up of a professional music producer working on a MIDI controller"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>piano</span>
                </div>
                <h3 className="font-headline text-3xl font-bold tracking-tight">Produção de Beats</h3>
                <p className="font-body text-on-surface-variant text-base">
                  Criação customizada de instrumentais exclusivos para Trap, Drill e Funk. Alinhamos sua identidade visual sonora à estética do mercado atual.
                </p>
              </div>
            </div>

            {/* Mixagem & Masterização */}
            <div className="lg:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container-high min-h-[400px] flex flex-col md:flex-row items-center gap-12 p-10 hover:bg-surface-bright transition-all duration-500">
              <div className="w-full md:w-1/2 relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>equalizer</span>
                </div>
                <h3 className="font-headline text-4xl font-bold tracking-tight">Mixagem & Masterização</h3>
                <p className="font-body text-on-surface-variant text-lg">
                  O som que as ruas exigem. Nossos engenheiros de áudio aplicam técnicas avançadas para garantir punch, clareza e o volume necessário para as pistas e plataformas de streaming. Focamos no padrão da indústria para gêneros urbanos.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-full min-h-[250px] relative rounded-lg overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdZuQ7FxP83aG91kcErpd8Ssfo7hKh1alzkXfxPjH8jSfF9lEyRNe1-h4kNCcQq4ruSUa4OXJCddbAjtZ8xhWO6Q-uIsS2c9_HMfR_aIv9KO-4JF-pqJ7n-yjV18qPjkfThVsxVcmnNShTPCknv56Jobu-JR4fHPjlmfYAf81wKVsWm-v0mtW_JfANXVWpfxYcG6IJgVKJiGIuI1pMnkD8FF9WeKAbEHoGYsgltFqNHwksGcWmpTyBSlc8-y-4RufKOXsixzHHkFI"
                  alt="High quality audio waveform on a professional computer monitor"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover opacity-60"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-4">Nossos <span className="text-primary">Serviços</span></h2>
              <p className="font-body text-on-surface-variant max-w-2xl mx-auto">Serviços profissionais para cada etapa do seu projeto musical. Do ensaio à produção completa.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Ensaio */}
              <div className="flex flex-col p-8 rounded-xl bg-surface-container-high hover:bg-surface-variant transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">piano</span>
                </div>
                <h4 className="font-headline text-lg font-bold mb-2">Ensaio</h4>
                <div className="text-3xl font-black text-primary mb-2 font-headline">R$ 50</div>
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-8">1 hora</span>
                <ul className="space-y-3 mb-10 flex-grow z-10 relative">
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Sala equipada
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Amplificadores disponíveis
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Bateria no local
                  </li>
                </ul>
                <a 
                  href={`${whatsappBase}${encodeURIComponent("Olá! Quero agendar um ensaio de 1 hora (R$ 50). Quais horários disponíveis?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full py-3.5 border border-outline-variant hover:border-primary hover:text-primary transition-all rounded-full font-bold text-center block text-sm"
                >
                  Agendar
                </a>
              </div>

              {/* Captação de Voz */}
              <div className="flex flex-col p-8 rounded-xl bg-surface-container-high hover:bg-surface-variant transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">mic</span>
                </div>
                <h4 className="font-headline text-lg font-bold mb-2">Captação de Voz</h4>
                <div className="text-3xl font-black text-primary mb-2 font-headline">R$ 80</div>
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-8">1 hora</span>
                <ul className="space-y-3 mb-10 flex-grow z-10 relative">
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Microfone condensador
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Tratamento acústico
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Direção vocal inclusa
                  </li>
                </ul>
                <a 
                  href={`${whatsappBase}${encodeURIComponent("E aí! Quero agendar uma captação de voz de 1 hora (R$ 80). Quando posso ir?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full py-3.5 border border-outline-variant hover:border-primary hover:text-primary transition-all rounded-full font-bold text-center block text-sm"
                >
                  Agendar
                </a>
              </div>

              {/* Gravação de Bandas — Destaque */}
              <div className="flex flex-col p-8 rounded-xl bg-surface-container-highest ring-2 ring-primary relative overflow-hidden shadow-[0_0_40px_rgba(35,218,237,0.1)]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Mais Popular
                </div>
                <h4 className="font-headline text-lg font-bold mb-2 mt-4">Gravação de Bandas</h4>
                <div className="text-3xl font-black text-primary mb-2 font-headline">R$ 150</div>
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-8">por sessão</span>
                <ul className="space-y-3 mb-10 flex-grow z-10 relative">
                  <li className="flex items-center gap-3 text-on-surface text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Gravação multipista
                  </li>
                  <li className="flex items-center gap-3 text-on-surface text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Engenheiro de áudio
                  </li>
                  <li className="flex items-center gap-3 text-on-surface text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Mixagem básica inclusa
                  </li>
                </ul>
                <a 
                  href={`${whatsappBase}${encodeURIComponent("Salve! Quero agendar uma gravação de banda (R$ 150). Qual a disponibilidade?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full py-3.5 bg-primary text-on-primary hover:bg-cyan-300 transition-all rounded-full font-bold text-center block text-sm"
                >
                  Reservar Agora
                </a>
              </div>

              {/* Produção Completa */}
              <div className="flex flex-col p-8 rounded-xl bg-surface-container-high hover:bg-surface-variant transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">headphones</span>
                </div>
                <h4 className="font-headline text-lg font-bold mb-2">Produção Completa</h4>
                <div className="text-3xl font-black text-primary mb-2 font-headline">R$ 450</div>
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-8">Rap, Funk, Drill</span>
                <ul className="space-y-3 mb-10 flex-grow z-10 relative">
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Beat exclusivo
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Gravação + Mix & Master
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    Entrega profissional
                  </li>
                </ul>
                <a 
                  href={`${whatsappBase}${encodeURIComponent("Fala! Tenho interesse na Produção Completa (R$ 450). Quero saber mais sobre o processo.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full py-3.5 border border-outline-variant hover:border-primary hover:text-primary transition-all rounded-full font-bold text-center block text-sm"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-8 py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl font-black tracking-tighter mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`p-6 rounded-xl border transition-all cursor-pointer group ${openFaq === index ? 'bg-surface-container-high border-primary/30' : 'bg-surface-container border-transparent hover:bg-surface-container-high'}`}
              >
                <h5 className="font-headline text-lg font-bold flex justify-between items-center text-white">
                  {item.q}
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>add</span>
                </h5>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 py-24 mb-12">
          <div className="max-w-screen-2xl mx-auto rounded-3xl bg-primary-container p-12 md:p-24 flex flex-col items-center text-center gap-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdV593vUJJtcUdVGjRyHNVmz1T25973RWYeNX9tC9DOpe2T3clUxSMtF-4FCw9e65k2I6VMbv-TfLDVvJVCuPza_kUAgdyhMtcz-3DKKCpaSIlsoV1LWAMYbP6pbUy_0mfgxlGvmn7wQwgj6FsuhkSzb2iwuRC2aP_6cKtV8L2b3R1Ue7DHfyeW8VL41CWI6CcF99tSIUpC8HS_a5JXb1mLZwu3oxiOGfOOo9P2QHVDHQYcDt-y0PT1G5hCrsjmlBN9yhQ2Pcetc8"
                alt="Abstract dynamic sound waves pattern in neon cyan colors"
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black text-on-primary-container relative z-10 leading-tight">Pronto para subir <br/>de nível?</h2>
            <Link href="/contato" className="relative z-10 bg-background text-on-background px-12 py-5 rounded-full font-black text-xl hover:bg-on-surface hover:text-surface transition-all scale-100 hover:scale-105 shadow-2xl inline-block">
              Reserve sua Sessão
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <GlassPlayer />
    </>
  );
}

