"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVGProps } from "react";

gsap.registerPlugin(ScrollTrigger);

const Vector = (props: SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();

      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 100%",
          toggleActions: "play none none none", // play once only
        },
      });
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 371 125"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeOpacity={0.4}
      strokeWidth={0.999}
      {...props}
    >
      <path
        ref={pathRef}
        d="M367.265 56.47c10.738 39.706-13.144 80.548-53.338 91.219-45.504 12.08-100.701-11.782-146.831-38.079-46.13-26.298-101.327-50.16-146.833-38.08-40.193 10.67-64.075 51.514-53.336 91.22 10.738 39.706 52.032 63.246 92.225 52.575 45.506-12.08 81.266-60.089 107.944-105.715 26.678-45.627 62.438-93.636 107.943-105.716 40.194-10.67 81.488 12.87 92.226 52.576Z"
      />
    </svg>
  );
};

export default Vector;
