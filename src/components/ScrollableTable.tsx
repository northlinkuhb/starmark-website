"use client";
import { cn } from "@/utils/tailwind";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ScrollableTableProps {
  children: ReactNode;
  fadeColor?: string;
  className?: string;
  disableLeftFade?: boolean;
  disableRightFade?: boolean;
}

const ScrollableTable: React.FC<ScrollableTableProps> = ({
  children,
  fadeColor = "#F9F9F9",
  className,
  disableLeftFade = false,
  disableRightFade = false,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const TOLERANCE = 5;

  const checkFade = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > TOLERANCE);
    setShowRightFade(
      el.scrollLeft + el.clientWidth < el.scrollWidth - TOLERANCE
    );
  };

  useEffect(() => {
    checkFade();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkFade);
    window.addEventListener("resize", checkFade);
    return () => {
      if (el) el.removeEventListener("scroll", checkFade);
      window.removeEventListener("resize", checkFade);
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollRef}
        className="overflow-x-auto ~gap-[1.8125rem]/[3.1875rem] flex no-scrollbar overflow-y-hidden  "
      >
        {children}
      </div>
      <AnimatePresence>
        {!disableLeftFade && showLeftFade && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pointer-events-none absolute top-0 left-0 h-full w-8 z-40"
            style={{
              background: `linear-gradient(to right, ${fadeColor}, transparent)`,
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!disableRightFade && showRightFade && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pointer-events-none absolute top-0 right-0 h-full w-8 z-40"
            style={{
              background: `linear-gradient(to left, ${fadeColor}, transparent)`,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollableTable;
