"use client";

import { Card, Carousel } from "../ui/flipcard";

export default function AlumniInsights() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="w-full  py-20 ">
      <h2 className="max-w-7xl text-center mx-auto xl:text-[2.5rem] md:text-[2.5rem] text-[1.5rem] lg:text-[2rem] font-bold text-[#1D1D1F] dark:text-neutral-200 font-sans">
        Insights from Our Alumni
      </h2>
      <p className="text-[#1D1D1F] text-center text-[22px] mt-2">Inspiring journeys & insights from our accomplished alumni</p>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    comment:
      "CEC’s hands-on learning & industry projects gave me real-world skills that shaped my career.",
    name: "ravi",
    batch: "cse-123",
    src: "/alumniCardImages/image1.png",
   
  },
  {
    comment: "CEC’s hands-on learning & industry projects gave me real-world skills that shaped my career.",
    name: "ravi",
    batch: "cse-123",
    src: "/alumniCardImages/image2.png",

  },
  {
    comment: "CEC’s hands-on learning & industry projects gave me real-world skills that shaped my career.",
    name: "ravi",
    batch: "cse-123",
    src: "/alumniCardImages/image3.png",
  },
  {
    comment: "CEC’s hands-on learning & industry projects gave me real-world skills that shaped my career.",
    name: "ravi",
    batch: "cse-123",
    src: "/alumniCardImages/image1.png",
  },
  {
    comment: "CEC’s hands-on learning & industry projects gave me real-world skills that shaped my career.",
    name: "ravi",
    batch: "cse-123",
    src: "/alumniCardImages/image2.png",
  },
];
