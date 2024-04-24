import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image'
import slide1 from '../asset/images/carousel-slides-1.png'
import slide2 from '../asset/images/carousel-slides.png'

function VerticalSlider() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        loop
        slidesPerView={2.35}
      >
        <SwiperSlide>
          <Image src={slide1}/>
      </SwiperSlide>
      <SwiperSlide>
          <Image src={slide2}/>
      </SwiperSlide>
      <SwiperSlide>
          <Image src={slide1}/>
      </SwiperSlide>
      <SwiperSlide>
          <Image src={slide2}/>
      </SwiperSlide>
      <SwiperSlide>
          <Image src={slide1}/>
      </SwiperSlide>
      <SwiperSlide>
          <Image src={slide2}/>
      </SwiperSlide>
      </Swiper>
    </>
  )
}

export default VerticalSlider;