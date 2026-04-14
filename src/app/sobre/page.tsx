import { Header } from "@/components/Header";
import { GlassPlayer } from "@/components/GlassPlayer";

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-32">
        <div className="flex items-center justify-center min-h-[50vh] text-on-surface-variant uppercase tracking-widest text-sm py-20">
          Aguardando design: Sobre
        </div>
      </main>
      <GlassPlayer />
    </>
  );
}
