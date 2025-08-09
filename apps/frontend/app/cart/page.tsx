"use client";

import { useCartContext } from "@/contexts/CartContext";
import { enTofa } from "@/utils/Utilities";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface IUserInfo {
  name: string;
  email: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
}

function Cart() {
  const { cart, getTotal, removeFromCart, updateQuantity, clearCart } =
    useCartContext();

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const orderData = {
      user: userInfo,
      cart,
      totalPrice: getTotal(),
    };

    try {
      const res = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        alert("سفارش شما ثبت شد");
        clearCart();
        setUserInfo({
          name: "",
          email: "",
          country: "",
          city: "",
          address: "",
          postalCode: ""
        });
      } else {
        alert("خطا در ثبت سفارش");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="cart-grid">
      <div className="cart-box">
        <h2>سبد خرید</h2>
        {cart.length == 0 && <div>سبد خرید خالی است</div>}
        {cart.length > 0 && (
          <table className="cart-table">
            <thead>
              <tr>
                <th>کالا</th>
                <th>قیمت کالا</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td className="cart-product">
                    <Image
                      className="cart-product-image"
                      src={product.image}
                      width={80}
                      height={80}
                      alt={product.title}
                    />
                    {product.title}
                    <input
                      type="number"
                      value={product.quantity}
                      min={1}
                      onChange={(event) =>
                        updateQuantity(product._id, Number(event.target.value))
                      }
                    />
                    <button onClick={() => removeFromCart(product._id)}>
                      <Trash />
                    </button>
                  </td>
                  <td>{enTofa(product.price)}</td>
                </tr>
              ))}
              <tr>
                <td>مجموع</td>
                <td>{enTofa(getTotal())}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-box">
          <h2 className="cart-title">اطلاعات کاربر</h2>
          <form className="cart-form" onSubmit={handleSubmit}>
            <input
              value={userInfo.name}
              onChange={handleChange}
              required
              name="name"
              type="text"
              className="cart-input"
              placeholder="نام"
            />
            <input
              value={userInfo.email}
              onChange={handleChange}
              required
              name="email"
              type="text"
              className="cart-input"
              placeholder="ایمیل"
            />
            <input
              value={userInfo.country}
              onChange={handleChange}
              required
              name="country"
              type="text"
              className="cart-input"
              placeholder="کشور"
            />
            <input
              value={userInfo.city}
              onChange={handleChange}
              required
              name="city"
              type="text"
              className="cart-input"
              placeholder="شهر"
            />
            <input
              value={userInfo.address}
              onChange={handleChange}
              required
              name="address"
              type="text"
              className="cart-input"
              placeholder="آدرس"
            />
            <input
              value={userInfo.postalCode}
              onChange={handleChange}
              name="postalCode"
              type="text"
              className="cart-input"
              placeholder="کد پستی"
            />
            <button className="cart-button">پرداخت آنلاین</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
