import React from 'react'
import SideMenu from './SideMenu'
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../assets/banner.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Banner = () => {

  return (
<section className='bg-white'>
    <div className="container mx-auto">
        <div className='grid grid-cols-[300px_auto]'>

        <SideMenu />

       <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
        </div>
        </div>
</section>
  )
}

export default Banner