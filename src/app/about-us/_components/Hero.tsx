import TextAnimation from "@/components/animations/TextAnimation";
import Map from "@/components/svg/Map";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#004EB2] ~pt-[9.1875rem]/[18.5rem] overflow-hidden pb-[6.375rem] relative ~px-[1rem]/[8.5625rem]">
      <Map className=" absolute max-md:-inset-4  md:~right-[0]/[10.625rem] bottom-0 ~w-[36.9714584351rem]/[68.7593383789rem]" />
      <div className="relative z-10">
        <TextAnimation delay={0.2}>
          <h2 className="~text-[1.625rem]/[6.25rem] leading-[100%] text-white max-md:text-center md:max-w-[15ch]">
            About Starmark
          </h2>
        </TextAnimation>
        <TextAnimation delay={0.2}>
          <p className="~text-[0.875rem]/[1.875rem] max-md:text-center md:max-w-[35ch] leading-[120%] ~pt-[1.25rem]/[0.7rem] text-white font-medium">
            Delivering Excellence in Container & Logistics Solutions Since 2005.
          </p>
        </TextAnimation>
      </div>
    </div>
  );
};

export default Hero;
