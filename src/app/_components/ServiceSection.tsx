"use client";
import React, { useState } from "react";
import Services from "@/data/services.json";
import Image from "next/image";
import Link from "next/link";
import HoverArrow from "@/components/svg/HoverArrow";
import { motion } from "motion/react";
import TextAnimation from "@/components/animations/TextAnimation";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ServiceSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="~pt-[3.75rem]/[9.375rem] ~px-[1rem]/[17rem]">
      <div className="flex  ~pb-[1.25rem]/[1.875rem] md:border-b md:border-b-[#E5E5E5] items-center ~gap-[0.3rem]/[1rem] lg:flex-row flex-col justify-between">
        <TextAnimation>
          <h2 className="~text-[1.5rem]/[4rem] whitespace-nowrap  leading-[100%] font-medium text-[#004EB2]">
            Our Core Services
          </h2>
        </TextAnimation>
        <TextAnimation>
          <p className="~text-[0.8125rem]/[1.25rem] leading-[110%]  lg:max-w-[40ch] text-[#6F6F6F]">
            Our solutions are tailored to meet the unique challenges of modern
            supply chains, providing speed, reliability, and flexibility at
            every stage of the journey.
          </p>
        </TextAnimation>
      </div>

      <div className="md:grid hidden xl:grid-cols-3 md:grid-cols-2 no-scrollbar overflow-x-auto ~pt-[0]/[3.125rem] ~gap-[1.4375rem]/[1.875rem]">
        {Services.map((service, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Link
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              href={`/services/${service.slug}`}
              key={index}
              className="relative group flex overflow-hidden items-end w-full shrink-0 max-md:~w-[16.8797702789rem]/[25.4166660309rem] ~rounded-[0.913125rem]/[1.375rem] ~h-[19.923664093rem]/[31.875rem]"
            >
              <Image
                fill
                src={service.thumbnanil}
                alt={service.title}
                className="object-cover group-hover:scale-105 transition-transform duration-700 "
              />

              <div className="flex items-center ~px-[1.6875rem]/[2.5rem] justify-between ~pb-[1.25rem]/[1.875rem] z-10 w-full">
                <p className="uppercase text-white leading-[110%] ~text-[1rem]/[1.3125rem]">
                  {service.title}
                </p>
                <motion.span
                  initial={{ opacity: 0, x: -10, y: 10, rotate: 0 }}
                  animate={
                    isHovered
                      ? { opacity: 1, x: 0, y: 0, rotate: 45 }
                      : { opacity: 0, x: -10, y: 10, rotate: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="inline-block"
                >
                  <HoverArrow className="~size-[1rem]/[1.5rem] text-white" />
                </motion.span>
              </div>
            </Link>
          );
        })}
      </div>
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
        <CarouselContent className=" md:hidden">
          {Services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <Link href={`/services/${service.slug}`} key={index}>
                <CarouselItem
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group flex overflow-hidden ~mx-[0.71875rem]/[0.9375rem] items-end w-full shrink-0 max-md:~w-[16.8797702789rem]/[25.4166660309rem] ~rounded-[0.913125rem]/[1.375rem] ~h-[19.923664093rem]/[31.875rem]"
                >
                  <Image
                    fill
                    src={service.thumbnanil}
                    alt={service.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 "
                  />

                  <div className="flex items-center ~px-[1.6875rem]/[2.5rem] justify-between ~pb-[1.25rem]/[1.875rem] z-10 w-full">
                    <p className="uppercase text-white leading-[110%] ~text-[1rem]/[1.3125rem]">
                      {service.title}
                    </p>
                    <motion.span
                      initial={{ opacity: 0, x: -10, y: 10, rotate: 0 }}
                      animate={
                        isHovered
                          ? { opacity: 1, x: 0, y: 0, rotate: 45 }
                          : { opacity: 0, x: -10, y: 10, rotate: 0 }
                      }
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="inline-block"
                    >
                      <HoverArrow className="~size-[1rem]/[1.5rem] text-white" />
                    </motion.span>
                  </div>
                </CarouselItem>
              </Link>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceSection;
