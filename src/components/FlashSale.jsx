// import all reuseable component
import ProductCard from "./ProductCart";
import Timmer from "./Timmer";
import Button from "./Button";
import SectionHeader from "./section/SectionHeader";
import Arrows from "./section/Arrows";

// import "FlashSellingProductsData" data list for flashsale page
import { FlashSellingProductsData } from "../data";

const FlashSale = ({ product }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-15 border-b border-border">
        <div className="flex items-center justify-between mb-10">
         
          <div className="flex items-center justify-center gap-21.75 ">
            <SectionHeader title="Flash Sales" subtitle="Today’s" />
            <Timmer />
          </div>

          <Arrows />
        </div>
        <div className="mb-10"></div>
        <div className="grid grid-cols-4 gap-6">

          {/* product mapping from "FlashSellingProductsData" data list*/}
          {FlashSellingProductsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10.5">
          <Button>View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
