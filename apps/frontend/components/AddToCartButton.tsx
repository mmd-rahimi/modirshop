"use client"

import { useCartContext } from '@/contexts/CartContext'
import React from 'react'
import { IProduct } from './LatestProducts'

function AddToCartButton({product}: {product: IProduct}) {

    const {addToCart} = useCartContext() 

  return (
    <div>
            <button onClick={() => addToCart(product)} className="product-button">افزودن به سبد خرید</button>
    </div>
  )
}

export default AddToCartButton