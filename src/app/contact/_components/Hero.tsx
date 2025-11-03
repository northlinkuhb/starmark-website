import React from "react";
import contact from "@public/images/newww.png";
import BlueFade from "@/components/BlueFade";
import Image from "next/image";
import ArrowTopRight from "@/components/svg/ArrowTopRight";
import TextAnimation from "@/components/animations/TextAnimation";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="~h-[23.625rem]/[40.25rem] flex flex-col justify-end overflow-hidden relative  w-full">
      <Image src={contact} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-[#004EB2]/70"></div>
      <BlueFade top="top-[20rem]" />
      <div className="~pb-[4.8125rem]/[9.0625rem] z-10 relative font-medium text-white items-center md:items-end ~px-[1rem]/[8.4375rem] justify-between md:flex-row flex-col gap-[1rem] flex ">
        <div className=" flex flex-col items-center md:items-start  ">
          <TextAnimation delay={0.2}>
            <h2 className="~text-[1.625rem]/[6.25rem] leading-[100%]  max-md:text-center md:max-w-[15ch]">
              Contact Us
            </h2>
          </TextAnimation>
          <TextAnimation delay={0.2}>
            <p className="~text-[0.875rem]/[1.875rem] max-md:text-center md:max-w-[35ch] pb-[1ch] leading-[120%] ~pt-[1.25rem]/[0.7rem] ">
              We&apos;re here to help. Get in touch with our team to discuss
              your logistics needs or ask a question.
            </p>
          </TextAnimation>
        </div>

        <Link
          target="_blank"
          href={"https://maps.app.goo.gl/5NwSy8ugRL9KXGzx9"}
          className="~text-[0.875rem]/[1.875rem] hover:underline flex  duration-300 transition-all ease-in-out items-center gap-[0.4375rem]"
        >
          Find Our Location{" "}
          <ArrowTopRight className="~size-[1.25rem]/[2.2rem]" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
