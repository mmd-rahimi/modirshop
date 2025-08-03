import React from 'react'
import { IProductList } from './LatestProducts'
import ProductCard from './ProductCard'

function ProductList({products}: IProductList) {
  return (
    <div className='products-grid'>
        {
            products.length > 0 && 
            products.map((product) => <ProductCard product = {product} key = {product.id} />)
        }
    </div>
  )
}

export default ProductList