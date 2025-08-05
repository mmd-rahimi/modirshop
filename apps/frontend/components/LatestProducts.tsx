import React from 'react'
import ProductList from './ProductList'

export interface IProduct {
    _id: number,
    title: string,
    price: string,
    image: string,
    description?: string
}

export interface IProductList {
    products: IProduct[]
}


async function LatestProducts() {

  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json()
    
  return (
    <div className='new-products'>
        <h2 className='title'>محصولات پرفروش</h2>
        <ProductList products = {products}/>
    </div>
  )
}

export default LatestProducts