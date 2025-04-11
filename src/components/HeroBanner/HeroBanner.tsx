"use client"; // Required for using hooks in Next.js 13+ App Router

import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import { toast } from "react-hot-toast";
import { useState } from "react";
import websitebg1 from "../../../public/bg2.png";
import websitebg2 from "../../../public/mobilebg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  comments: string;
}

const HeroBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setLoading(false);
    if (result.result === "success") {
      toast.success("Form submitted successfully!");
      reset(); // Clear the form fields after submission
    } else {
      toast.error("Error submitting form.");
    }
  };

  // Reference for scroll detection
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  return (
    <div className=" md:h-[150vh] h-[70vh]">
      {/* Main Content with Background Image */}
      <main className="relative md:h-[150vh] h-[70vh] flex  items-center justify-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <Swiper
            pagination={{ clickable: true }}
            className="transition-all duration-700 ease-in-out w-full h-full"
            spaceBetween={10}
            centeredSlides={false}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image src={websitebg1} alt="Students 1" fill className="object-cover hidden md:block" />
                <Image src={websitebg2} alt="Students 1" fill className="object-cover md:hidden sm:block block" />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[200px] md:hidden md:h-[1000px] bg-gradient-to-t from-white via-white/80 via-60% to-transparent z-[100]" />

                <div className="absolute bottom-0 md:block hidden left-0 right-0 h-[500px] md:h-[1000px] bg-gradient-to-t from-white via-transparent to-transparent z-100" />
                {/* <div className="absolute bottom-0 left-0 md:hidden block right-0 h-[6px] ] bg-[linear-gradient(to_top,_white_60%,_transparent_100%)] z-[10]" /> */}


              </div>
            </SwiperSlide>
          </Swiper>
          <style jsx global>{`
            .swiper-pagination {
              bottom: 170px !important;

              z-index: 10;
            }
          `}</style>
        </div>

        {/* Form Container - Centered */}
        <div className="relative md:flex hidden container mx-auto mt-[10rem] md:mt-16 px-4 md:min-h-[90vh]  justify-center md:justify-end items-start z-10">
          {/* Decorative Elements with Animations */}

          {/* Form Card with Scroll-Triggered Animation */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isFormInView ? 1 : 0, y: isFormInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg px-4 md:px-6 lg:px-8 py-6 md:py-8 xl:py-16 w-full 
                       max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[30vw] 
                       my-0 relative"
          >
            {/* Animated Heading */}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-center text-[#1AA5A1]"
              >
                Ready to Shape Your Future?
              </motion.h2>

              <motion.input
                type="text"
                placeholder="Your Full Name"
                {...register("fullName", { required: "Full Name is required" })}
                className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

              <motion.input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: "Email is required" })}
                className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <motion.input
                type="tel"
                placeholder="Your Phone Number"
                {...register("phoneNumber", { required: "Phone Number is required" })}
                className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

              <motion.textarea
                placeholder="Your Enquiry"
                {...register("comments", { required: "Enquiry is required", maxLength: 250 })}
                rows={4}
                maxLength={250}
                className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              <div className="flex justify-between text-xs text-gray-500 px-1">
                <span>{errors.comments?.message}</span>
                <span>{watch("comments")?.length || 0}/250</span>
              </div>

              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1AA5A1] text-white px-8 py-2 rounded-full font-semibold text-lg"
                >
                  {loading ? "Submitting..." : "Submit"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HeroBanner;
