import { Edit, Link, Trash } from "lucide-react";
import React from "react";

export interface IProduct {
  _id: number;
  title: string;
  price: string;
  image: string;
  description?: string;
  category?: string;
}

async function Products() {
  const res = await fetch("http://localhost:3000/api/products");
  const products: IProduct[] = await res.json();

  return (
    <div>
      <h1>Product page</h1>
      
      <Link href="/products/new">
      <button>Add new product</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td className="flex flex-row">
                <Edit size={35}/>
                <Trash size={35}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
