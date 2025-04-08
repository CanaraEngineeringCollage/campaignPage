"use client"

import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export default function ProgramsCarousel() {
  const cards = programData.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ))

  return (
    <div className="w-full h-full py-20 bg-[#F9FAFB]">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore our programs
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

// 👇 These are the actual program cards
const programData = [
  {
    category: "Bachelors of Engineering in",
    title: "Computer Science and Engineering",
    src: "/cse.png", // use your real images or external links
    content: <CardContent />,
  },
  {
    category: "Bachelors of Engineering in",
    title: "Information Science and Engineering",
    src: "/ise.png",
    content: <CardContent />,
  },
  {
    category: "Bachelors of Engineering in",
    title: "Electronics and Communication Engineering",
    src: "/ece.png",
    content: <CardContent />,
  },
  {
    category: "Bachelors of Engineering in",
    title: "Computer Science and Design",
    src: "/csd.png",
    content: <CardContent />,
  },
]

// Reusable card content (can be empty or a "+" button, etc.)
function CardContent() {
  return (
    <div className="flex justify-end items-end h-full w-full p-4">
      <div className="bg-white/70 hover:bg-white rounded-full p-2 text-black transition cursor-pointer">
        <span className="text-2xl font-bold">+</span>
      </div>
    </div>
  )
}
