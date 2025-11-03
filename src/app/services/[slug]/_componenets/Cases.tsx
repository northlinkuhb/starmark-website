"use client";
import TextAnimation from "@/components/animations/TextAnimation";
import React, { useState } from "react";

import Image from "next/image";
import PointVector from "@/components/svg/PointVector";
import ScrollableTable from "@/components/ScrollableTable";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  cases: {
    title: string;
    description: string;
    image: string;
  }[];
};

const fadeVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
};

const Cases = ({ cases }: Props) => {
  const [activeCase, setActiveCase] = useState(cases[0]);

  return (
    <div className="~px-[0.9375rem]/[18.75rem] ~pb-[4.25rem]/[8.4375rem]">
      <div>
        <TextAnimation delay={0.2}>
          <h2 className="~text-[1.5rem]/[3.99625rem] ~pb-[0.625rem]/[1.875rem] pt-[1.125rem] whitespace-nowrap leading-[100%] text-[#004EB2] font-medium">
            Use Cases
          </h2>
        </TextAnimation>

        <div className="flex justify-between xl:flex-row flex-col ~gap-[2.25rem]/[6.5625rem] xl:~gap-[-6.25rem]/[6.5625rem]">
          <div className="~h-[16.1556167603rem]/[30.25rem] shrink-0 relative overflow-hidden ~rounded-[0.33375rem]/[0.625rem] w-full xl:~w-[18.125rem]/[33.9375rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.title}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  className="object-cover rounded"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col ~gap-[1.5rem]/[2.5rem] justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCase.title + "-title"}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="font-ppMoriSemibold leading-[100%] order-1 xl:order-none text-[1rem] flex items-center gap-[0.5rem]"
              >
                <PointVector className="mb-1 text-[#004EB2]" />
                {activeCase.title}
              </motion.p>
            </AnimatePresence>

            <div className="order-2 xl:order-none h-[13.5rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase.title + "-desc"}
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <TextAnimation delay={0.2} animateOnScroll={true}>
                    <p className="text-[#6F6F6F] leading-[120%] ~text-[1.25rem]/[1.873125rem]">
                      {activeCase.description}
                    </p>
                  </TextAnimation>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="xl:~w-[18.125rem]/[42rem]">
              <div className="overflow-x-auto no-scrollbar">
                <ScrollableTable>
                  {cases
                    .filter((c) => c.title !== activeCase.title)
                    .map((c, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveCase(c)}
                        className="cursor-pointer relative overflow-hidden ~h-[8.4355831146rem]/[11rem] ~w-[9.4900302887rem]/[12.375rem] shrink-0 ~rounded-[0.5rem]/[0.625rem]"
                      >
                        <Image
                          src={c.image}
                          fill
                          alt={c.title}
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0">
                          <p className="font-ppMoriSemibold text-white ~pb-[0.875rem]/[1rem] ~pl-[0.625rem]/[0.8125rem] leading-[100%] text-[1rem] z-10 flex items-center gap-[0.5rem]">
                            <PointVector className="mb-1 shrink-0" />
                            {c.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </ScrollableTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
