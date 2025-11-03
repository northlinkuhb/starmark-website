import * as React from "react";
import { SVGProps } from "react";
const FaceBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#004EB2"
        d="M24.073 12.665C24.073 5.997 18.668.592 12 .592S-.073 5.997-.073 12.665c0 6.026 4.415 11.021 10.187 11.927v-8.437H7.048v-3.49h3.066v-2.66c0-3.026 1.802-4.697 4.56-4.697 1.32 0 2.703.236 2.703.236v2.97h-1.523c-1.5 0-1.967.932-1.967 1.886v2.265h3.348l-.535 3.49h-2.813v8.437c5.771-.906 10.186-5.9 10.186-11.927Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .652h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FaceBook;
