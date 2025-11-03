import * as React from "react";
import { SVGProps } from "react";
const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={25}
    //     height={25}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path
      fill="#004EB2"
      d="M22.298 12.879a1.128 1.128 0 0 1-1.128 1.127H4.631a1.128 1.128 0 1 1 0-2.255h16.54a1.128 1.128 0 0 1 1.127 1.128Z"
    />
  </svg>
);
export default MinusIcon;
