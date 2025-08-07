"use client"

import { ReactNode } from "react"
import CartProvider from "@/contexts/CartContext"

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}