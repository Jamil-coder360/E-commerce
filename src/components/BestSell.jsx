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
import { BestSellingProductsData } from "../data";
const BestSell = () => {
 
  return (
    <section>
      <div className="container mx-auto pt-17.5 border-t border-border">
        {" "}
        {/*use padding here for border bottom other wise it will be une on section */}
        <div className="flex items-center justify-between pb-15">
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
          >
            {/* product mapping from BestSellingProductsData */}
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
