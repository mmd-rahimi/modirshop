"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  id: number;
  open: boolean;
  onClose: () => void;
}

export default function DeleteProductDialog({ id, open, onClose }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3001/api/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      onClose();
      router.refresh(); // رفرش کردن لیست محصولات
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4">
          Are you sure you want to delete this product?
        </h2>
        <div className="flex justify-end gap-3">
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Yes, delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
