import React from "react";
import Image from "next/image";

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
  // add more as needed
];

const PlacementSection = () => {
  return (
    <section className="bg-gradient-to-br  text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center max-w-full bg-gradient-to-br from-[#6dc9d1] to-[#1A97A2]">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 ">
            Step into a future of success
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Step into a future of possibilities with expert guidance, hands-on
            learning & a seamless admission process.
          </p>
          <button className="mt-6 px-5 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition">
            Get Started
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md"
            >
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-sm text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {logos.map((src, idx) => (
              <div key={idx} className="relative w-28 h-10 grayscale hover:grayscale-0 transition">
                <Image src={src} alt={`Logo ${idx}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
