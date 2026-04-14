"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  // Helper to determine if a route is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl shadow-[0_0_40px_0_rgba(35,218,237,0.06)] border-b border-white/5">
        <div className="flex justify-between items-center w-full px-8 py-5 mx-auto max-w-screen-2xl">
          <Link href="/" className="text-2xl font-black tracking-tighter text-primary font-headline">
            SonicArchitect
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              className={`${isActive("/") ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant font-medium hover:text-primary transition-all"} font-headline tracking-tight`} 
              href="/"
            >
              Estúdio
            </Link>
            <Link 
              className={`${isActive("/servicos") ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant font-medium hover:text-primary transition-all"} font-headline tracking-tight`} 
              href="/servicos"
            >
              Serviços
            </Link>
            <Link 
              className={`${isActive("/portfolio") ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant font-medium hover:text-primary transition-all"} font-headline tracking-tight`} 
              href="/portfolio"
            >
              Portfólio
            </Link>
            <Link 
              className={`${isActive("/beats") ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant font-medium hover:text-primary transition-all"} font-headline tracking-tight`} 
              href="/beats"
            >
              Beats
            </Link>
            <Link 
              className={`${isActive("/contato") ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant font-medium hover:text-primary transition-all"} font-headline tracking-tight`} 
              href="/contato"
            >
              Contato
            </Link>
          </div>
          
          <div className="flex gap-4 items-center">
            <Link href="/contato" className="bg-primary text-on-primary-container px-6 py-2.5 rounded-full font-bold font-headline tracking-tight scale-95 duration-200 ease-in-out hover:brightness-110 shadow-[0_0_15px_rgba(35,218,237,0.3)]">
              Agendar Sessão
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-surface-lowest/90 backdrop-blur-xl px-2 flex justify-between items-center z-[60] border-t border-white/5 pb-safe">
        <Link className={`flex flex-col items-center justify-center gap-1 h-full flex-1 ${isActive("/") ? "text-primary" : "text-on-surface-variant hover:text-primary transition-colors"}`} href="/">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[9px] font-bold uppercase">Início</span>
        </Link>
        <Link className={`flex flex-col items-center justify-center gap-1 h-full flex-1 ${isActive("/servicos") ? "text-primary" : "text-on-surface-variant hover:text-primary transition-colors"}`} href="/servicos">
          <span className="material-symbols-outlined">mic</span>
          <span className="text-[9px] font-bold uppercase">Serviços</span>
        </Link>
        <Link className={`flex flex-col items-center justify-center gap-1 h-full flex-1 ${isActive("/portfolio") ? "text-primary" : "text-on-surface-variant hover:text-primary transition-colors"}`} href="/portfolio">
          <span className="material-symbols-outlined">album</span>
          <span className="text-[9px] font-bold uppercase">Portfólio</span>
        </Link>
        <Link className={`flex flex-col items-center justify-center gap-1 h-full flex-1 ${isActive("/beats") ? "text-primary" : "text-on-surface-variant hover:text-primary transition-colors"}`} href="/beats">
          <span className="material-symbols-outlined">headphones</span>
          <span className="text-[9px] font-bold uppercase">Beats</span>
        </Link>
        <Link className={`flex flex-col items-center justify-center gap-1 h-full flex-1 ${isActive("/contato") ? "text-primary" : "text-on-surface-variant hover:text-primary transition-colors"}`} href="/contato">
          <span className="material-symbols-outlined">alternate_email</span>
          <span className="text-[9px] font-bold uppercase">Contato</span>
        </Link>
      </div>
    </>
  );
}
