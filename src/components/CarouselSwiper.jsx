import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselSwiper({ slides = [] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="rounded-2xl"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            onClick={slide.onClick}
            className="cursor-pointer relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-1"
          >
            {/* Imagen con blur y oscura */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-72 object-cover transition-all duration-500 hover:blur-none"
            />

            {/* Texto centrado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <h3 className="text-3xl font-bold drop-shadow-lg">{slide.title}</h3>
              {slide.subtitle && (
                <p className="text-lg mt-2 opacity-90 drop-shadow-lg">{slide.subtitle}</p>
              )}
            </div>

            {/* Sombra más suave al hover */}
            <div className="absolute inset-0 bg-black/30 transition-all duration-500 hover:bg-black/10"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
