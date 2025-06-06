"use client"; // Required for using hooks in Next.js 13+ App Router

import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
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
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch("https://applycanara.vercel.app/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.result === "success") {
      router.push("/thank-you");
    } else {
      toast.error("Error submitting form.");
    }
  }
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  return (
    <div className="relative md:h-[150vh] h-[70vh]">
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
              <Image
                src={websitebg1}
                alt="Students 1"
                fill
                className="object-cover hidden md:block"
              />
              <Image
                src={websitebg2}
                alt="Students 1"
                fill
                className="object-cover md:hidden block"
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[1000px] bg-gradient-to-t from-white via-white/85 via-50% to-transparent z-[10] md:hidden" />
              <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[1000px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
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

      {/* Form Container - Positioned on the Right */}
      <div className="relative  container mx-auto h-full max-w-[1350px]  z-20 hidden md:flex items-center justify-end md:min-h-[90vh]">
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 50 }} // Slide in from right
          animate={{
            opacity: isFormInView ? 1 : 0,
            x: isFormInView ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg px-4 md:px-6 lg:px-8 py-6 md:py-8 xl:py-16 w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[40vw] lg:max-w-[35vw] xl:max-w-[30vw]"
        >
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
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}

            <motion.input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <motion.input
              type="tel"
              placeholder="Your Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
            )}

            <motion.textarea
              placeholder="Your Enquiry"
              {...register("comments", {
                required: "Enquiry is required",
                maxLength: 250,
              })}
              rows={4}
              maxLength={250}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            <div className="flex justify-between text-red-500 text-sm px-1">
              <span>{errors.comments?.message}</span>
              <span className="text-gray-500">
                {watch("comments")?.length || 0}/250
              </span>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1AA5A1] text-white px-8 py-2 rounded-full font-semibold text-lg"
              >
                {loading ? (
                  <ClipLoader size={24} color="#fff" className="mt-2" />
                ) : (
                  "Apply"
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;