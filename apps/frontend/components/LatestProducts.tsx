import React from 'react'
import ProductList from './ProductList'

export interface IProduct {
    id: number,
    title: string,
    price: string,
    image: string,
    description?: string
}

export interface IProductList {
    products: IProduct[]
}

const products = [
  {
    "id": 1,
    "title": "هدفون بی‌سیم مدل X200",
    "price": "29900",
    "image": "/images/1.jpg",
    "description": "یه محصول خفن"
  },
  {
    "id": 2,
    "title": "گوشی موبایل سامسونگ A73",
    "price": "125000",
    "image": "/images/2.jpg",
    "description": "یه محصول خفن"
  },
  {
    "id": 3,
    "title": "لپ‌تاپ اچ‌پی 15 اینچ",
    "price": "320000",
    "image": "/images/3.jpg",
    "description": "یه محصول خفن"
  },
  {
    "id": 4,
    "title": "ماوس گیمینگ ریکو مدل Pro",
    "price": "85000",
    "image": "/images/1.jpg",
    "description": "یه محصول خفن"
  }
]

function LatestProducts() {
    
  return (
    <div className='new-products'>
        <h2 className='title'>محصولات پرفروش</h2>
        <ProductList products = {products}/>
    </div>
  )
}

export default LatestProducts