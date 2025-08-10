"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

export interface INewProduct {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

function NewProduct() {
  const [formData, setFormData] = useState<INewProduct>({
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "لپتاپ",
  });

  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.push("/products");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          onChange={handleChange}
          type="number"
          name="price"
          placeholder="price"
        />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="image url"
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="description"
        ></textarea>
        <select onChange={handleChange} name="category">
          <option value="لپتاپ">لپتاپ</option>
          <option value="موبایل">موبایل</option>
          <option value="تبلت">تبلت</option>
        </select>
        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}

export default NewProduct;
