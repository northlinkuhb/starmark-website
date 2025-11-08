import TextAnimation from "@/components/animations/TextAnimation";
import PointVector from "@/components/svg/PointVector";
import Marquee from "react-fast-marquee";
import cosco from "@public/svg/asry.svg";
import evergreen from "@public/svg/air-product.svg";
import hmm from "@public/svg/bapco.svg";
import oneLogo from "@public/svg/ministry.svg";
import kSvg from "@public/svg/alba.png";

import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="~pb-[3.125rem]/[8.125rem] flex items-center flex-col ~gap-[1.25rem]/[2rem] ~px-[0.9375rem]/[18.75rem] overflow-hidden relative">
      <div className="~px-[0]/[3.1875rem]">
        <p className="font-ppMoriSemibold leading-[100%] text-[1rem] flex items-center gap-[0.5rem]">
          {" "}
          <PointVector className="mb-1 text-[#004EB2]" />
          Clients
        </p>
        <TextAnimation delay={0.2}>
          <p className="~text-[0.875rem]/[1.25rem]  ~pt-[1.5rem]/[2rem] leading-[120%] text-[#6F6F6F]">
            We hold globally recognized certifications that ensure quality,
            safety, and compliance in every operation. Our trusted partnerships
            with leading industry players expand our network and enable us to
            deliver seamless, reliable logistics solutions worldwide.
          </p>
        </TextAnimation>
      </div>
      <div className="w-full hidden lg:flex justify-center  relative  ~py-[1.25rem]/[3rem] ">
        <div className="flex ~gap-[-2.5rem]/[5rem] items-center justify-center  ">
          <Image
            src={cosco}
            alt="Cosco Logo"
            className="~h-[1.8163102865rem]/[3.625rem] ~w-[6.4375rem]/[12.875rem]  shrink-0"
          />
          <Image
            src={evergreen}
            alt="Evergreen Logo"
            className="~h-[1.5779709816rem]/[3.625rem] ~w-[8.6875rem]/[16.5rem] shrink-0"
          />
          <Image
            src={oneLogo}
            alt="ONE Logo"
            className="~h-[1.5779709816rem]/[3.625rem] ~w-[1.6875rem]/[3.875rem] shrink-0"
          />
          <Image
            src={hmm}
            alt="HMM Logo"
            className="~h-[1.3194853067rem]/[3.625rem] ~w-[1.625rem]/[4.3125rem] shrink-0"
          />
          <Image
            src={kSvg}
            alt="HMM Logo"
            className="~h-[1.3194853067rem]/[3.625rem] ~w-[2.3125rem]/[6.375rem] shrink-0"
          />
        </div>
      </div>
      <div className="w-full lg:hidden flex flex-col  relative ~py-[1.25rem]/[3rem] ">
        <Marquee delay={1} autoFill={true} className=" ">
          <Image
            src={cosco}
            alt="Cosco Logo"
            className="~h-[1.8163102865rem]/[3.625rem] ~w-[6.4375rem]/[12.875rem] mx-3 object-contain  shrink-0"
          />
          <Image
            src={evergreen}
            alt="Evergreen Logo"
            className="~h-[1.5779709816rem]/[3.625rem] ~w-[8.6875rem]/[16.5rem] mx-3 object-contain  shrink-0"
          />
          <Image
            src={oneLogo}
            alt="ONE Logo"
            className="~h-[1.5779709816rem]/[3.625rem] ~w-[1.6875rem]/[3.875rem] mx-3 object-contain  shrink-0"
          />
          <Image
            src={hmm}
            alt="HMM Logo"
            className="~h-[1.3194853067rem]/[3.625rem] ~w-[1.625rem]/[4.3125rem] mx-3 object-contain  shrink-0"
          />
          <Image
            src={kSvg}
            alt="HMM Logo"
            className="~h-[1.3194853067rem]/[3.625rem] ~w-[2.3125rem]/[6.375rem] mx-3 object-contain  shrink-0"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
