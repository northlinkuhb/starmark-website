"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "@/components/animations/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const OurJourney = () => {
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const desktopLineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    const mobileLineEl = mobileLineRef.current;
    const desktopLineEl = desktopLineRef.current;

    if (!container) return;

    const isDesktop = window.innerWidth >= 1024;
    const activeLineEl = isDesktop ? desktopLineEl : mobileLineEl;

    let timeline: gsap.core.Timeline | null = null;

    if (activeLineEl) {
      timeline = gsap.timeline({
        scrollTrigger: {
          id: "our-journey-timeline",
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const totalItems = itemsRef.current.length;
            const visibleItems = Math.floor(progress * totalItems * 1.2);

            itemsRef.current.forEach((item, index) => {
              const dot = dotsRef.current[index];
              if (index <= visibleItems) {
                gsap.to(item, { opacity: 1, y: 0, duration: 0.3 });
                if (dot) gsap.to(dot, { scale: 1, duration: 0.3 });
              } else {
                gsap.to(item, { opacity: 0, y: 30, duration: 0.3 });
                if (dot) gsap.to(dot, { scale: 0, duration: 0.3 });
              }
            });
          },
        },
      });

      if (isDesktop) {
        gsap.set(activeLineEl, { scaleX: 0, transformOrigin: "left center" });
        timeline.to(activeLineEl, { scaleX: 1, duration: 1, ease: "none" });
      } else {
        gsap.set(activeLineEl, { scaleY: 0, transformOrigin: "top center" });
        timeline.to(activeLineEl, { scaleY: 1, duration: 1, ease: "none" });
      }

      itemsRef.current.forEach((item, index) => {
        if (item) gsap.set(item, { opacity: 0, y: 30 });
        const dot = dotsRef.current[index];
        if (dot) gsap.set(dot, { scale: 0, transformOrigin: "center center" });
      });
    }

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      if (timeline) timeline.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="~pt-[2.5rem]/[4.75rem] ~px-[0.9375rem]/[18.75rem]">
      <TextAnimation delay={0.2}>
        <h2 className="~text-[1.5rem]/[3.99625rem] whitespace-nowrap pb-[1.6875rem] leading-[100%] text-[#004EB2] font-medium">
          Our Journey
        </h2>
      </TextAnimation>
      <div
        ref={sectionRef}
        className="bg-[#004EB2] rounded-[0.625rem] relative overflow-hidden ~px-[0.625rem]/[5.3125rem] lg:~px-[0.625rem]/[1.3125rem] ~pb-[2.5rem]/[6rem] ~pt-[2.875rem]/[8.6875rem]"
      >
        <div
          ref={mobileLineRef}
          className="~w-[0.1875rem]/[0.3746666014rem] lg:hidden bg-white h-full absolute z-[5] top-0  ~left-[0.625rem]/[5.3125rem]"
        />

        <div
          ref={desktopLineRef}
          className="timeline-line hidden lg:flex w-full absolute z-10 left-0 bg-white ~h-[0.1875rem]/[0.3746666014rem] "
        ></div>

        <div className="absolute right-0 lg:h-full w-full h-[5%] lg:w-[5%] bg-gradient-to-b lg:bg-gradient-to-l from-[#004EB2] to-transparent top-0 z-10"></div>
        <div className="absolute left-0 lg:h-full w-full h-[5%] lg:w-[5%] bg-gradient-to-t lg:bg-gradient-to-r from-[#004EB2] to-transparent bottom-0 lg:top-0 z-10"></div>

        <div className="grid text-white lg:grid-cols-4">
          {[
            { year: "2005", text: "Founded as a container leasing company." },
            {
              year: "2008",
              text: "Expanded to domestic logistics and freight forwarding.",
            },
            {
              year: "2010",
              text: "Established first international partnerships in Asia & Middle East.",
            },
            { year: "2015", text: "Launched dedicated warehousing solutions." },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className="relative"
            >
              <div
                ref={(el) => {
                  if (el) dotsRef.current[i] = el;
                }}
                className="~size-[1.2562500238rem]/[2.875rem] bg-white rounded-full absolute lg:~top-[-0.3rem]/[-1.4375rem] ~left-[-0.525rem]/[-1.3375rem] lg:left-0"
              ></div>
              <div className="lg:~pt-[1.3125rem]/[5.5rem] lg:pl-0 ~pl-[1.3125rem]/[5.5rem]">
                <h2 className="~text-[1.5rem]/[1.873125rem] leading-[110%] font-medium">
                  {item.year}
                </h2>
                <p className="~text-[0.875]/[1.5rem] leading-[110%] lg:pb-0 ~pb-[1.25rem]/[3rem] pr-2 lg:max-w-[20ch]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
