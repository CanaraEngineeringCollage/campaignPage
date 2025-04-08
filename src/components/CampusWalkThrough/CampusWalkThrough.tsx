"use client";

import React, { useRef } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { motion } from "framer-motion";

const CampusWalkThrough = () => {
  const getVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Reference for scroll detection
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="flex   relative max-w-7xl mx-auto flex-col items-center justify-center pb-10 bg-none lg:pb-40 xl:pb-40 2xl:h-screen"
    >
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        width="105"
        height="105"
        viewBox="0 0 105 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[12%] lg:hidden flex opacity-100 z-50 md:right-[22%] right-0"
      >
        <path
          d="M54.3037 0.0644531C46.7948 25.5978 26.2752 45.556 0.0234375 52.8594C26.2752 60.1627 46.7948 80.1209 54.3037 105.654C61.8107 80.1209 82.3322 60.1627 108.584 52.8594C82.3322 45.556 61.8125 25.5961 54.3037 0.0644531Z"
          fill="#FB9D2B"
        />
      </motion.svg>

      {/* Heading - Slides In from Top */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-black lg:text-[2rem] text-[1.5rem] xl:text-[2.5rem] md:text-[2.5rem] font-bold relative"
      >
        A Walk Through Our Campus
      </motion.h1>
      <p className=" text-[#1D1D1F] font-medium text-2xl pb-14 pt-6">Explore CEC’s vibrant campus & discover what makes it unique</p>
      {/* Video and Button Container - Slides In from Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full xl:px-0 px-8 rounded-2xl overflow-hidden relative"
      >
        <YouTubeEmbed videoid={getVideoId("https://youtu.be/RybrVD4uNUM?si=5RjWcVzIxWAe20zD") as string} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 flex gap-2"
        >
          <button className="bg-none px-4 py-2 rounded-full text-sm text-white font-medium border-white border-2 transition-colors">
            Take a virtual tour
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CampusWalkThrough;
