"use client";

import { useParams, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export interface IEditProduct {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

function EditProduct() {

    const {id} = useParams()
    const router = useRouter()

      const [formData, setFormData] = useState<IEditProduct>({
        title: "",
        price: 0,
        image: "",
        description: "",
        category: "لپتاپ",
      });

        const handleChange = (
          e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
        ) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();

           const res = await fetch(`http://localhost:3001/api/products/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
           })
           if(res.ok) {
                router.push("/products")
           }
        }

  return (
    <div>
        <h1>Edit product</h1>
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
        <button type="submit">Save new info</button>
      </form>
    </div>
  );
}

export default EditProduct;
