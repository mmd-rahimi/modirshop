import Image from "next/image";
import React from "react";
import { IProduct } from "./LatestProducts";
import { enTofa } from "@/utils/Utilities";

function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="product-wrapper">
      <div className="product-image-box">
        <Image
          width={150}
          height={150}
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-info-box">
        <div className="product-title">{product.title}</div>
        <div className="product-price-row">
          <button className="product-button">افزودن سبد خرید</button>
          <span className="product-price">{enTofa(product.price)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
