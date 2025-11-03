"use client";
import TextAnimation from "@/components/animations/TextAnimation";
import Star from "@/components/svg/Star";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import efficeiency from "@public/svg/efficeiency.svg";
import support from "@public/svg/support.svg";
import scalability from "@public/svg/scalability.svg";
gsap.registerPlugin(ScrollTrigger);
const Values = () => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const star = starRef.current;
    const text = textRef.current;

    if (!container || !star || !text) return;

    // Set initial states
    gsap.set(star, {
      scale: 0.5,
      opacity: 0,
      rotation: -45,
      filter: "drop-shadow(0 0 0px #FF9100)",
    });
    gsap.set(text, {
      opacity: 0,
      x: -20,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Star animation sequence
    tl.to(star, {
      scale: 1.3,
      opacity: 1,
      rotation: 0,
      filter: "drop-shadow(0 0 15px #FF9100)",
      duration: 0.4,
      ease: "back.out(1.7)",
    })
      .to(star, {
        scale: 1,
        filter: "drop-shadow(0 0 8px #FF9100)",
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        star,
        {
          filter: "drop-shadow(0 0 0px #FF9100)",
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.1"
      )
      // Text animation (starts while star is scaling down)
      .to(
        text,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);
  return (
    <div className="~px-[1rem]/[17rem] ~py-[2.25rem]/[9.375rem]">
      <div className="~px-[0.625rem]/[4.375rem] ~py-[2.5rem]/[4.375rem]  bg-[#011D42] rounded-[0.625rem]">
        <div
          ref={containerRef}
          className="flex items-center gap-[0.5rem] ~pb-[1rem]/[1.0625rem] text-white text-[1rem] font-ppMoriSemibold"
        >
          <p ref={starRef} className="flex-shrink-0">
            <Star className="size-[1.0625rem]" />
          </p>
          <span ref={textRef}>Our values</span>
        </div>

        <TextAnimation delay={0.2} animateOnScroll={true}>
          <h2 className="~text-[1.25rem]/[3.125rem] leading-[110%] max-w-[28ch] text-[#C5DFFF]">
            We are committed to delivering&nbsp;
            <span className="text-white">
              reliable, efficient, and innovative logistics solutions&nbsp;
            </span>
            while maintaining the highest standards of service.
          </h2>
        </TextAnimation>

        <div className="~pt-[2rem]/[4.375rem] ~gap-[1.25rem]/[2rem] lg:gap-0 grid lg:grid-cols-3 ">
          <div>
            {" "}
            <div className="~pb-[1.5rem]/[1.875rem] border-b border-b-[#0070FF80]">
              <div className="size-[2.875rem] bg-[#004EB2] rounded-full flex items-center justify-center ">
                <Image src={efficeiency} alt="efficeiency" />
              </div>
            </div>
            <div className="~pt-[0.875rem]/[2.5rem] lg:pr-3">
              <h2 className="~text-[1rem]/[1.875rem] text-white leading-[110%]">
                Cost Efficiency
              </h2>
              <p className="~pt-[0.5rem]/[0.875rem] lg:max-w-[30ch] leading-[120%] text-[#C5DFFF] ~text-[0.875rem]/[1rem]">
                Our logistics solutions are designed to minimize costs while
                maximizing efficiency, helping you save money.
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="~pb-[1.5rem]/[1.875rem] border-b border-b-[#0070FF80]">
              <div className="size-[2.875rem] bg-[#004EB2] rounded-full flex items-center justify-center ">
                <Image src={scalability} alt="scalability" />
              </div>
            </div>
            <div className="~pt-[0.875rem]/[2.5rem] lg:pr-3">
              <h2 className="~text-[1rem]/[1.875rem] text-white leading-[110%]">
                Scalability
              </h2>
              <p className="~pt-[0.5rem]/[0.875rem] lg:max-w-[30ch] leading-[120%] text-[#C5DFFF] ~text-[0.875rem]/[1rem]">
                We offer scalable logistics services that can grow with your
                business, accommodating increased demand effortlessly.
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="~pb-[1.5rem]/[1.875rem] border-b border-b-[#0070FF80]">
              <div className="size-[2.875rem] bg-[#004EB2] rounded-full flex items-center justify-center ">
                <Image src={support} alt=" Customer Support" />
              </div>
            </div>
            <div className="~pt-[0.875rem]/[2.5rem] ">
              <h2 className="~text-[1rem]/[1.875rem] text-white leading-[110%]">
                Customer Support
              </h2>
              <p className="~pt-[0.5rem]/[0.875rem] lg:max-w-[30ch] leading-[120%] text-[#C5DFFF] ~text-[0.875rem]/[1rem]">
                Our dedicated support team is available 24/7 to assist with any
                logistics inquiries, ensuring a smooth operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
