"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "@/components/svg/Logo";

const Load = () => {
  const [times, setTimes] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimes(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  const loadingVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };
  return (
    <AnimatePresence>
      {times && (
        <motion.div
          variants={loadingVariants}
          initial="initial"
          exit="exit"
          className=" fixed inset-0 z-[1000000] no-scrollbar overflow-hidden w-full  bg-white flex justify-center items-center"
        >
          <Logo className="~w-[8rem]/[12rem] text-darkCyanBlue" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Load;
