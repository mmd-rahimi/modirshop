import React from 'react'
import ProductList from './ProductList'

export interface IProduct {
    id: number,
    title: string,
    price: string,
    image: string
}

export interface IProductList {
    products: IProduct[]
}

const products = [
  {
    "id": 1,
    "title": "هدفون بی‌سیم مدل X200",
    "price": "2990000",
    "image": "/images/1.jpg"
  },
  {
    "id": 2,
    "title": "گوشی موبایل سامسونگ A73",
    "price": "12500000",
    "image": "/images/2.jpg"
  },
  {
    "id": 3,
    "title": "لپ‌تاپ اچ‌پی 15 اینچ",
    "price": "32000000",
    "image": "/images/3.jpg"
  },
  {
    "id": 4,
    "title": "ماوس گیمینگ ریکو مدل Pro",
    "price": "850000",
    "image": "/images/1.jpg"
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