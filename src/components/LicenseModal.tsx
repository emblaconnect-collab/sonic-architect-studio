"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { LICENSE_OPTIONS, LicenseOption } from "@/contexts/CartContext";

interface LicenseModalProps {
  beat: {
    id: number;
    title: string;
    genre: string;
    img: string;
    price: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onSelect: (license: LicenseOption) => void;
}

function parseBeatPrice(priceText: string): number {
  const numeric = Number(priceText.replace(/[^\d]/g, ""));
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 179;
}

export function LicenseModal({ beat, isOpen, onClose, onSelect }: LicenseModalProps) {
  const [selected, setSelected] = useState<string>("basica");

  const modalLicenses = useMemo(() => {
    const basePrice = parseBeatPrice(beat.price);
    return LICENSE_OPTIONS.map((license) =>
      license.id === "basica" ? { ...license, price: basePrice } : license,
    );
  }, [beat.price]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    const license = modalLicenses.find((l) => l.id === selected);
    if (license) {
      onSelect(license);
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div
          className="bg-surface-container border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_0_60px_rgba(35,218,237,0.1)] animate-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header do Modal */}
          <div className="flex items-center gap-4 p-6 border-b border-white/5">
            <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
              <Image
                src={beat.img}
                alt={beat.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-headline font-black text-lg uppercase tracking-tight truncate">
                {beat.title}
              </h3>
              <p className="text-on-surface-variant text-xs">{beat.genre}</p>
            </div>
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-white transition-colors p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Opções de Licença */}
          <div className="p-6 space-y-3">
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Escolha a Licença
            </h4>

            {modalLicenses.map((license) => (
              <label
                key={license.id}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selected === license.id
                    ? "border-primary bg-primary/5"
                    : "border-outline-variant/30 bg-surface-container-high hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="license"
                    value={license.id}
                    checked={selected === license.id}
                    onChange={() => setSelected(license.id)}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selected === license.id
                        ? "border-primary"
                        : "border-outline-variant"
                    }`}
                  >
                    {selected === license.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                  <span className="font-headline font-bold text-sm">
                    {license.name}
                  </span>
                </div>
                <span className="font-headline font-black text-primary">
                  {license.price > 0 ? `R$ ${license.price}` : "Sob Consulta"}
                </span>
              </label>
            ))}
          </div>

          {/* Footer do Modal */}
          <div className="p-6 pt-0">
            <button
              onClick={handleConfirm}
              className="w-full bg-primary text-on-primary py-4 rounded-full font-headline font-black text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(35,218,237,0.3)] flex items-center justify-center gap-2"
            >
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                add_shopping_cart
              </span>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
