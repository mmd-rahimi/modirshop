import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import { ICategoryProps } from "./products/page";

export default function Home({searchParams}: ICategoryProps) {
  return (
    <>
    <Hero />
    <LatestProducts searchParams={searchParams}/>
    </>
  );
}

