import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
// import  all reuseable component
import Section from "./section/Section";
import Container from "./section/Container";
import SectionHeader from "./section/SectionHeader";
import Arrows from "./section/Arrows";
import ProductCard from "./ProductCart";
import Button from "./Button";
// import Swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";

// "exploreOurProductsData" data list for  explore page
// import { ExploreOurProductsData } from "../data";

const Explore = () => {
  const swiperRef = useRef(null);
  const [explore, setExplore] = useState([]);
  // api fetching
  useEffect(() => {
    axios
      .get("https://e-commerce-3xlh.onrender.com/exploreProducts")
      .then((res) => setExplore(res.data));
  }, []);

  // this function use for two custom rows and looping too
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedProducts = chunkArray(explore, 2);

  return (
    <Section className="pb-42">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <SectionHeader
              title="Explore Our Products"
              subtitle="Our Products"
            />
            <Arrows swiperRef={swiperRef} />
          </div>
          {/* <div className="grid grid-cols-4 gap-x-7.5 gap-y-15  pt-15">
            product mapping from "ExploreOurProductsData"  data list
            
            ))}
          </div> */}

          <>
            <Swiper
              key={groupedProducts.length}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              // modules={[Grid]}
              // grid={{
              //   rows: 2,
              //   fill: "row",
              // }}
              slidesPerView={4}
              spaceBetween={30}
              className="mySwiper"
              loop={true}
            >
              {groupedProducts.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-rows-2 gap-6">
                    {group.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>

          <div className="flex items-center justify-center pt-15">
            <Button Tagname="a" href="/product">
              View All Products
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Explore;
