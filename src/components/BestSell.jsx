import React from "react";

//swiper slider

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// import reuseable component
import Button from "./Button";
import ProductCard from "./ProductCart";
import SectionHeader from "./section/SectionHeader";

//product data
// import { BestSellingProductsData } from "../data";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const BestSell = () => {
 const [bestSale , setBestSale] =useState([]);
 
useEffect(() => {
  axios.get("https://e-commerce-3xlh.onrender.com/bestSelling")
  .then(data => setBestSale(data.data))
 }, [])
  return (
    <section>
      <div className="container mx-auto pt-5  lg:pt-17.5 px-5 lg:px-0 border-t border-border">
        {" "}
        {/*use padding here for border bottom other wise it will be une on section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between pb-15">
          {/* use a section header for best sell */}

          <SectionHeader title="Best Selling Products" subtitle="This Month" />
          <Button Tagname="a" href="/product">View All</Button>
        </div>
        <div>
          {/* swiper slider start */}
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
                  breakpoints={{
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }}
          >
            {/* product mapping from BestSellingProductsData */}
            {bestSale.map((product) => (
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
