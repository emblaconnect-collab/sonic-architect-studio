"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassPlayer } from "@/components/GlassPlayer";
import { useCart } from "@/contexts/CartContext";

const WA = "https://wa.me/5519997791763?text=";

export default function Checkout() {
  const { items, removeFromCart, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("pix");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const paymentLabels: Record<string, string> = {
    pix: "PIX",
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
  };

  const handleFinalize = () => {
    if (items.length === 0) return;

    const beatsList = items
      .map(
        (item, i) =>
          `${i + 1}. ${item.title} — ${item.license.name} (${
            item.license.price > 0 ? `R$ ${item.license.price}` : "Sob Consulta"
          })`
      )
      .join("\n");

    const totalText =
      subtotal > 0
        ? `R$ ${subtotal}`
        : "Sob Consulta (contém itens exclusivos)";

    const message = `🎵 *NOVO PEDIDO — SonicArchitect Studio*

📋 *Dados do Cliente:*
Nome: ${form.name || "Não informado"}
Email: ${form.email || "Não informado"}
Telefone: ${form.phone || "Não informado"}

🎹 *Beats Selecionados:*
${beatsList}

💳 *Método de Pagamento:* ${paymentLabels[paymentMethod]}

💰 *Total:* ${totalText}

Gostaria de finalizar a compra!`;

    window.open(
      `${WA}${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Header />

      <main className="flex-1 pt-24 pb-28 md:pb-24">
        <div className="max-w-screen-2xl mx-auto px-6 py-12 lg:py-20">
          {/* Breadcrumb */}
          <div className="mb-12">
            <Link
              href="/beats"
              className="inline-flex items-center text-primary hover:gap-3 gap-2 transition-all duration-300 group"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              <span className="font-headline font-bold uppercase tracking-wider text-sm">
                Voltar para Beats
              </span>
            </Link>
          </div>

          {items.length === 0 ? (
            /* Carrinho Vazio */
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-6 block">
                shopping_cart
              </span>
              <h1 className="text-3xl font-headline font-black uppercase tracking-tight mb-4">
                Carrinho Vazio
              </h1>
              <p className="text-on-surface-variant text-lg mb-8">
                Você ainda não adicionou nenhum beat ao carrinho.
              </p>
              <Link
                href="/beats"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-black text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_20px_rgba(35,218,237,0.3)]"
              >
                <span className="material-symbols-outlined text-lg">
                  headphones
                </span>
                Explorar Beats
              </Link>
            </div>
          ) : (
            /* Grid principal */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
              {/* Coluna Esquerda: Dados + Pagamento */}
              <div className="lg:col-span-7 space-y-12">
                <section>
                  <h1 className="text-4xl lg:text-5xl font-headline font-bold tracking-tighter text-on-surface mb-8">
                    Checkout
                  </h1>

                  <div className="space-y-8">
                    <h2 className="text-xl font-headline font-semibold text-primary uppercase tracking-widest">
                      Dados do Comprador
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                          Nome Completo
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant py-3 px-0 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all"
                          placeholder="Seu nome"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                          Email
                        </label>
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant py-3 px-0 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all"
                          placeholder="seu@email.com"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col space-y-2 md:col-span-2">
                        <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                          Telefone / WhatsApp
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant py-3 px-0 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all"
                          placeholder="(00) 00000-0000"
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Métodos de Pagamento */}
                <section className="space-y-8">
                  <h2 className="text-xl font-headline font-semibold text-primary uppercase tracking-widest">
                    Método de Pagamento
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* PIX */}
                    <label
                      className={`relative flex items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all group ${
                        paymentMethod === "pix"
                          ? "border-primary bg-primary/5"
                          : "border-outline-variant bg-surface-container hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="pix"
                        checked={paymentMethod === "pix"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center space-y-3">
                        <span
                          className={`material-symbols-outlined text-3xl ${
                            paymentMethod === "pix"
                              ? "text-primary"
                              : "text-on-surface-variant group-hover:text-primary"
                          }`}
                        >
                          qr_code_2
                        </span>
                        <span className="font-headline font-bold text-sm tracking-tighter uppercase">
                          PIX
                        </span>
                      </div>
                    </label>

                    {/* Crédito */}
                    <label
                      className={`relative flex items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all group ${
                        paymentMethod === "credit"
                          ? "border-primary bg-primary/5"
                          : "border-outline-variant bg-surface-container hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="credit"
                        checked={paymentMethod === "credit"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center space-y-3">
                        <span
                          className={`material-symbols-outlined text-3xl ${
                            paymentMethod === "credit"
                              ? "text-primary"
                              : "text-on-surface-variant group-hover:text-primary"
                          }`}
                        >
                          credit_card
                        </span>
                        <span className="font-headline font-bold text-sm tracking-tighter">
                          Crédito
                        </span>
                      </div>
                    </label>

                    {/* Débito */}
                    <label
                      className={`relative flex items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all group ${
                        paymentMethod === "debit"
                          ? "border-primary bg-primary/5"
                          : "border-outline-variant bg-surface-container hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="debit"
                        checked={paymentMethod === "debit"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center space-y-3">
                        <span
                          className={`material-symbols-outlined text-3xl ${
                            paymentMethod === "debit"
                              ? "text-primary"
                              : "text-on-surface-variant group-hover:text-primary"
                          }`}
                        >
                          account_balance
                        </span>
                        <span className="font-headline font-bold text-sm tracking-tighter">
                          Débito
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-8 pt-8 opacity-60">
                    <div className="flex items-center space-x-3">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        lock
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Checkout Seguro
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        verified_user
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Garantia de Entrega
                      </span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Coluna Direita: Resumo do Pedido */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <div className="bg-surface-container p-8 rounded-3xl relative overflow-hidden border border-white/5">
                    {/* Glow decorativo */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                    <h2 className="text-2xl font-headline font-bold tracking-tighter mb-8">
                      Resumo do Pedido
                    </h2>

                    {/* Lista de Beats */}
                    <div className="space-y-4 mb-8">
                      {items.map((item) => (
                        <div
                          key={item.beatId}
                          className="flex items-center space-x-4"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                            <Image
                              src={item.img}
                              alt={item.title}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="font-headline font-bold tracking-tight text-on-surface truncate">
                              {item.title}
                            </h3>
                            <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">
                              {item.license.name}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="font-headline font-bold text-primary">
                              {item.license.price > 0
                                ? `R$ ${item.license.price}`
                                : "Consulta"}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.beatId)}
                              className="text-on-surface-variant hover:text-error transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">
                                delete
                              </span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-4 pt-6 border-t border-outline-variant/30">
                      <div className="flex justify-between items-center text-on-surface-variant">
                        <span className="text-sm font-bold uppercase tracking-widest">
                          Subtotal
                        </span>
                        <span className="font-headline font-bold">
                          {subtotal > 0
                            ? `R$ ${subtotal}`
                            : "Sob Consulta"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-on-surface-variant">
                        <span className="text-sm font-bold uppercase tracking-widest">
                          Pagamento
                        </span>
                        <span className="font-headline font-bold">
                          {paymentLabels[paymentMethod]}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-4 text-2xl">
                        <span className="font-headline font-bold tracking-tighter text-on-surface">
                          Total
                        </span>
                        <span className="font-headline font-black text-primary">
                          {subtotal > 0
                            ? `R$ ${subtotal}`
                            : "Sob Consulta"}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={handleFinalize}
                      className="w-full mt-10 bg-primary text-on-primary py-5 rounded-full font-headline font-black text-lg uppercase tracking-tighter shadow-[0_0_20px_rgba(35,218,237,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-xl">
                        send
                      </span>
                      Finalizar Compra
                    </button>

                    <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest mt-6 leading-relaxed">
                      Ao finalizar, você será direcionado ao WhatsApp
                      <br />
                      para confirmar o pagamento com o produtor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <GlassPlayer />
    </>
  );
}
