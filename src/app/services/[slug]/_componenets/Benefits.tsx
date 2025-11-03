"use client";
import TextAnimation from "@/components/animations/TextAnimation";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Benefit {
  title: string;
  description: string;
}

type Props = {
  benefits: Benefit[];
};

interface BenefitRefs {
  container?: HTMLDivElement | null;
  circle?: HTMLDivElement | null;
  text?: HTMLDivElement | null;
}

const Benefits = ({ benefits }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const benefitRefs = useRef<BenefitRefs[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const totalBenefits = benefitRefs.current.length;
            const activeIndex = Math.floor(progress * totalBenefits);

            benefitRefs.current.forEach((benefit, index) => {
              if (benefit.circle && benefit.text) {
                if (index <= activeIndex) {
                  gsap.to(benefit.circle, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)",
                  });
                  gsap.to(benefit.text, {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out",
                  });
                } else {
                  gsap.to(benefit.circle, {
                    scale: 0.3,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                  gsap.to(benefit.text, {
                    opacity: 0.3,
                    x: -10,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              }
            });
          },
        },
      });

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          { scaleY: 1, duration: 1, ease: "none" }
        );
      }

      benefitRefs.current.forEach((benefit, index) => {
        if (benefit.circle && benefit.text) {
          if (index === 0) {
            gsap.set(benefit.circle, { scale: 1, opacity: 1 });
            gsap.set(benefit.text, { opacity: 1, x: 0 });
          } else {
            gsap.set(benefit.circle, { scale: 0.3, opacity: 0 });
            gsap.set(benefit.text, { opacity: 0.3, x: -10 });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addBenefitRef = (index: number) => (el: HTMLDivElement | null) => {
    if (!benefitRefs.current[index]) benefitRefs.current[index] = {};
    benefitRefs.current[index].container = el;
  };

  const addCircleRef = (index: number) => (el: HTMLDivElement | null) => {
    if (!benefitRefs.current[index]) benefitRefs.current[index] = {};
    benefitRefs.current[index].circle = el;
  };

  const addTextRef = (index: number) => (el: HTMLDivElement | null) => {
    if (!benefitRefs.current[index]) benefitRefs.current[index] = {};
    benefitRefs.current[index].text = el;
  };

  return (
    <div
      ref={containerRef}
      className="pt-[1.25rem] ~pb-[2.4375rem]/[4.75rem] ~px-[0.9375rem]/[18.75rem]"
    >
      <div className="bg-white flex lg:flex-row flex-col lg:items-center ~px-[0.625rem]/[2.875rem]">
        <div className="lg:w-[48%]">
          <TextAnimation delay={0.2}>
            <h2 className="~text-[1.5rem]/[3.99625rem] ~pb-[0.625rem]/[1.875rem] pt-[1.125rem] whitespace-nowrap leading-[100%] text-[#004EB2] font-medium">
              Benefits of Our <br />
              Service
            </h2>
          </TextAnimation>
        </div>

        <div className="lg:w-[52%] h-full relative overflow-hidden">
          <div className="flex flex-col absolute ~left-[0.3090625rem]/[0.3425rem] items-center">
            {Array.from({ length: 45 }).map((_, i) => (
              <div
                key={i}
                className={`w-[2px] h-2 ${
                  i % 2 === 0 ? "bg-[#3D3D3D33]" : "bg-transparent"
                }`}
              />
            ))}

            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-[2px] bg-[#004EB2] h-full"
              style={{ transformOrigin: "top center" }}
            />
          </div>

          <div className="~pb-[0.625rem]/[1.875rem] lg:~pt-[0.625rem]/[1.875rem] h-full leading-[120%] flex flex-col gap-[1.25rem] ~text-[0.875rem]/[1.25rem]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={addBenefitRef(index)}
                className="relative ~pl-[1.25rem]/[2.3125rem]"
              >
                <div
                  ref={addCircleRef(index)}
                  className="~size-[0.758125rem]/[0.875rem] left-0 top-0 lg:-translate-y-1/2 transform lg:top-1/2 rounded-full bg-[#004EB2] absolute"
                />
                <div ref={addTextRef(index)}>
                  <span className="font-ppMoriSemibold">{benefit.title}</span>{" "}
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
