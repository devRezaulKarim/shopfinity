"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Category } from "./category";
import { CategoryType } from "@/types/custom-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperButtons } from "./swiper-buttons";
import { Navigation } from "swiper/modules";

export const Categories = () => {
  const [data, setData] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://dummyjson.com/products/categories");
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <section className="2x py-10 lg:py-15">
      <Swiper
        navigation={{
          prevEl: ".cat-swiper-button-prev",
          nextEl: ".cat-swiper-button-next",
        }}
        modules={[Navigation]}
        slidesPerGroup={2}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1536: {
            slidesPerView: 8,
          },
        }}
        spaceBetween={20}
        loop={true}
        className="relative overflow-hidden"
      >
        <div className="flex items-center gap-x-4 px-12">
          {data.map((cat: CategoryType) => (
            <SwiperSlide key={cat.slug}>
              <Category {...cat} />
            </SwiperSlide>
          ))}
        </div>
        <SwiperButtons
          prevClassName="-left-16 border border-2 border-border  lg:flex hidden cat-swiper-button-prev bg-white hover:bg-primary hover:text-white"
          nextClassName="-right-16 border border-2 border-border  lg:flex hidden cat-swiper-button-next bg-white hover:bg-primary hover:text-white"
        />
      </Swiper>
    </section>
  );
};
