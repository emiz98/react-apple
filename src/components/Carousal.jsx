import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import dataMock from "../mockAPI/data.mock";

const Carousal = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 md:mx-60">
      <h1 className="text-3xl px-5 md:text-4xl font-bold text-center w-full max-w-md mb-10">
        A magical connection to your devices.
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {dataMock.carousalProducts.map(({ name, image }) => (
          <SwiperSlide key={name}>
            <div className="bg-white shadow-md rounded-2xl w-80 mb-2">
              <img
                src={image}
                alt={name}
                className="px-5 pt-5 !h-60 !object-contain"
              />
              <div className="flex items-center justify-between mt-5 px-5 pb-5">
                <h4 className="font-medium text-xl text-left w-2/3">{name}</h4>
                <PlusCircleIcon className="h-10 object-contain my-2" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
