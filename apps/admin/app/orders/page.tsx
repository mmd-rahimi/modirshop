import React from "react";
import { enTofa } from "@/utils/Utilities";

interface CartItem {
  title: string;
  quantity: number;
}

interface User {
  name: string;
  email: string;
  country: string;
  city: string;
  postalCode: string;
}

interface Order {
  _id: string;
  user: User;
  totalPrice: number;
  status: string;
  createAt: string;
  cart: CartItem[];
}

async function Orders() {
  const res = await fetch("http://localhost:3001/api/orders");
  const orders: Order[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold">Orders page</h1>
          <table>
      <thead>
        <tr>
          <th>نام کاربر</th>
          <th>ایمیل</th>
          <th>کشور - شهر - کدپستی</th>
          <th>جمع کل</th>
          <th>وضعیت</th>
          <th>تاریخ</th>
          <th>محصولات</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order.user.name}</td>
            <td>{order.user.email}</td>
            <td>
              {order.user.country}-{order.user.city}-{order.user.postalCode}
            </td>
            <td>{`${enTofa(order.totalPrice)}  تومان`}</td>
            <td>{order.status}</td>
            <td>{new Date(order.createAt).toLocaleDateString("fa-IR")}</td>
            <td>{order.cart.map((item) => item.title + item.quantity)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Orders;