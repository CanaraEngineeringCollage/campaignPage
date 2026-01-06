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
    z-index: 10;
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
          {/* MAIN CARD SECTION */}
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

              {/* Right Column: Image Container */}
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

          {/* Stats Cards Grid */}
       {/* Stats Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center w-full">
  {/* Left Static Card */}
  <div className="p-6 bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center flex flex-col justify-center h-full min-h-[280px] lg2:min-h-[240px]">
    <div className="pb-10">
      <h3 className="text-5xl lg:text-[60px] font-bold leading-tight">220+</h3>
        <p className="mt-2 text-xl font-bold">Companies Visited on Campus </p>
      <p className=" text-xl text-white/90">
         Consistently recruiting across all branches of Engineering
      </p>
    </div>
  </div>

  {/* Middle Carousel Card (Fixed) */}
  <div className="p-6 bg-gradient-to-br min-h-[280px] lg2:min-h-[240px] from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center h-full flex flex-col justify-center">
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
      // Removed "!pb-1" and added "h-full" so slides take full height
      className="w-full h-full"
    >
          <SwiperSlide className="flex flex-col justify-center items-center h-auto">
                  <h3 className="text-5xl lg:text-[60px] font-bold leading-tight">85.19</h3>
                  <p className="mt-2 text-xl font-bold">Cumulative Batch Placement </p>
                  <p className="text-lg lg:text-xl"> Rate over the past 4 years </p>
                </SwiperSlide>

                   <SwiperSlide className="flex flex-col justify-center items-center h-auto">
                  <h3 className="text-5xl lg:text-[60px] font-bold leading-tight">23.68 LPA</h3>
                  {/* <p className="mt-2 text-xl font-bold">CEC Students placed </p> */}
                  <p className="mt-2 text-xl font-bold">LPA Highest Package</p>
                </SwiperSlide>

                   <SwiperSlide className="flex flex-col justify-center items-center h-auto">
                  <h3 className="text-5xl lg:text-[60px] font-bold leading-tight">5.6 LPA</h3>
                  {/* <p className="mt-2 text-xl font-bold">CEC Students placed </p> */}
                  <p className="mt-2 text-xl font-bold">Median Salary</p>
                </SwiperSlide>

                   <SwiperSlide className="flex flex-col justify-center items-center h-auto">
                  <h3 className="text-5xl lg:text-[60px] font-bold leading-tight">3.25 LPA</h3>
                  {/* <p className="mt-2 text-xl font-bold">CEC Students placed </p> */}
                  <p className="mt-2 text-xl font-bold">Average Salary  </p>
                </SwiperSlide>
                   <SwiperSlide className="flex flex-col justify-center items-center h-auto">
                  <h3 className="text-5xl lg:text-[60px] font-bold leading-tight">98%</h3>
                  <p className="mt-2 text-xl font-bold">Internship Completion Rate</p>
                  <p className="text-lg lg:text-xl">Completed at least one Internship before Graduation</p>
                </SwiperSlide>
    </Swiper>
  </div>

  {/* Right Static Card */}
  <div className="p-6 bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2] rounded-xl shadow-md text-center  h-full min-h-[280px] lg2:min-h-[240px]">
    <div className="pb-10">
      <h3 className="text-5xl lg:text-[60px] font-bold leading-tight">432+</h3>
         <p className="mt-2 text-xl font-bold">Still Counting</p>
      <p className="text-lg lg:text-xl">
         Offers (Batch of 2025)
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
