"use client"

import { useCartContext } from "@/contexts/CartContext";
import { enTofa } from "@/utils/Utilities";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";


function Cart() {

    const {cart, getTotal, removeFromCart, updateQuantity} = useCartContext()

  return (
    <div className="cart-grid">
      <div className="cart-box">
        <h2>سبد خرید</h2>
        {cart.length == 0 && <div>سبد خرید خالی است</div>}
        {
            cart.length > 0 && (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>کالا</th>
                            <th>قیمت کالا</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cart.map((product) => (
                                <tr key={product._id}>
                                    <td className="cart-product">
                                        <Image className="cart-product-image" src={product.image} width={80} height={80} alt={product.title}/>
                                        {product.title}
                                        <input type="number" value={product.quantity} min={1}
                                        onChange={(event) => updateQuantity(product._id, Number(event.target.value))}
                                        />
                                        <button onClick={() => removeFromCart(product._id)}><Trash /></button>
                                    </td>
                                    <td>
                                        {enTofa(product.price)}
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td>مجموع</td>
                            <td>{enTofa(getTotal())}</td>
                        </tr>
                    </tbody>
                </table>
            )
        }
      </div>

      {
        cart.length > 0 && (
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
