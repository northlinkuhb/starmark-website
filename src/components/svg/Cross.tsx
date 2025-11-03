import * as React from "react";
import { SVGProps } from "react";
const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={14}
    // height={14}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path fill="#155CAB" d="M13.027 12.469 2.011.824l-1.028.972L12 13.441z" />
    <path fill="#155CAB" d="M.982 12.47 11.998.823l1.028.973L2.01 13.442z" />
  </svg>
);
export default Cross;
