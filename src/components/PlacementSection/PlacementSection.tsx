"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Add custom styles for Swiper pagination
const swiperStyles = `
  .swiper-pagination {
    bottom: 0px !important;
    position: absolute !important;
    width: 100%;
    text-align: center;
  }
  .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    background: white !important;
    opacity: 0.7 !important;
    margin: 0 4px;
    border-radius: 5px !important;
    transition: all 0.3s ease !important;
  }
  .swiper-pagination-bullet-active {
    width: 40px !important;
    opacity: 1 !important;
  }
`;

const PlacementSection = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[160vh] text-white py-12 px-6 md:px-12 overflow-hidden">
      {/* Add custom styles */}
      <style jsx global>
        {swiperStyles}
      </style>

      {/* Background Image */}
      <Image src="/texturedBackground.png" alt="Background" fill className="object-cover z-0" priority />

      {/* Content */}
      <div className="flex items-center justify-center min-h-[60vh] md:min-h-[160vh]">
        <div className="relative z-20 max-w-7xl items-center mx-auto space-y-10 min-h-screen flex flex-col justify-center">
          {/* -------------------------------------------------- */}
          {/* CORRECTED MAIN CARD SECTION */}
          {/* -------------------------------------------------- */}
          <div className="w-[100%] hidden md:block bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] px-6 pt-6 rounded-xl shadow-lg relative">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 min-h-[350px]">
              {/* Left Column: Text */}
              <div className="flex-1 mt-8 ml-4 mb-8 z-20">
                <h2 className="xl:text-[2.5rem] md:text-[2.5rem] text-[1.5rem] lg:text-[2rem] md:leading-10 leading-7 md:text-4xl font-bold mb-2">
                  Step into a future of success
                </h2>
                <p className="text-white max-w-[70%] mt-4">
                  Step into a future of possibilities with expert guidance, hands-on learning & a seamless admission process.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact-form");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-12 px-5 py-2 bg-white text-[#1A97A2] font-semibold rounded-full hover:text-[#1A97A2]/90 cursor-pointer transition"
                >
                  Get Started
                </button>
              </div>

              {/* Right Column: Image Container (Relative Parent) */}
              <div className="flex-1 relative">
                <Image
                  src="/Success.png"
                  alt="Success"
                  width={600}
                  height={600}
                  className="hidden md:block absolute bottom-0 right-0 z-10 object-contain w-auto "
                  priority
                />
              </div>
            </div>
          </div>
          {/* -------------------------------------------------- */}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center w-full">
            {/* Left Swiper (Card 1) */}
            <div className="p-6 bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                className="w-full h-[210px]"
              >
                <SwiperSlide>
                  <h3 className="text-[60px] font-extrabold">600+</h3>
                  <p className="mt-2 text-xl font-bold">CEC Students placed </p>
                  <p className="text-xl">in the last three years</p>
                </SwiperSlide>
                <SwiperSlide>
                  <h3 className="text-[60px] font-extrabold">600+</h3>
                  <p className="mt-2 text-xl font-bold">CEC Students placed </p>
                  <p className="text-xl">in the last three years</p>
                </SwiperSlide>
                <SwiperSlide>
                  <h3 className="text-[60px] font-extrabold">600+</h3>
                  <p className="mt-2 text-xl font-bold">CEC Students placed </p>
                  <p className="text-xl">in the last three years</p>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Static Middle Card (Card 2) */}
            <div className="p-6 bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center flex flex-col justify-center h-[258px]">
              <h3 className="text-[60px] font-bold">86%+</h3>
              <p className="mt-2 text-xl text-white/90">Consistently Strong Placements CEC graduates placed over the last three years</p>
            </div>

            {/* Right Swiper (Card 3) */}
            <div className="p-6 bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                className="w-full h-[210px]"
              >
                <SwiperSlide>
                  <h3 className="text-[60px] font-extrabold">600+</h3>
                  <p className="mt-2 text-xl font-bold">CEC Students placed </p>
                  <p className="text-xl">in the last three years</p>
                </SwiperSlide>
                <SwiperSlide>
                  <h3 className="text-[60px] font-extrabold">600+</h3>
                  <p className="mt-2 text-xl font-bold">CEC Students placed </p>
                  <p className="text-xl">in the last three years</p>
                </SwiperSlide>
                <SwiperSlide>
                  <h3 className="text-[60px] font-extrabold">600+</h3>
                  <p className="mt-2 text-xl font-bold">CEC Students placed </p>
                  <p className="text-xl">in the last three years</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
