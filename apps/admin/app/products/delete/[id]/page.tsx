"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

function DeleteProduct() {
  const router = useRouter();
  const { id } = useParams();

  const handleClick = async () => {
    const res = await fetch(`http://localhost:3001/api/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/products");
    }
  };

  return (
    <div>
      <h1>Are you sure to delete this product?</h1>
      <button onClick={handleClick}>Yes</button>
      <button
        onClick={() => {
          router.push("/products");
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default DeleteProduct;
