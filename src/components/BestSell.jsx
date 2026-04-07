import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCart";
import image from "../assets/product/image.png";
import SectionHeader from "./section/SectionHeader";
import {BestSellingProductsData} from "../data"
const BestSell = () => {

  //     const products = [
  //   {
  //     id: 1,
  //     name: "HAVIT HV-G92 Gamepad",
  //     image: image,
  //     price: 120,
  //     oldPrice: 160,
  //     discount: 20,
  //     rating: 5,
  //     reviews: 88,
  //   },
  //   {
  //     id: 2,
  //     name: "Wireless Headphone",
  //     image: image,
  //     price: 80,
  //     oldPrice: 100,
  //     discount: 20,
  //     rating: 3.9,
  //     reviews: 45,
  //   },
  //   {
  //     id: 3,
  //     name: "Gaming Mouse",
  //     image: image,
  //     price: 25,
  //     oldPrice: 40,
  //     discount: 15,
  //     rating: 4,
  //     reviews: 60,
  //   },
  //   {
  //     id: 4,
  //     name: "Mechanical Keyboard",
  //     image: image,
  //     price: 150,
  //     oldPrice: 200,
  //     discount: 25,
  //     rating: 5,
  //     reviews: 120,
  //   },
  //   {
  //     id: 4,
  //     name: "Mechanical Keyboard",
  //     image: image,
  //     price: 150,
  //     oldPrice: 200,
  //     discount: 25,
  //     rating: 5,
  //     reviews: 120,
  //   },
  //   {
  //     id: 4,
  //     name: "Mechanical Keyboard",
  //     image: image,
  //     price: 150,
  //     oldPrice: 200,
  //     discount: 25,
  //     rating: 5,
  //     reviews: 120,
  //   },
  //   {
  //     id: 4,
  //     name: "Mechanical Keyboard",
  //     image: image,
  //     price: 150,
  //     oldPrice: 200,
  //     discount: 25,
  //     rating: 5,
  //     reviews: 120,
  //   },
  //   {
  //     id: 4,
  //     name: "Mechanical Keyboard",
  //     image: image,
  //     price: 150,
  //     oldPrice: 200,
  //     discount: 25,
  //     rating: 4,
  //     reviews: 120,
  //   },
  // ];
  return (
    <section className="bg-white">
      <div className="container mx-auto pt-17.5 border-t border-border">
        <div className="flex items-center justify-between pb-15">
{/* use a section header for best sell */}
        {/* <div className="flex flex-col gap-4">
          <p className="text-[16px] font-semibold text-[#DB4444] mb-6">
            This Month
          </p>
          <h2 className="text-[36px] font-semibold text-[#000000] leading-[1.4]">
           Best Selling Products
          </h2>
        </div> */}
        <SectionHeader 
        title="Best Selling Products"
        subtitle="This Month"
        />
        <Button>View All</Button>
        </div>
        <div>
            <Swiper
  slidesPerView={4}
  spaceBetween={20}
  navigation={true}
  modules={[Navigation]}
>
  {BestSellingProductsData.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCard product={product} />
    </SwiperSlide>
  ))}
</Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSell;
