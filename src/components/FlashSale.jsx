// import all reuseable component
import ProductCard from "./ProductCart";
import Timmer from "./Timmer";
import Button from "./Button";
import SectionHeader from "./section/SectionHeader";
import Arrows from "./section/Arrows";
import { Swiper, SwiperSlide } from 'swiper/react';

// import "FlashSellingProductsData" data list for flashsale page
import { FlashSellingProductsData } from "../data";
import { useRef } from "react";
import Section from "./section/Section";
import Container from "./section/Container";

const FlashSale = ({ product }) => {
  const swiperRef = useRef(null);
  return (
    <Section>
      <Container className="pb-15 border-b border-border">
        <div className="flex items-center justify-between mb-10">
         
          <div className="flex items-center justify-center gap-21.75 ">
            <SectionHeader title="Flash Sales" subtitle="Today’s" />
            <Timmer />
          </div>

          <Arrows swiperRef={swiperRef} />
        </div>
        <div className="mb-10"></div>
        {/* <div className="grid grid-cols-4 gap-6">

          product mapping from "FlashSellingProductsData" data list
          {FlashSellingProductsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}


 <>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
			      loop={true}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
          >
            {FlashSellingProductsData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>

        <div className="flex items-center justify-center mt-10.5">
          <Button Tagname="a"  href="/product" >View All Products</Button>
        </div>
      </Container>
    </Section>
  );
};

export default FlashSale;
