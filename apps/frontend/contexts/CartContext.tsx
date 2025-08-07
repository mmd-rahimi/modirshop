"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

export interface ICartItem {
  _id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

export type ProductType = Omit<ICartItem, "quantity">;

export interface ICartContext {
  cart: ICartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, newQuantity: number) => void;
  getTotal: () => number;
}

export const CartContext = createContext<ICartContext | null>(null);

// custom hook for context
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const selectedProduct = prev.find((item) => item._id == product._id);

      if (!selectedProduct) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    });
  };

  const removeFromCart = (productId: string | number) => {
    setCart((prev) => prev.filter((product) => product._id != productId));
  };

  const updateQuantity = (productId: string | number, newQuantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  function getTotal() {
    let total = 0;
    cart.forEach((item) => (total += item.quantity * Number(item.price)));
    return total;
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
