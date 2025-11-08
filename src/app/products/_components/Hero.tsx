import React from "react";
import service from "@public/images/new-test.png";
import BlueFade from "@/components/BlueFade";
import Image from "next/image";
import TextAnimation from "@/components/animations/TextAnimation";
const Hero = () => {
  return (
    <div className="~h-[23.625rem]/[40.25rem] overflow-hidden relative w-full">
      <Image src={service} alt="" fill className="object-cover" />
      <BlueFade top="top-[20rem]" />
      <div className="relative ~pt-[10.6875rem]/[18rem] flex flex-col items-center md:items-start ~px-[1rem]/[8.4375rem] z-10">
        <TextAnimation delay={0.2}>
          <h2 className="~text-[1.625rem]/[6.25rem] leading-[100%] text-white max-md:text-center md:max-w-[15ch]">
            Our Products
          </h2>
        </TextAnimation>
        <TextAnimation delay={0.2}>
          <p className="~text-[0.875rem]/[1.875rem] max-md:text-center md:max-w-[35ch] pb-[1ch] leading-[120%] ~pt-[1.25rem]/[0.7rem] text-white font-medium">
            Durable, reliable, and industry-compliant logistics solutions for
            global trade.
          </p>
        </TextAnimation>
      </div>
    </div>
  );
};

export default Hero;
