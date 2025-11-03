import React from "react";
import BlueFade from "@/components/BlueFade";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";
import TextAnimation from "@/components/animations/TextAnimation";
import Link from "next/link";
type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const Hero = ({ image, subtitle, title }: Props) => {
  return (
    <div className="~h-[23.625rem]/[40.25rem] overflow-hidden relative w-full">
      <Image src={image} alt="" fill className="object-cover " />
      <div className=" absolute z-10 inset-0 bg-gradient-to-b from-[#00214C]/0 to-[#004EB2]/70 "></div>{" "}
      <BlueFade top="top-[20rem]" />
      <div className="relative ~pt-[10.6875rem]/[16.25rem] flex flex-col items-center md:items-start ~pl-[1rem]/[8.4375rem] z-10">
        <TextAnimation delay={0.2}>
          <h2 className="~text-[1.625rem]/[6.25rem] leading-[100%] text-white max-md:text-center ">
            {title}
          </h2>
        </TextAnimation>
        <TextAnimation delay={0.2}>
          <p className="~text-[0.875rem]/[1.875rem] max-md:text-center md:max-w-[35ch] pb-[1ch] leading-[120%] ~pt-[1.25rem]/[0.7rem] text-white font-medium">
            {subtitle}
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
  );
};

export default Hero;
