import React from "react";
import overview from "@public/images/overview-img.png";
import Image from "next/image";
import PointVector from "@/components/svg/PointVector";
import TextAnimation from "@/components/animations/TextAnimation";

type Props = {
  overviewText: string;
};
const Overview = ({ overviewText }: Props) => {
  return (
    <div className="~px-[0.9375rem]/[18.75rem] flex lg:flex-row flex-col items-center ~gap-[2.5rem]/[7.875rem] lg:~gap-[-2.5rem]/[7.875rem] ~py-[1.5rem]/[3.75rem]">
      <div>
        <p className="font-ppMoriSemibold leading-[100%] text-[1rem] flex items-center gap-[0.5rem]">
          {" "}
          <PointVector className="mb-1 text-[#004EB2]" />
          Overview
        </p>
        <TextAnimation delay={0.2}>
          <p className="~text-[0.875rem]/[1.25rem]  ~pt-[1.5rem]/[2rem] leading-[120%] text-[#6F6F6F]">
            {overviewText}
          </p>
        </TextAnimation>
      </div>{" "}
      <div className="lg:~w-[18.125rem]/[33.5rem] w-full rounded-[0.625rem] overflow-hidden shrink-0 relative bg-[#A9C5FF1A] ~h-[21.875rem]/[28.9375rem]">
        <Image src={overview} fill alt="Overview" className=" object-cover" />
      </div>
    </div>
  );
};

export default Overview;
