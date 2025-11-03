import * as React from "react";
import { SVGProps } from "react";
const HumBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      stroke="#004EB2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 20h18m-18-6h18M11 26h18"
    />
  </svg>
);
export default HumBurger;
