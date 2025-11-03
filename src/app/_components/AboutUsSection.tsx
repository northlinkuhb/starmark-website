"use client";
import ArrowTopRight from "@/components/svg/ArrowTopRight";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

import truck from "@public/images/Truck.png";
import PointVector from "@/components/svg/PointVector";
import ArrowButton from "@/components/ArrowButton";
import TextAnimation from "@/components/animations/TextAnimation";
import products from "../../data/products.json";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Services = products;
const AboutUsSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="~mt-[-5rem]/[-20.8125rem]">
      <div className=" ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full flex md:justify-center  "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="z-[50] relative xl:bg-white rounded-[0.625rem] xl:w-fit ~p-[1.5rem]/[3.125rem] ~gap-[1.25rem]/[0.625rem] flex  ">
            {Services.filter((service) => service.featured).map(
              (service, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Link
                    key={index}
                    href={`/products/${service.slug}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <CarouselItem className="basis-1/1 ~w-[16.75rem]/[24.5831241608rem]  bg-[#F9F9F9] border border-[#E5E5E5] cursor-pointer overflow-hidden  group rounded-[0.625rem]">
                      <div className="~p-[1.125rem]/[1.875rem] ">
                        <div className="~py-[1.25rem]/[2.5rem] ">
                          <h3 className="text-black line-clamp-2 h-[3ch] text-ellipsis ~text-[1.125rem]/[1.375rem] leading-[110%]">
                            {service.title}
                          </h3>
                          <p className="text-[#6F6F6F] leading-[110%] h-full line-clamp-2 text-ellipsis ~pt-[0.25rem]/[0.75rem] ~text-[0.875rem]/[1rem]">
                            {service.subtitle}
                          </p>
                        </div>

                        <div className="flex items-center w-fit pb-[0.3125rem] cursor-pointer">
                          <motion.div
                            initial={{ width: "2rem", borderColor: "#000" }}
                            animate={
                              isHovered
                                ? { width: "100%", borderColor: "#004EB2" }
                                : { width: "2rem", borderColor: "#000" }
                            }
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="border-b border-solid flex items-center gap-[1.5rem] overflow-hidden"
                          >
                            <motion.p
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                isHovered
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="text-[#004EB2] whitespace-nowrap"
                            >
                              View Container
                            </motion.p>

                            <motion.div
                              animate={
                                isHovered
                                  ? { x: 0, color: "#004EB2" }
                                  : { x: -135, color: "#000000" }
                              }
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex items-center"
                            >
                              <ArrowTopRight className="size-[1.5rem]" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                      <div className="bg-white h-full  ">
                        <motion.div
                          animate={
                            isHovered
                              ? { y: -6, scale: 1.05, rotateY: 6 }
                              : { y: 0, scale: 1, rotateY: 0 }
                          }
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          style={{ perspective: 1200 }}
                          className=" w-full relative ~h-[5.8125rem]/[8.75rem]"
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            layout="fill"
                            className="object-cover object-center rounded-b-[0.625rem]"
                          />
                        </motion.div>
                      </div>
                    </CarouselItem>
                  </Link>
                );
              }
            )}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="~px-[1rem]/[17rem]">
        <div className="~pt-[1.875rem]/[8.3125rem] flex md:flex-row flex-col ~gap-[0.875rem]/[5rem] ">
          <div className="text-black md:~w-[12.125rem]/[18.8125rem] shrink-0 flex flex-col justify-between">
            <p className="font-ppMoriSemibold leading-[100%] text-[1rem] flex items-center gap-[0.5rem]">
              {" "}
              <PointVector className="mb-1 text-[#004EB2]" />
              About us
            </p>
            <Link href={"/about-us"} className="w-fit">
              <ArrowButton
                className="bg-[#004EB2] ~gap-[1.0625rem]/[5rem] hidden md:flex text-white hover:bg-white hover:text-[#004EB2]"
                content="About company"
              />
            </Link>
          </div>

          <TextAnimation delay={0.2} animateOnScroll={true}>
            <p className="text-[#6F6F6F] leading-[120%] ~text-[1.25rem]/[3.4375rem]">
              We specialize in providing &nbsp;
              <span className="text-black">
                high-quality shipping and storage containers,
              </span>
              &nbsp;tailored to meet your needs. Our goal is to stay ahead with
              efficient transportation and versatile solutions to enhance
              efficiency.
            </p>
          </TextAnimation>
        </div>

        <div
          className="~pt-[1.25rem]/[2.6875rem]
        
         flex md:flex-row flex-col ~gap-[0.875rem]/[5rem]"
        >
          <div className="text-black md:~w-[12.125rem]/[18.8125rem] shrink-0 flex flex-col ~gap-[0.9375rem]/[0.625rem] justify-end">
            <div className="flex ~text-[0.875rem]/[1rem] font-ppMoriSemibold">
              <span className="~size-[2.9375rem]/[3.3125rem] z-10 shrink-0 bg-[#004EB2] rounded-full flex items-center justify-center text-white ">
                1
              </span>
              <div className="rounded-full ml-[-1.5rem] pl-[2.875rem] ~h-[2.9375rem]/[3.3125rem] text-black w-full flex items-center bg-white">
                On-Time Deliveries
              </div>
            </div>
            <div className="flex ~text-[0.875rem]/[1rem] font-ppMoriSemibold">
              <span className="~size-[2.9375rem]/[3.3125rem] z-10 shrink-0 bg-[#004EB2] rounded-full flex items-center justify-center text-white ">
                2
              </span>
              <div className="rounded-full ml-[-1.5rem] pl-[2.875rem] leading-[120%] ~h-[2.9375rem]/[3.3125rem] text-black w-full flex items-center bg-white">
                Cost-Effective Solutions
              </div>
            </div>
            <div className="flex ~text-[0.875rem]/[1rem] font-ppMoriSemibold">
              <span className="~size-[2.9375rem]/[3.3125rem] z-10 shrink-0 bg-[#004EB2] rounded-full flex items-center justify-center text-white ">
                3
              </span>
              <div className="rounded-full ml-[-1.5rem] pl-[2.875rem] ~h-[2.9375rem]/[3.3125rem] text-black w-full flex items-center bg-white">
                Scalable Services
              </div>
            </div>
          </div>

          <div className=" w-full ~h-[8.1156721115rem]/[26.25rem] relative">
            <Image
              src={truck}
              fill
              alt=""
              className="object-cover ~rounded-[0.193125rem]/[0.625rem]"
            />
          </div>

          <div className="md:hidden flex justify-center">
            <ArrowButton
              className="bg-[#004EB2]  text-white hover:bg-white hover:text-[#004EB2]"
              content="About company"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
