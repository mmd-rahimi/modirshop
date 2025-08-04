import { enTofa } from "@/utils/Utilities";
import Image from "next/image";
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

function Cart() {

    let totalPrice: number = 0
    products.forEach((product) => totalPrice += Number(product.price))

  return (
    <div className="cart-grid">
      <div className="cart-box">
        <h2>سبد خرید</h2>
        {products.length == 0 && <div>سبد خرید خالی است</div>}
        {
            products.length > 0 && (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>کالا</th>
                            <th>قیمت کالا</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td className="cart-product">
                                        <Image className="cart-product-image" src={product.image} width={80} height={80} alt={product.title}/>
                                        {product.title}
                                    </td>
                                    <td>
                                        {enTofa(product.price)}
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td>مجموع</td>
                            <td>{enTofa(totalPrice)}</td>
                        </tr>
                    </tbody>
                </table>
            )
        }
      </div>

      {
        products.length > 0 && (
        <div className="cart-box">
            <h2 className="cart-title">اطلاعات کاربر</h2>
            <form className="cart-form">
                <input type="text" className="cart-input" placeholder="نام"/>
                <input type="text" className="cart-input" placeholder="ایمیل"/>
                <input type="text" className="cart-input" placeholder="شهر"/>
                <input type="text" className="cart-input" placeholder="کشور"/>
                <input type="text" className="cart-input" placeholder="آدرس"/>
                <input type="text" className="cart-input" placeholder="کد پستی"/>
                <button className="cart-button">پرداخت آنلاین</button>
            </form>
        </div>
    )
      }
    </div>
  );
}

export default Cart;
