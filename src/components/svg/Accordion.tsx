import * as React from "react";
import { SVGProps } from "react";
const Accordion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={13}
    // height={8}
    viewBox="0 0 13 8"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.57 1.25 6.82 6.5l5.25-5.25"
    />
  </svg>
);
export default Accordion;
