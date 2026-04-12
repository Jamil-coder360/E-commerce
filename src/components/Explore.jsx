// import  all reuseable component
import Section from "./section/Section";
import Container from "./section/Container";
import SectionHeader from "./section/SectionHeader";
import Arrows from "./section/Arrows";
import ProductCard from "./ProductCart";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
// "exploreOurProductsData" data list for  explore page
import { ExploreOurProductsData } from "../data";
import { useRef } from "react";
import { Grid } from "swiper/modules";

const Explore = () => {
  const swiperRef = useRef(null);

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
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Grid]}
              grid={{
                rows: 2,
                fill: "row",
              }}
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
              className="mySwiper"
            >
              {ExploreOurProductsData.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>

          <div className="flex items-center justify-center pt-15">
            <Button Tagname="a" href="/product" >View All Products</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Explore;
