import { Box, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href="/" className="link">
        <Home size={30}/>
        <span>Dashboard</span>
      </Link>
      <Link href="/products" className="link">
        <Box size={30}/>
        <span>Products</span>
      </Link>
      <Link href="/orders" className="link">
        <ShoppingCart size={30}/>
        <span>Orders</span>
      </Link>
    </div>
  );
};

export default Sidebar