"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  top: string;
};
gsap.registerPlugin(ScrollTrigger);

const BlueFade = ({ top }: Props) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: gradientRef.current.parentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          // multiplier > 1 → faster
          const progress = Math.min(1, self.progress * 1.2);
          gsap.set(gradientRef.current, { top: `${20 - 20 * progress}rem` });
        },
      },
    });
  }, []);
  return (
    <div
      ref={gradientRef}
      className={`absolute h-[150vh] bg-gradient-to-t z-10 inset-0 from-[#004EB2] from-[60%] to-transparent via-[#004EB2]/80 via-[75%] ${top}`}
    ></div>
  );
};

export default BlueFade;
