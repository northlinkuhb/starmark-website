import * as React from "react";
import { SVGProps } from "react";
const ArrowTopRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="currentcolor"
          d="m16.974 10.214-8.607 8.607-1.414-1.414L15.56 8.8H7.973v-2h11v11h-2l.001-7.586Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.97.8h24v24h-24z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M.97.8h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowTopRight;
