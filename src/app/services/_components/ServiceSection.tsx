"use client";
import Image from "next/image";
import React from "react";

import ArrowButton from "@/components/ArrowButton";
import { motion } from "motion/react";
import ArrowTopRight from "@/components/svg/ArrowTopRight";
import Link from "next/link";
import serviceData from "@/data/services.json";

const ServiceSection = () => {
  return (
    <div className="~px-[1rem]/[11.875rem] ~pb-[3.3125rem]/[13rem] ~pt-[0.75rem]/[4.25rem]">
      <div className="flex flex-col ~gap-[1rem]/[2.625rem]">
        {serviceData.map((item, i) => (
          <Link
            href={`/services/${item.slug}`}
            className="sticky ~top-[6rem]/[8.75rem]"
            key={i}
          >
            <div className=" w-full relative flex  items-end ~rounded-[0.625rem]/[1.25rem] overflow-hidden h-[80svh] ">
              <div className=" absolute z-10 inset-0 bg-gradient-to-b from-[#00214C]/0 to-[#004EB2]/70 "></div>{" "}
              <Image src={item.image} fill alt="" className="object-cover" />
              <div className="relative z-10 ~px-[0.5rem]/[4.5rem] text-white ~pb-[2.25rem]/[1.4375rem]">
                <h2 className="~text-[1.625rem]/[3.99625rem] leading-[100%] max-w-[15ch] ">
                  {item.title}
                </h2>
                <p className="~text-[0.875rem]/[1.25rem] ~pt-[0.625rem]/[1.6875rem] max-w-[43ch] leading-[112%]">
                  {item.description}
                </p>
                <div>
                  <div className="~pt-[1.375rem]/[2.5rem] ~gap-[1.375rem]/[2.5rem] flex flex-wrap items-center">
                    <Link href={"/contact"}>
                      <ArrowButton
                        className="bg-[white] hover:text-white ~gap-[1.0625rem]/[1.25rem] border-0 max-sm:w-full max-sm:justify-between  hover:bg-[#004EB2] text-[#004EB2]"
                        content="Get a quote"
                      />
                    </Link>

                    <Link href="mailto:containers@starmarkco.com">
                      <motion.button
                        whileHover="hover"
                        className="text-white max-sm:w-full max-sm:justify-between  max-lg:~px-[1rem]/[1.75rem] duration-300 transition-all ease-in-out  border-b border-b-white pb-[0.3rem] flex gap-[1.25rem] font-ppMoriSemibold items-center"
                      >
                        Work with us
                        <motion.span
                          variants={{
                            initial: { x: 0, y: 0, rotate: 0 },
                            hover: { x: 6, y: 0, rotate: 45 },
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <ArrowTopRight className="~size-[1.5rem]/[1.5625rem]" />
                        </motion.span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
