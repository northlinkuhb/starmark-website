"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import ArrowTopRight from "./svg/ArrowTopRight";
import { cn } from "@/utils/tailwind";

type Props = {
  content: string;
  className?: string;
};

const ArrowButton = ({ content, className }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "font-ppMoriSemibold group w-fit  flex items-center ease-in-out transition-all duration-300 rounded-full border ~py-[0.625rem]/[1rem] ~px-[1rem]/[1.75rem] cursor-pointer",
        className
      )}
    >
      {content}
      <motion.span
        animate={
          hovered ? { rotate: 45, x: 4, y: 0 } : { rotate: 0, x: 0, y: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ArrowTopRight className="~size-[1.5rem]/[1.5625rem]" />
      </motion.span>
    </div>
  );
};

export default ArrowButton;
