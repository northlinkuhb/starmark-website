import * as React from "react";
import { SVGProps } from "react";
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path
      fill="#004EB2"
      d="M22.298 12.921a1.128 1.128 0 0 1-1.128 1.128h-7.142v7.142a1.128 1.128 0 0 1-2.255 0v-7.142H4.63a1.128 1.128 0 0 1 0-2.256h7.142V4.652a1.128 1.128 0 1 1 2.255 0v7.141h7.142a1.128 1.128 0 0 1 1.128 1.128Z"
    />
  </svg>
);
export default PlusIcon;
