import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[409px] flex items-center justify-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnYaHWUCGfaE_E3b_dyoII9wvalpLkDPXA8044uXuh3RdBr3zE_FQB0Z4FuObzb8w2EWcbnduLT8j-03wj8ecZdMfzqFlWG6NFcq6_cfvM299P0XQp0lkivANl_BiHs7Zbm28pkgvMpGXjZyqKlReWJPG0cyzAA5dndqBxj2eleVHQWz4hLiQLWRAWzXstMIJMX-w_LqA5rwQDUPsEERbBys_VB1CAJqo1q_rJrpXhq3zTnSGXUPTo1PtyEJt3n5VxwzH8OVF1XeA"
              alt="Cinematic shot of a professional recording studio control room"
              fill
              className="object-cover opacity-30 grayscale contrast-125"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter text-white opacity-90">CONTATO</h1>
            <p className="text-primary font-body tracking-[0.3em] uppercase mt-4 text-sm font-semibold">Eleve seu som a padrões industriais</p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
              
              <h2 className="text-3xl font-headline font-bold mb-8 text-white">Iniciar um Projeto</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold ml-1">Nome Completo</label>
                    <input 
                      className="w-full bg-surface-container-lowest border-none focus:ring-0 focus:border-b-2 focus:border-primary text-white p-4 rounded-lg transition-all duration-300 placeholder:text-outline/50" 
                      placeholder="Seu Nome" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold ml-1">Endereço de E-mail</label>
                    <input 
                      className="w-full bg-surface-container-lowest border-none focus:ring-0 focus:border-b-2 focus:border-primary text-white p-4 rounded-lg transition-all duration-300 placeholder:text-outline/50" 
                      placeholder="nome@dominio.com" 
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold ml-1">Número de Telefone</label>
                    <input 
                      className="w-full bg-surface-container-lowest border-none focus:ring-0 focus:border-b-2 focus:border-primary text-white p-4 rounded-lg transition-all duration-300 placeholder:text-outline/50" 
                      placeholder="+55 11 00000-0000" 
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold ml-1">Tipo de Projeto</label>
                    <select className="w-full bg-surface-container-lowest border-none focus:ring-0 focus:border-b-2 focus:border-primary text-white p-4 rounded-lg transition-all duration-300">
                      <option>Produção Musical</option>
                      <option>Mixagem e Masterização</option>
                      <option>Sessão de Gravação</option>
                      <option>Sound Design Comercial</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold ml-1">Mensagem</label>
                  <textarea 
                    className="w-full bg-surface-container-lowest border-none focus:ring-0 focus:border-b-2 focus:border-primary text-white p-4 rounded-lg transition-all duration-300 placeholder:text-outline/50" 
                    placeholder="Conte-nos sobre sua visão..." 
                    rows={5}
                  ></textarea>
                </div>

                <button 
                  className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold uppercase tracking-widest rounded-lg hover:shadow-[0_10px_30px_rgba(35,218,237,0.2)] transition-all duration-300 active:scale-[0.98]" 
                  type="submit"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-primary font-headline text-lg font-bold uppercase tracking-widest mb-4">Localização</h3>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <p className="text-on-surface-variant leading-relaxed">
                    Studio SonicArchitect<br/>
                    São Paulo, SP<br/>
                    Brasil
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-primary font-headline text-lg font-bold uppercase tracking-widest mb-4">Canais Diretos</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <a className="text-on-surface hover:text-primary transition-colors" href="mailto:contato@sonicarchitect.com">contato@sonicarchitect.com</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-primary">chat</span>
                    <a className="text-on-surface hover:text-primary transition-colors" href="https://wa.me/5519997791763?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20contato%20e%20gostaria%20de%20falar%20com%20a%20equipe." target="_blank" rel="noopener noreferrer">WhatsApp Direto</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-primary font-headline text-lg font-bold uppercase tracking-widest mb-4">Redes Sociais</h3>
                <div className="flex gap-6 items-center">
                  {/* Instagram */}
                  <a className="hover:opacity-80 transition-opacity" href="https://instagram.com/erikvnc_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="url(#instagram-gradient)" className="w-8 h-8 hover:scale-110 transition-transform">
                      <defs>
                        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  {/* Spotify */}
                  <a className="hover:opacity-80 transition-opacity" href="https://open.spotify.com/artist/4X9y98r1Jp1f82y85q8y1q" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                    <svg viewBox="0 0 24 24" fill="#1DB954" className="w-8 h-8 hover:scale-110 transition-transform">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.261 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a className="hover:opacity-80 transition-opacity" href="https://www.youtube.com/@Knucks" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="#FF0000" className="w-9 h-9 hover:scale-110 transition-transform">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Representation */}
            <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-highest relative group border-none shadow-2xl">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_u5ceyFgpjfXja0kpabpqr9JXS48k_CW0CVaSdkvpwsRInN_XbjJfXrUfpMrzBNPHzmo7SYIlgmPCMIK8js4fQLCHk90a7o9ZeZPs0z2jUybbFgihwI9oj-Kg4tjzrrGnyvad5PkQ3y5E5__ptR83qO8WyAjQ7BRN33lMxcYNLMAxWSSg2DJ1xrira1nnMMfptN1WS9j7tczmcVq7GIyE8lpLMHAOFboOa0NS36xNws-0-SG3p4Hy4d3P6_XKKwBGZuOirC9JtIw"
                alt="São Paulo industrial district view"
                fill
                className="object-cover grayscale brightness-50 contrast-125 transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping"></div>
                  <span className="material-symbols-outlined text-primary text-5xl relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] text-primary uppercase font-bold tracking-widest">
                SonicArchitect HQ
              </div>
            </div>
            
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
