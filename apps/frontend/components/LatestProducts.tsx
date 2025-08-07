import React from 'react'
import ProductList from './ProductList'
import { ICategoryProps } from '@/app/products/page'

export interface IProduct {
    _id: number,
    title: string,
    price: string,
    image: string,
    description?: string
    category?: string
}

export interface IProductList {
    products: IProduct[]
}


async function LatestProducts({searchParams}: ICategoryProps) {

  const category = searchParams?.category

  // conditional url for category
  const url = category ?
  `http://localhost:3000/api/products?category=${category}` : 
  "http://localhost:3000/api/products"

  const res = await fetch(url);
  const products = await res.json()
    
  return (
    <div className='new-products'>
        <h2 className='title'>{category ? `محصولات ${category}` : 'محصولات پرفروش'}</h2>
        <ProductList products = {products}/>
    </div>
  )
}

export default LatestProducts