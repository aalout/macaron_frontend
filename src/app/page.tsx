import Link from "next/link";
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import Promo from "@/components/Promo";
import Product from "@/components/Product";
import TheBest from "@/components/TheBest";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Menu/>
      <Promo/>
      <Product/>
      <TheBest/>
    </div>
  );
}
