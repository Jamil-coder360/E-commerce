// import all reuseable component
import ProductCard from "./ProductCart";
import Timmer from "./Timmer";
import Button from "./Button";
import SectionHeader from "./section/SectionHeader";
import Arrows from "./section/Arrows";
import { Swiper, SwiperSlide } from 'swiper/react';

// import "FlashSellingProductsData" data list for flashsale page
// import { FlashSellingProductsData } from "../data";
import { use, useEffect, useRef, useState } from "react";
import Section from "./section/Section";
import Container from "./section/Container";
import axios from "axios";

const FlashSale = ({ product }) => {
  const [saleData , setSaleData] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    axios.get("https://e-commerce-3xlh.onrender.com/products")
      .then(res => setSaleData(res.data));
  },[]);

  return (
    <Section>
      <Container className="pb-5 lg:pb-15 border-b border-border px-5 lg:px-0">
        <div className="flex items-start lg:items-center flex-wrap lg:flex-nowrap justify-between mb-10">
         
          <div className="flex items-start lg:items-center  flex-wrap lg:flex-nowrap justify-start lg:justify-center gap-4 lg:gap-21.75 ">
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
            {saleData.map((product) => (
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
