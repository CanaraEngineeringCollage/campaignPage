"use client";
import React, { useEffect, useRef, useState, createContext, useContext, HTMLAttributes, ButtonHTMLAttributes, RefAttributes, useCallback } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

// Modified MotionProps to resolve onAnimationStart conflict
type CustomMotionProps = Omit<MotionProps, "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"> & {
  onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
  onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
  onAnimationIteration?: React.AnimationEventHandler<HTMLElement>;
};

// Type for motion.div (with RefAttributes)
interface MotionDivProps extends CustomMotionProps, HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {}
const MotionDiv = motion.div as React.ComponentType<MotionDivProps>;

// Type for motion.p
interface MotionPProps extends CustomMotionProps, HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {}
const MotionP = motion.p as React.ComponentType<MotionPProps>;

// Type for motion.button
interface MotionButtonProps extends CustomMotionProps, ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}
const MotionButton = motion.button as React.ComponentType<MotionButtonProps>;

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto pb-10 md:pb-10 pt-5 md:pt-12 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("flex flex-row justify-start gap-4 ", " ps-5 lg:ps-0 max-w-7xl xl:max-w-[75%] mx-auto")}>
            {items.map((item, index) => (
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
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
                className="last:pr-[1%] md:last:pr-[9%] rounded-3xl"
              >
                {item}
              </MotionDiv>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
          aria-label="Scroll Left"
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.555 3.21044L3.614 9.13244L9.5181 15.0924C10.101 15.6814 10.0981 16.6304 9.5091 17.2134C9.2171 17.5034 8.8351 17.6484 8.4531 17.6484C8.0671 17.6484 7.6811 17.5004 7.3881 17.2044L0.431099 10.1824C-0.150901 9.59444 -0.148901 8.64844 0.437099 8.06444L7.4371 1.08644C8.0221 0.501439 8.9741 0.502439 9.5581 1.08944C10.1431 1.67644 10.141 2.62644 9.555 3.21044Z"
                fill="black"
                fillOpacity="0.56"
              />
            </svg>
          </button>
          <button
          aria-label="Scroll Right"
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.55853 7.86717C10.1445 8.45117 10.1465 9.39717 9.56453 9.98517L2.60753 17.0072C2.31453 17.3032 1.92853 17.4512 1.54253 17.4512C1.16053 17.4512 0.778527 17.3062 0.486527 17.0162C-0.102473 16.4332 -0.105473 15.4842 0.477527 14.8952L6.38163 8.93517L0.440627 3.01317C-0.145373 2.42917 -0.147373 1.47907 0.437627 0.892173C1.02163 0.305173 1.97363 0.304173 2.55863 0.889173L9.55853 7.86717Z"
                fill="black"
                fillOpacity="0.56"
              />
            </svg>
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  // Wrap handleClose in useCallback to memoize it
  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  // Move useOutsideClick to top level
  useOutsideClick(containerRef, handleClose);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]); // Add handleClose to dependency array

  const handleOpen = () => {
    setOpen(true);
  };

  // Animation variants for the card
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  // Animation variants for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(8px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeIn" } },
  };

  // Animation variants for content (category, title, close button)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <MotionDiv className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
            <MotionDiv variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
            <MotionDiv
              variants={cardVariants}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative shadow-2xl"
            >
              <MotionButton
                variants={contentVariants}
                className="sticky top-4 h-8 w-8 right-0 cursor-pointer ml-auto bg-black rounded-full flex items-center justify-center"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-6 w-6 text-white" />
              </MotionButton>
              <MotionP variants={contentVariants} layoutId={layout ? `category-${card.title}` : undefined} className="text-lg font-medium text-black">
                {card.category}
              </MotionP>
              <MotionP
                variants={contentVariants}
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-black mt-4"
              >
                {card.title}
              </MotionP>
              <motion.div variants={contentVariants} className="py-10">
                {card.content}
              </motion.div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
      <MotionButton
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-white h-[30rem] w-80 md:h-[30rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <MotionP
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-2xl md:text-base font-bold md:font-medium font-sans text-left"
          >
            {card.category}
          </MotionP>
          <MotionP
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-[17px] md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </MotionP>
        </div>
        <BlurImage src={card.src} alt={card.title} fill className="object-cover absolute z-10 inset-0" />
        <div className="absolute bottom-4 right-4 z-40">
        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.25 0C28.1911 0 36.25 8.05887 36.25 18C36.25 27.9411 28.1911 36 18.25 36C8.30887 36 0.25 27.9411 0.25 18C0.25 8.05887 8.30887 0 18.25 0ZM18.25 10.125C17.892 10.125 17.5481 10.2673 17.2949 10.5205C17.042 10.7736 16.9005 11.1168 16.9004 11.4746V16.6504H11.7246C11.3668 16.6505 11.0236 16.792 10.7705 17.0449C10.5173 17.2981 10.375 17.642 10.375 18C10.375 18.358 10.5173 18.7019 10.7705 18.9551C11.0236 19.208 11.3668 19.3495 11.7246 19.3496H16.9004V24.5254C16.9005 24.8832 17.042 25.2264 17.2949 25.4795C17.5481 25.7327 17.892 25.875 18.25 25.875C18.608 25.875 18.9519 25.7327 19.2051 25.4795C19.458 25.2264 19.5995 24.8832 19.5996 24.5254V19.3496H24.7754C25.1332 19.3495 25.4764 19.208 25.7295 18.9551C25.9827 18.7019 26.125 18.358 26.125 18C26.125 17.642 25.9827 17.2981 25.7295 17.0449C25.4764 16.792 25.1332 16.6505 24.7754 16.6504V16.6592H19.5996V11.4746C19.5995 11.1168 19.458 10.7736 19.2051 10.5205C18.9519 10.2673 18.608 10.125 18.25 10.125Z" fill="#D9D9D9"/>
</svg>

        </div>
      </MotionButton>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
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
