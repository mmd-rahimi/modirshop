import AddToCartButton from "@/components/AddToCartButton";
import { enTofa } from "@/utils/Utilities";
import Link from "next/link";
import React from "react";


export interface IProductDetailsProps {
  params: { id: number | string };
}

async function page({ params }: IProductDetailsProps) {

  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json()

  return (
    // product detail component
    <div className="product-detail">
      <div className="product-detail-content">
        {/* image */}
        <div className="new-product-image">
          <img src={product?.image} alt={product?.title} />
        </div>
        {/* title & des & category */}
        <div className="new-product-info">
          <h1 className="new-product-title">{product?.title}</h1>
          <span>دسته بندی: </span>
          <Link href={`/products?category=${product.category}`}>{product?.category}</Link>
          <br />
          <br />
          <p className="new-product-description">{product?.description}</p>
          {/* price & button */}
          <div className="product-price-row">
            <div className="product-price">{enTofa(product?.price)}</div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
