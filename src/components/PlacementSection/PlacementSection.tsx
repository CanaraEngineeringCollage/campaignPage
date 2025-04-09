"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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

const stats = [
  {
    value: "600+",
    label: "CEC Students placed in the last three years",
  },
  {
    value: "86%+",
    label: "Consistently Strong Placements CEC graduates placed over the last three years",
  },
  {
    value: "9.5 LPA",
    label: "Highest Package of 2024-25",
  },
];

const logos = [
  "/logos/cadence.png",
  "/logos/deloitte.png",
  "/logos/cerner.png",
  "/logos/ibm.png",
  "/logos/sap.png",
  "/logos/accenture.png",
  "/logos/vmware.png",
  "/logos/verifone.png",
  "/logos/sasken.png",
  "/logos/juspay.png",
];

const PlacementSection = () => {
  return (
    <section className="relative min-h-[160vh] text-white py-12 px-6 md:px-12 overflow-hidden ">
      {/* Add custom styles */}
      <style jsx global>
        {swiperStyles}
      </style>

      {/* Background Image */}
      <Image src="/texturedBackground.png" alt="Background" fill className="object-cover z-0" priority />
      {/* Content */}
      <div className="flex items-center justify-center min-h-[160vh]">
        <div className="relative z-20 max-w-7xl items-center mx-auto space-y-10 min-h-screen flex flex-col justify-center">
          {/* Heading */}
          <div className="w-[100%] bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] p-6 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1 mt-8 ml-4 mb-8">
                <h2 className="xl:text-[2.5rem] md:text-[2.5rem] text-[1.5rem] lg:text-[2rem] md:leading-10 leading-7 md:text-4xl font-bold mb-2 ">
                  Step into a future of success
                </h2>
                <p className="text-white max-w-[70%]">
                  Step into a future of possibilities with expert guidance, hands-on learning & a seamless admission process.
                </p>
                <button className="mt-24 px-5 py-2 bg-white text-[#1A97A2] font-semibold rounded-full hover:bg-blue-100 transition">
                  Get Started
                </button>
              </div>
              <div className="flex-1">
                <Image 
                  src="/Success.png" 
                  alt="Success" 
                  width={500} 
                  height={100} 
                  className="hidden md:flex object-cover z-0 absolute right-0 top-11 transform -translate-y-1/4" 
                  priority 
                />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center w-full">
            {/* Left Swiper (Card 1) */}
            <div className="p-6  bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                className="w-full  y-14 h-[210px]" // gives space for dots
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
            <div className="p-6 bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center">
              <h3 className="text-[60px] font-bold">86%+</h3>
              <p className="mt-2 text-sm text-white/90">Consistently Strong Placements CEC graduates placed over the last three years</p>
            </div>

            {/* Right Swiper (Card 3) */}
            <div className="p-6  bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                className="w-full  y-14 h-[210px]" // gives space for dots
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
