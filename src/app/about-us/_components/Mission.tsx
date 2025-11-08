"use client";
import PointVector from "@/components/svg/PointVector";
import Vector from "@/components/svg/Vector";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const whiteCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = cardRef.current;
    const whiteCard = whiteCardRef.current;

    if (!section || !whiteCard) return;

    gsap.set(whiteCard, { y: 0 }); // reset position

    let scrollTriggerInstance: ScrollTrigger | null = null;

    const setupAnimation = () => {
      // Kill existing ScrollTrigger
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
      }

      // Desktop only animation
      if (window.innerWidth >= 1024) {
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // smoother animation
          invalidateOnRefresh: true,
          animation: gsap.to(whiteCard, { y: "10rem", ease: "none" }),
        });
      } else {
        gsap.set(whiteCard, { y: 0 });
      }
    };

    setupAnimation();

    const handleResize = () => setupAnimation();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollTriggerInstance?.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) trigger.kill();
      });
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="~px-[0.9375rem]/[18.75rem] lg:pb-[10rem] ~gap-[2.5rem]/[3rem] flex lg:flex-row flex-col ~pt-[0.9375rem]/[1.5625rem]"
    >
      {/* Blue Card */}
      <div className="bg-[#004EB2] lg:w-[50%] relative h-fit ~pb-[8.5625rem]/[19.375rem] ~pt-[0.875rem]/[1.875rem] text-white ~px-[0.5625rem]/[1.25rem] ~gap-[0.625rem]/[1.875rem] flex md:flex-row flex-col ~rounded-[0.625rem]/[1.873125rem]">
        <Vector className="absolute bottom-0 left-0 z-30 ~w-[12rem]/[25.88rem]" />
        <h4 className="flex text-[1rem] h-fit items-center gap-[0.4375rem] font-ppMoriSemibold">
          <PointVector />
          Vision
        </h4>
        <p className="~text-[0.875rem]/[1.873125rem] leading-[110%]">
          Deliver end-to-end solutions driven by technology, sustainability, and
          a customer-first approach.
        </p>
      </div>

      {/* White Card */}
      <div
        ref={whiteCardRef}
        className="bg-white relative lg:w-[50%] ~pb-[8.5625rem]/[19.375rem] ~pt-[0.875rem]/[1.875rem] text-black ~px-[0.5625rem]/[1.25rem] ~gap-[0.625rem]/[1.875rem] flex md:flex-row flex-col ~rounded-[0.625rem]/[1.873125rem]"
      >
        <Vector className="absolute bottom-0 left-0 z-30 text-[#004EB2] ~w-[12rem]/[25.88rem]" />
        <h4 className="flex text-[1rem] h-fit items-center gap-[0.4375rem] font-ppMoriSemibold">
          <PointVector className="text-[#004EB2]" />
          Mission
        </h4>
        <p className="~text-[0.875rem]/[1.873125rem] leading-[110%]">
          To be the regions largest New & Used container stocking company,
          global logistics partner, redefining container and supply chain
          solutions with innovation and sustainability.
        </p>
      </div>
    </div>
  );
};

export default Mission;
