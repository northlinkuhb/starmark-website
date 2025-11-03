import TextAnimation from "@/components/animations/TextAnimation";
import Image from "next/image";
import React from "react";
import about from "@public/images/about-us.png";

const OurStory = () => {
  return (
    <div className="~px-[0.9375rem]/[18.75rem] ~pt-[1.5rem]/[3.75rem]">
      <div className="~pb-[1.25rem]/[2.5rem]  gap-[1.25rem] lg:~gap-[-1.25rem]/[8rem] flex-col flex lg:flex-row border-b border-b-[#E5E5E5">
        <TextAnimation delay={0.2}>
          <h2 className="~text-[1.5rem]/[3.99625rem] whitespace-nowrap  leading-[100%] text-[#004EB2] font-medium">
            {" "}
            Our Story
          </h2>
        </TextAnimation>
        <TextAnimation delay={0.2}>
          <p className="~text-[0.875rem]/[1.25rem] leading-[120%] text-[#6F6F6F]">
            Starmark Logistics began its journey in 2005 as a small container
            solutions provider. Over the years, we expanded into full-scale
            logistics, offering container leasing, freight forwarding,
            warehousing, and supply chain solutions. We’ve built a reputation as
            a trusted partner for industries like manufacturing, retail, and
            trade — with a legacy built on trust, operational efficiency, and
            global reach.
          </p>
        </TextAnimation>
      </div>
      <div className="~py-[1.5625rem]/[3.75rem]">
        <div className="w-full relative  rounded-[0.625rem] overflow-hidden  ~h-[19.625rem]/[25.914440155rem] ">
          <div className=" absolute z-10 inset-0 bg-gradient-to-b from-[#00214C]/0 to-[#004EB2]/60 "></div>{" "}
          <Image
            priority
            src={about}
            alt="About Us"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
