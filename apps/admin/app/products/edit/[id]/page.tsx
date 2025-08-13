"use client";

import { useParams, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

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

      useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`http://localhost:3001/api/products/${id}`);
            const data = await res.json();
            setFormData(data.product)
        }
        fetchProduct()
      }, [])

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
        <h1 className="text-2xl font-bold">Edit product</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          onChange={handleChange} 
          value={formData.title}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          onChange={handleChange} 
          value={formData.price}
          type="number"
          name="price"
          placeholder="price"
        />
        <input
          onChange={handleChange}
          value={formData.image} 
          type="text"
          name="image"
          placeholder="image url"
        />
        <textarea
          onChange={handleChange}
          value={formData.description} 
          name="description"
          placeholder="description"
        ></textarea>
        <select onChange={handleChange} value={formData.category} name="category">
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
