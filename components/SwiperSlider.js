import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import Image from 'next/image'
import slide1 from '../asset/images/carousel-slides-1.png'
import slide2 from '../asset/images/carousel-slides.png'

function SwiperSlider() {
  SwiperCore.use([Autoplay])
  return (
    <Swiper
      autoplay={{
        delay:0,
        pauseOnMouseEnter: true,
        playOnMouseExit: true,
      }}
      loop
      speed={5000}
      slidesPerView={2.15}
      onAutoplayResume={(swiper) => console.log(swiper)}
      freeMode
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
    </Swiper>
  )
}

export default SwiperSlider;