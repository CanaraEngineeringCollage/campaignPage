"use client";
import React, { useEffect, useState, createContext, useContext, JSX } from "react";
import { IconX, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  name: string;
  comment: string;
  batch: string;
  features?: string[];
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  activeCardIndex: number | null;
  setActiveCardIndex: (index: number | null) => void;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  activeCardIndex: null,
  setActiveCardIndex: () => {},
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex, activeCardIndex, setActiveCardIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto md:pl-24" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[5%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 md:mr-24 mr-6">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconChevronLeft className="h-8 w-6 text-[#0000008F]" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-[#D2D2D7A3]  flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconChevronRight className="h-6 w-6 text-[#0000008F]" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Updated Card component to match the design in the screenshot
export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const { currentIndex, activeCardIndex, setActiveCardIndex } = useContext(CarouselContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleFlip = () => {
    if (isMobile) {
      // If this card is already active, close it
      if (activeCardIndex === index) {
        setActiveCardIndex(null);
      } else {
        // Otherwise, set this card as active (closing any previously active card)
        setActiveCardIndex(index);
      }
    }
  };

  // Determine if this card is flipped based on whether it's the active card
  const isFlipped = isMobile ? activeCardIndex === index : false;

  return (
    <div className={`perspective md:h-[580px] md:w-[372px] h-[400px] w-[250px] ${isMobile ? "cursor-pointer" : "group"}`} onClick={handleFlip}>
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
          isMobile ? (isFlipped ? "[transform:rotateY(180deg)]" : "") : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 rounded-xl bg-[#B298FE] overflow-hidden [backface-visibility:hidden]">
          {/* Full-width image */}
          <div className="relative h-full w-full">
            <Image 
              src={card.src || "/placeholder.svg"} 
              alt={card.name} 
              fill
              className="object-cover"
            />
            
            {/* Name and batch overlay at bottom left */}
            <div className="absolute bottom-0 left-0 p-4 md:p-6  bg-gradient-to-t from-[#1A97A2] to-transparent w-full">
              <h3 className="text-white text-xl md:text-3xl font-bold leading-tight">{card.name}</h3>
              <p className="text-white/90 text-sm md:text-base mt-1 mb-4">{card.batch}</p>
            </div>
          </div>

          {/* <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <IconPlus className="h-5 w-5 text-[#b19bff]" />
          </div> */}
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 rounded-xl bg-[#1A97A2] [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
          {/* Comment at the top */}
          <div className="p-4 md:p-6 flex-1">
            <p className="text-white text-base leading-relaxed font-medium">{card.comment}</p>
          </div>

          {/* Name, batch, and profile image at the bottom in the same line */}
          <div className="p-4 md:p-6 flex items-center gap-4">
            {/* Round profile image */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden  flex-shrink-0">
              <Image 
                src={card.src || "/placeholder.svg"} 
                alt={card.name} 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Name and batch */}
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{card.name}</h3>
              <p className="text-white/90 text-sm md:text-base">{card.batch}</p>
            </div>
          </div>
{/* 
          <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <IconX className="h-5 w-5 text-[#b19bff]" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src || "/placeholder.svg"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
