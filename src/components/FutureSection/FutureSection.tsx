"use client";

import React, { useRef } from "react";
import Image from "next/image";
import studentImage from "../../../public/image.png";
import { motion } from "framer-motion";

const FutureSection = () => {
  // References to detect when sections are in view
  const imageRef = useRef(null);
  const textRef = useRef(null);

  return (
    <div className="bg-white md:my-32">
      <div className="max-w-7xl lg:mx-auto xl:mx-auto mx-8 h-auto">
        <div className="relative bg-white rounded-3xl overflow-hidden">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 lg:gap-16">
            {/* Image section */}
            <div className="flex items-center justify-center h-full">
              {" "}
              {/* Parent container */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative z-0 w-[100%]"
              >
                <Image src={studentImage} alt="Students in classroom" className="object-cover w-full h-auto my-auto rounded-2xl z-0" />
              </motion.div>
            </div>

            {/* Content section */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative md:px-4 lg:px-8 flex items-center justify-center"
            >
              <div className="relative z-10 space-y-6  flex-col flex">
                <h1 className=" text-[1.5rem] lg:text-[45px] md:text-[2.5rem] font-semibold text-black leading-tight">Your Future Campus</h1>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Canara Engineering College (CEC), a premier institute in Mangalore, is part of the Canara Group of Institutions, founded in 1891
                    by Ammembal Subba Rao Pai—a visionary social reformer & philanthropist. Affiliated with Visvesvaraya Technological University &
                    approved by AICTE, CEC upholds a legacy of excellence, blending modern education with cultural values. Established in 2001 with
                    180 seats across three engineering branches, it has since expanded to seven branches with a total intake of 664 students, shaping
                    future-ready engineers through quality education & strong industry connections.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
