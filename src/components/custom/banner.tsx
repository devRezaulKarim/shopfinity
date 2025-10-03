"use client";

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtons } from "./swiper-buttons";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // For navigation arrows
import "swiper/css/pagination"; // If using pagination dots

import Image from "next/image";
import { banners } from "@/lib/constants";

export const Banner = () => {
  return (
    <div className="relative my-4">
      <Swiper
        navigation={{
          prevEl: ".banner-swiper-button-prev",
          nextEl: ".banner-swiper-button-next",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Image
              src={banner.src}
              alt="Banner"
              width={2000}
              height={360}
              className="w-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButtons
        prevClassName="-left-16 border border-2 border-border  lg:flex hidden banner-swiper-button-prev"
        nextClassName="-right-16 border border-2 border-border  lg:flex hidden banner-swiper-button-next"
      />
    </div>
  );
};
