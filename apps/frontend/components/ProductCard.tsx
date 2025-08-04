import Image from "next/image";
import React from "react";
import { IProduct } from "./LatestProducts";
import { enTofa } from "@/utils/Utilities";
import Link from "next/link";

function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="product-wrapper">
      <Link href={`/products/${product?.id}`} className="product-image-box">
        <Image
          width={150}
          height={150}
          src={product.image}
          alt={product.title}
        />
      </Link>

      <div className="product-info-box">
        <Link href={`/products/${product.id}`}>
          <div className="product-title">{product.title}</div>
        </Link>
        <div className="product-price-row">
          <button className="product-button">افزودن</button>
          <span className="product-price">{enTofa(product.price)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
