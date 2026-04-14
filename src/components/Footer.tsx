export function Footer() {
  return (
    <footer className="w-full py-16 px-8 mt-auto bg-[#0c0f11] font-body text-sm tracking-wide border-t border-white/5 pb-32 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-2xl mx-auto text-center md:text-left">
        
        <div>
          <div className="text-xl font-black text-primary mb-6 font-headline tracking-tighter">
            SonicArchitect | KM29
          </div>
          <p className="text-on-surface-variant max-w-xs leading-relaxed mx-auto md:mx-0">
            O hub definitivo para a produção de música urbana. Onde a técnica encontra a alma da rua.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Menu</h5>
            <ul className="flex flex-col gap-3">
              <li><a className="text-on-surface-variant hover:text-white transition-colors duration-300" href="/">Estúdio</a></li>
              <li><a className="text-on-surface-variant hover:text-white transition-colors duration-300" href="/servicos">Serviços</a></li>
              <li><a className="text-on-surface-variant hover:text-white transition-colors duration-300" href="/portfolio">Portfólio</a></li>
              <li><a className="text-on-surface-variant hover:text-white transition-colors duration-300" href="/contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Redes Sociais</h5>
            <ul className="flex flex-col gap-3">
              <li><a className="text-on-surface-variant hover:text-white transition-colors duration-300" href="https://instagram.com/erikvnc_" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="text-on-surface-variant hover:text-white transition-colors duration-300" href="https://www.youtube.com/@Knucks" target="_blank" rel="noopener noreferrer">Youtube</a></li>
              <li><a className="text-on-surface-variant hover:text-white transition-colors duration-300" href="https://open.spotify.com/artist/4X9y98r1Jp1f82y85q8y1q" target="_blank" rel="noopener noreferrer">Spotify</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-6">
          <h5 className="text-white font-bold uppercase tracking-widest text-xs">Newsletter</h5>
          <div className="flex w-full md:w-auto">
            <input 
              className="bg-surface border-none text-on-surface px-4 py-3 rounded-l-lg w-full focus:ring-1 focus:ring-primary outline-none" 
              placeholder="Seu email" 
              type="email"
            />
            <button className="bg-primary text-on-primary-container px-4 py-3 rounded-r-lg font-bold hover:brightness-110 transition-all uppercase">
              Assinar
            </button>
          </div>
          <p className="text-on-surface-variant text-xs md:text-right mt-auto opacity-70">
            © 2024 Sonic Architect. Engineered for the Streets, Designed for the Elite.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
