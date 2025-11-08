import React from "react";
import service from "@public/images/servic-hero.png";
import BlueFade from "@/components/BlueFade";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";
import TextAnimation from "@/components/animations/TextAnimation";
import PointVector from "@/components/svg/PointVector";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className="~h-[23.625rem]/[40.25rem] overflow-hidden relative w-full">
        <Image src={service} alt="" fill className="object-cover" />
        <BlueFade top="top-[20rem]" />
        <div className="relative ~pt-[10.6875rem]/[16.25rem] flex flex-col items-center md:items-start ~px-[1rem]/[8.4375rem] z-10">
          <TextAnimation delay={0.2}>
            <h2 className="~text-[1.625rem]/[6.25rem] leading-[100%] text-white max-md:text-center md:max-w-[15ch]">
              Our Services
            </h2>
          </TextAnimation>
          <TextAnimation delay={0.2}>
            <p className="~text-[0.875rem]/[1.875rem] max-md:text-center md:max-w-[35ch] pb-[1ch] leading-[120%] ~pt-[1.25rem]/[0.7rem] text-white font-medium">
              Your reliable source for high-quality shipping containers,
              offering flexible and cost-effective solutions for your logistics
              and storage needs.
            </p>
          </TextAnimation>

          <Link href={"/contact"}>
            <ArrowButton
              className="hover:bg-[#004EB2] ~gap-[1.0625rem]/[5rem] border-[#004EB2] hover:text-white bg-white text-[#004EB2]"
              content="Get a Quote"
            />
          </Link>
        </div>
      </div>

      <div className="~px-[1rem]/[18.8125rem]  ~pt-[1.25rem]/[5.5625rem]">
        {" "}
        <div className="flex lg:flex-row flex-col ~pb-[1.25rem]/[2.5rem] border-b border-b-[#E5E5E5] gap-[1.25rem] lg:~gap-[1.25rem]/[10rem]">
          <p className="font-ppMoriSemibold leading-[100%] text-[1rem] h-fit flex items-center gap-[0.5rem]">
            {" "}
            <PointVector className="mb-1 text-[#004EB2]" />
            Overview
          </p>
          <TextAnimation delay={0.2}>
            <p className="~text-[0.875rem]/[1.25rem]  leading-[120%] text-[#6F6F6F]">
              <span className="font-ppMoriSemibold text-black">
                Container Sales:&nbsp;
              </span>{" "}
              Looking to buy a container? We provide a wide inventory of new and
              used shipping containers for sale. They are perfect for secure
              storage, shipping, or even custom projects. Choose from various
              sizes and conditions to find the right container for your needs.
              <br />
              <span className="font-ppMoriSemibold text-black">
                Logistics & Freight Forwarding:&nbsp;
              </span>
              We specialize in moving your goods safely and on time, whether
              it&apos;s across the country or around the globe. Our experts
              manage the entire process, from customs clearance to final
              delivery, so you can focus on your business.
            </p>
          </TextAnimation>
        </div>
      </div>
    </div>
  );
};

export default Hero;
