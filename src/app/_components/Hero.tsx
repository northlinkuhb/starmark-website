import React from "react";

import Image from "next/image";
import heroImage from "@public/images/hero.png";
import Star from "@/components/svg/Star";
import ArrowButton from "@/components/ArrowButton";
import BlueFade from "@/components/BlueFade";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="w-full ~h-[30.625rem]/[68.8125rem] text-white relative overflow-hidden flex justify-center">
        <div className="z-20 gap-[1.25rem] lg:gap-0 flex lg:flex-row flex-col-reverse items-center h-fit ~pt-[9.6875rem]/[20.625rem] ~px-[1rem]/[17rem]">
          <div className="flex flex-col max-lg:items-center">
            <p className="~text-[0.875rem]/[1.875rem] max-lg:text-center max-w-[47ch] leading-[105%]">
              Efficient logistics solutions, ensuring seamless transportation
              and supply chain management.
            </p>
            <div className="flex items-center ~gap-[1rem]/[1.5rem]  ~pb-[1.125rem]/[2.5rem] ~pt-[1rem]/[1.375rem] leading-[100%] text-[1rem] font-ppMoriSemibold">
              <p className="flex items-center gap-[0.5rem]">
                <Star className="size-[1.0625rem] mb-[2px]" />
                In Air
              </p>
              <p className="flex items-center gap-[0.5rem]">
                <Star className="size-[1.0625rem] mb-[2px]" />
                At Sea
              </p>
              <p className="flex items-center gap-[0.5rem]">
                <Star className="size-[1.0625rem] mb-[2px]" />
                On Road
              </p>
            </div>
            <Link href={"/services"} className="w-fit">
              <ArrowButton
                className="hover:bg-[#004EB2] ~gap-[1.0625rem]/[5rem] border-[#004EB2] hover:text-white bg-white text-[#004EB2]"
                content="Our Services"
              />
            </Link>
          </div>
          <h3 className="md:font-ppMoriSemibold text-center lg:text-right leading-[105%] ~text-[1.625rem]/[6.25rem]">
            Rapid Shipping, Efficient Logistics.
          </h3>
        </div>
        <div className=" absolute z-10 inset-0 bg-gradient-to-b from-[#00214C]/0 to-[#004EB2]/60 "></div>{" "}
        <BlueFade top="top-[20rem]" />
        <Image fill className="object-cover" src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
