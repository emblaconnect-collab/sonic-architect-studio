"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface LicenseOption {
  id: string;
  name: string;
  price: number;
}

export const LICENSE_OPTIONS: LicenseOption[] = [
  { id: "basica", name: "Licença Básica", price: 179 },
  { id: "premium", name: "Licença Premium", price: 599 },
  { id: "exclusiva", name: "Direitos Exclusivos", price: 0 }, // Sob consulta
];

export interface CartItem {
  beatId: number;
  title: string;
  genre: string;
  img: string;
  license: LicenseOption;
}

interface CartContextType {
  items: CartItem[];
  isDrawerOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (beatId: number) => void;
  clearCart: () => void;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  openDrawer: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = useCallback((item: CartItem) => {
    setItems((prev) => {
      // Se o beat já está no carrinho, substitui a licença
      const exists = prev.findIndex((i) => i.beatId === item.beatId);
      if (exists >= 0) {
        const updated = [...prev];
        updated[exists] = item;
        return updated;
      }
      return [...prev, item];
    });
    setIsDrawerOpen(true);
  }, []);

  const removeFromCart = useCallback((beatId: number) => {
    setItems((prev) => prev.filter((i) => i.beatId !== beatId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const toggleDrawer = useCallback(() => setIsDrawerOpen((p) => !p), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);

  const totalItems = items.length;
  const subtotal = items.reduce((acc, item) => acc + item.license.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isDrawerOpen,
        addToCart,
        removeFromCart,
        clearCart,
        toggleDrawer,
        closeDrawer,
        openDrawer,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
