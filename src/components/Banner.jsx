import React from "react";
import SideMenu from "./SideMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../assets/banner.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router";
const Banner = () => {
  return (
    <section className=" lg:pt-10 py-8 lg:pb-41.25 px-5 lg:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_auto]">
          <SideMenu />
          <div className="w-full lg:w-[892px] dark:border-slate-50 dark:border-1 border-0">
            <Swiper
            loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to="/shop">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
