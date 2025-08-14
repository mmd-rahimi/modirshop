import { IProduct } from "@/types/types";
import ProductsTable from "@/components/ProductsTable";

async function getProducts(): Promise<IProduct[]> {
  const res = await fetch("http://localhost:3001/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Products() {
  const products = await getProducts();
  return <ProductsTable products={products} />;
}