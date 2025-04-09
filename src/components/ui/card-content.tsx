"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface CardContentProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  className?: string;
  subTitle?: string;
  heading?: string;
  subHeading?: string;
  subDescription?: string;
  bottomDescription?: string;
  keyHighlights?: string[]; // ✅ Array of strings
  additionalFeatures?: string[]; // ✅ Optional array of strings
}

export default function CardContent({
  title = "",
  description = "Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem.",
  imageSrc = "https://assets.aceternity.com/macbook.png",
  imageAlt = "Product image",
  backgroundColor = "bg-[#F5F5F7]",
  textColor = "text-neutral-600",
  headingColor = "text-neutral-700",
  className,
  additionalFeatures,
  bottomDescription,
  heading,
  keyHighlights,
  subDescription,
  subHeading,
  subTitle,
}: CardContentProps) {
  return (
    <motion.div
    className={cn(backgroundColor, "md:p-14 rounded-3xl mb-4", className)}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 15,
      },
    }}
    whileHover={{
      y: -5,
      transition: { duration: 0.2 },
    }}
  >
    {/* Image */}
    {imageSrc && (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
            duration: 0.5,
            type: "spring",
            damping: 20,
          },
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={500}
          width={900}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mb-6"
        />
      </motion.div>
    )}

    {/* Main Title + Description */}
    <motion.p className={cn(textColor, "text-base md:text-2xl font-sans max-w-3xl mx-auto")}>
      {title && <span className={cn("font-bold block", headingColor)}>{title}</span>}
      {description}
    </motion.p>

    {/* SubTitle */}
    {subTitle && <p className={cn("text-lg mt-4 font-semibold", headingColor)}>{subTitle}</p>}

    {/* Heading */}
    {heading && <p className={cn("text-lg mt-6 font-semibold", headingColor)}>{heading}</p>}

    {/* Sub Heading */}
    {subHeading && <p className={cn("text-base", textColor)}>{subHeading}</p>}

    {/* Sub Description */}
    {subDescription && <p className={cn("text-base mt-2", textColor)}>{subDescription}</p>}

    {/* Key Highlights */}
    {keyHighlights?.length > 0 && (
      <div className="mt-6">
        <h4 className={cn("text-lg font-semibold mb-2", headingColor)}>Key Highlights</h4>
        <ul className="list-disc list-inside space-y-1 text-base">
          {keyHighlights.map((point, index) => (
            <li key={index} className={textColor}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Additional Features */}
    {additionalFeatures?.length > 0 && (
      <div className="mt-6">
        <h4 className={cn("text-lg font-semibold mb-2", headingColor)}>Additional Facilities</h4>
        <ul className="list-disc list-inside space-y-1 text-base">
          {additionalFeatures.map((feature, index) => (
            <li key={index} className={textColor}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Bottom Description */}
    {bottomDescription && (
      <p className={cn("text-base mt-6 italic", textColor)}>{bottomDescription}</p>
    )}
  </motion.div>
  );
}
