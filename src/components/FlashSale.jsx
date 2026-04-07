import React from "react";
import ProductCard from "./ProductCart";
import image from "../assets/product/image.png";
import Timmer from "./Timmer";
import Button from "./Button";
import SectionHeader from "./section/SectionHeader";
const FlashSale = ({ product }) => {
  // products.js

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      image: image,
      price: 120,
      oldPrice: 160,
      discount: 20,
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      name: "Wireless Headphone",
      image: image,
      price: 80,
      oldPrice: 100,
      discount: 20,
      rating: 3.9,
      reviews: 45,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      image: image,
      price: 25,
      oldPrice: 40,
      discount: 15,
      rating: 4,
      reviews: 60,
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      image: image,
      price: 150,
      oldPrice: 200,
      discount: 25,
      rating: 5,
      reviews: 120,
    },
  ];

  return (
    <section className="bg-white pb-15">
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-between mb-10">
          {/* <div className="flex flex-col gap-4">
            <p className="text-[16px] font-semibold text-[#DB4444] mb-6">
              Today’s
            </p>
            <h2 className="text-[36px] font-semibold text-[#000000] leading-[1.4]">
              Flash Sales
            </h2>
          </div> */}
          <SectionHeader 
          title="Flash Sales"
          subtitle="Today’s"
          />
          <Timmer />
        </div>
        <div className="mb-10"></div>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
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
