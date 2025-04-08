"use client"; // Required for using hooks in Next.js 13+ App Router

import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import { toast } from "react-hot-toast";
import { useState } from "react";
import websitebg1 from "../../../public/bg2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
interface FormData {
  studentName: string;
  parentEmail: string;
  parentPhone: string;
  class: string;
  location: string;
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
    <div className="min-h-screen">
      {/* Main Content with Background Image */}
      <main className="relative min-h-screen flex  items-center justify-center">
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
              <Image src={websitebg1} alt="Students 1" className="w-full md:h-[89vh] md:object-cover object-cover" />
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
        <div className="relative container mx-auto mt-[10rem] md:mt-16 px-4 md:min-h-[90vh] flex justify-center md:justify-end items-start z-10">
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
                {...register("studentName", { required: "Full Name is required" })}
                className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName.message}</p>}

              <motion.input
                type="email"
                placeholder="Your Email"
                {...register("parentEmail", { required: "Email is required" })}
                 className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              {errors.parentEmail && <p className="text-red-500 text-sm">{errors.parentEmail.message}</p>}

              <motion.input
                type="tel"
                placeholder="Your Phone Number"
                {...register("parentPhone", { required: "Phone Number is required" })}
                 className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              {errors.parentPhone && <p className="text-red-500 text-sm">{errors.parentPhone.message}</p>}

              <motion.textarea
                placeholder="Your Enquiry"
                {...register("class", { required: "Enquiry is required", maxLength: 250 })}
                rows={4}
                maxLength={250}
                className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
              />
              <div className="flex justify-between text-xs text-gray-500 px-1">
                <span>{errors.class?.message}</span>
                <span>{watch("class")?.length || 0}/250</span>
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
