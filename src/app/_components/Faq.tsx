"use client";
import React, { useState } from "react";

import { Disclosure, DisclosureButton } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";
import PlusIcon from "@/components/svg/PlusIcon";
import MinusIcon from "@/components/svg/MinusIcon";
import collabrate from "@public/images/collabrate.png";
import Image from "next/image";
import TextAnimation from "@/components/animations/TextAnimation";
import ArrowButton from "@/components/ArrowButton";
import ArrowTopRight from "@/components/svg/ArrowTopRight";
import Link from "next/link";
import Partner from "../about-us/_components/Partner";

const questions = [
  {
    title: "What services does Starmark provide?",
    description:
      "We specialize in container solutions including sales, leasing, repairs, reefer containers, conversion projects, terminal services, shipping, and end-to-end logistics such as customs clearance and freight forwarding.",
  },
  {
    title: "Do you sell both new and used containers?",
    description:
      "Yes, we provide both brand-new and pre-owned containers in excellent condition. Every used container is thoroughly inspected and certified to meet international standards, giving you flexible, reliable, and cost-effective options for your business needs.",
  },
  {
    title: "Can I lease containers for short-term projects?",
    description:
      "Absolutely. Starmark offers short- and long-term container leasing options tailored to your project timeline and budget. Whether you need units for a few weeks or several months, we ensure quick availability and hassle-free contract management.",
  },
  {
    title: "What types of containers are available?",
    description:
      "We offer a wide variety of container types, including standard dry containers, high cubes, reefers, open tops, flat racks, and customized conversion units. Each container is maintained to the highest quality standards for safety and durability.",
  },
  {
    title: "How do I request a quotation?",
    description:
      "You can easily request a quotation by contacting our sales team via our website or email. Simply provide details like container type, size, and location — and our logistics experts will respond promptly with a tailored proposal.",
  },
  {
    title: "Can containers be customized or converted?",
    description:
      "Yes, we specialize in container modification and conversion projects. From office cabins and retail units to workshops and storage spaces, our engineering team transforms standard containers into fully functional, purpose-built solutions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <div className="~px-[0.625rem]/[33.5rem] ~pb-[2.375rem]/[10.3125rem] flex flex-col items-center">
        <h2 className="~text-[1.5rem]/[3.5rem] text-center leading-[110%] text-[#004EB2] ">
          Frequently Asked Questions
        </h2>
        <p className="~pt-[1rem]/[2rem] text-center leading-[120%] text-[#002257] ~text-[1rem]/[1.5rem] ~pb-[1.25rem]/[1.5rem]">
          Find Quick Answers About Container Sales, Leasing, Shipping & More
        </p>

        <div className="flex flex-col ~gap-[0.5rem]/[1.125rem]">
          {" "}
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Disclosure key={index}>
                <div className="border z-40 border-[#004EB214] ~px-[0.625rem]/[1.90625rem]  ~rounded-[0.45rem]/[1.315625rem]">
                  <DisclosureButton
                    onClick={() => setOpenIndex(index)}
                    className={`w-full   `}
                  >
                    <div
                      className={` duration-500 text-[#002257] flex justify-between gap-2 leading-[110%] ~text-[1.0625rem]/[1.5rem] text-darkCyan ease-in-out transition-all ${
                        isOpen
                          ? "~pt-[0.75rem]/[1.5rem] ~pb-[0.5rem]/[0.75rem]"
                          : "~pt-[0.75rem]/[1rem] ~pb-[0.75rem]/[1rem]"
                      }`}
                    >
                      <h3 className=" text-start">{item.title}</h3>
                      {isOpen ? (
                        <MinusIcon className="~size-[0.75rem]/[1.5625rem] shrink-0" />
                      ) : (
                        <PlusIcon className="~size-[0.75rem]/[1.5625rem]  shrink-0" />
                      )}
                    </div>
                  </DisclosureButton>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="~pb-[0.875rem]/[1.375rem] ~text-[0.875rem]/[1.25rem] leading-[130%] text-[#002257]">
                          <p>{item.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Disclosure>
            );
          })}
        </div>
      </div>
      <Partner />

      <div className="~px-[1rem]/[19.375rem] ~pb-[2.9375rem]/[7.5rem]  ">
        <div className="flex lg:flex-row flex-col ~gap-[0rem]/[5.625rem] bg-white rounded-[0.625rem] overflow-hidden">
          <div className="lg:w-[45%] ">
            <div className="w-full relative lg:h-full ~h-[19.7727279663rem]/[37.5rem]">
              <Image
                src={collabrate}
                fill
                alt="Collabrate"
                className="object-cover "
              />
            </div>
          </div>
          <div className="lg:w-[55%]">
            <div className="~py-[1rem]/[5.625rem] ~px-[0.5rem]/[5.625rem] lg:px-0 lg:~pr-[0rem]/[5.625rem]">
              <TextAnimation delay={0.2}>
                <h2 className="text-[#6F6F6F] leading-[110%] lg:max-w-[15ch] ~text-[1.5rem]/[3.125rem]">
                  Collaborate with{" "}
                  <span className="text-[#004EB2]">Starmark</span>
                </h2>

                <p className="text-[1rem] ~pt-[0.75rem]/[1.25rem] lg:max-w-[48ch] leading-[120%] text-[#6F6F6F]">
                  Let Starmark supply the New & Used containers, manage your
                  transportation and supply chain requirements with unmatched
                  precision and care. Experience the difference today!
                </p>
              </TextAnimation>
              <div className="~pt-[1.375rem]/[2.5rem] ~gap-[1.375rem]/[2.5rem] flex flex-wrap items-center">
                <Link href={"/contact"}>
                  <ArrowButton
                    className="bg-[#004EB2] ~gap-[1.0625rem]/[1.25rem] max-sm:w-full max-sm:justify-between text-white hover:bg-white hover:text-[#004EB2]"
                    content="Get a quote"
                  />
                </Link>

                <Link href="mailto:containers@starmarkco.com">
                  <motion.div
                    whileHover="hover"
                    className="text-black hover:text-[#004EB2] max-sm:w-full max-sm:justify-between  max-lg:~px-[1rem]/[1.75rem] duration-300 transition-all ease-in-out hover:border-b-[#004EB2] border-b border-b-black pb-[0.3rem] flex gap-[1.25rem] font-ppMoriSemibold items-center"
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
                  </motion.div>
                </Link>
              </div>
              <div className="flex flex-col ~pt-[1rem]/[2.5rem] font-ppMoriSemibold ~text-[0.875rem]/[1rem] leading-[120%] ~gap-[0.375rem]/[1rem]">
                <p>Effortless Deliveries</p>
                <p>Adaptive Solutions</p>
                <p>Perfect Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
