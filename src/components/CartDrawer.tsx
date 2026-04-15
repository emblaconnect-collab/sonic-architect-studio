"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeFromCart, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[81] transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-surface-container border-l border-white/5 flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.5)]">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shopping_cart
              </span>
              <h2 className="font-headline font-black text-xl tracking-tight uppercase">
                Carrinho
              </h2>
              {items.length > 0 && (
                <span className="bg-primary/20 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {items.length}
                </span>
              )}
            </div>
            <button
              onClick={closeDrawer}
              className="text-on-surface-variant hover:text-white transition-colors p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-on-surface-variant">
                <span className="material-symbols-outlined text-5xl mb-4 opacity-30">
                  shopping_cart
                </span>
                <p className="font-headline font-bold text-lg mb-2">
                  Carrinho vazio
                </p>
                <p className="text-sm">
                  Adicione beats ao carrinho para continuar.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.beatId}
                  className="flex items-center gap-4 bg-surface-container-high p-4 rounded-xl border border-white/5"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden relative flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline font-bold text-sm uppercase tracking-tight truncate">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest">
                      {item.license.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-headline font-black text-primary text-sm">
                      {item.license.price > 0
                        ? `R$ ${item.license.price}`
                        : "Consulta"}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.beatId)}
                      className="text-on-surface-variant hover:text-error transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-bold text-sm uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="font-headline font-black text-xl text-primary">
                  {subtotal > 0 ? `R$ ${subtotal}` : "Sob Consulta"}
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="block w-full bg-primary text-on-primary py-4 rounded-full font-headline font-black text-sm uppercase tracking-wider text-center hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(35,218,237,0.3)]"
              >
                Ir para o Checkout
              </Link>
              <button
                onClick={closeDrawer}
                className="block w-full text-on-surface-variant font-bold text-xs uppercase tracking-widest text-center py-2 hover:text-white transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
