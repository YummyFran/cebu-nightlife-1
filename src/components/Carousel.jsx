import React, { useState, useEffect, useRef } from 'react';
import '../styles/carousel.css';
import Banner from './Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ images, interval = 3000, children, className }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  
  return (
    <div className={`carousel ${className}`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
          className='swiper'
        >
          {
            images.map((img, index) => (
              <SwiperSlide>
                <Banner 
                  key={index}
                  image={img.src}
                  position={img.position}
                />
              </SwiperSlide>
            ))
          }
          <button ref={prevRef} className="custom-nav custom-prev">‹</button>
          <button ref={nextRef} className="custom-nav custom-next">›</button>
        </Swiper>

        {children}
    </div>
  );
};

export default Carousel;
