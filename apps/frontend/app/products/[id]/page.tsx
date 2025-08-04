import { enTofa } from "@/utils/Utilities";
import React from "react";

const products = [
  {
    id: 1,
    title: "هدفون بی‌سیم مدل X200",
    price: "29900",
    image: "/images/1.jpg",
    description: "یه محصول خفن",
  },
  {
    id: 2,
    title: "گوشی موبایل سامسونگ A73",
    price: "125000",
    image: "/images/2.jpg",
    description: "یه محصول خفن",
  },
  {
    id: 3,
    title: "لپ‌تاپ اچ‌پی 15 اینچ",
    price: "320000",
    image: "/images/3.jpg",
    description: "یه محصول خفن",
  },
  {
    id: 4,
    title: "ماوس گیمینگ ریکو مدل Pro",
    price: "85000",
    image: "/images/1.jpg",
    description: "یه محصول خفن",
  },
];

export interface IProductDetailsProps {
  params: { id: number | string };
}

function page({ params }: IProductDetailsProps) {
  const { id } = params;

  const product = products.find((item) => item.id == id);

  return (
    // product detail component
    <div className="product-detail">
      <div className="product-detail-content">
        {/* image */}
        <div className="new-product-image">
          <img src={product?.image} alt={product?.title} />
        </div>
        {/* title & des */}
        <div className="new-product-info">
          <h1 className="new-product-title">{product?.title}</h1>
          <p className="new-product-description">{product?.description}</p>
          {/* price & button */}
          <div className="product-price-row">
            <div className="product-price">{enTofa(product?.price)}</div>
            <button className="product-button">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
