"use client";

import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import DeleteProductDialog from "./DeleteProductDialog";
import { IProduct } from "@/types/types";

export default function ProductsTable({ products }: { products: IProduct[] }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold">Product page</h1>

      <Link href="/products/new">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Add new product
        </button>
      </Link>

      <table className="mt-6 border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border">
              <td className="p-2 border">{product.title}</td>
              <td className="p-2 border">
                <div className="flex flex-row gap-4">
                  <Link href={`/products/edit/${product._id}`}>
                    <Edit size={30} className="text-blue-600 cursor-pointer" />
                  </Link>
                  <div className=""
                    onClick={() => {
                      setSelectedId(product._id);
                      setOpenDialog(true);
                    }}
                  >
                    <Trash size={30} className="text-red-600 cursor-pointer" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteProductDialog
        id={selectedId ?? 0}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </div>
  );
}
