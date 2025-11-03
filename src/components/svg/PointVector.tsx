import * as React from "react";
import { SVGProps } from "react";
const PointVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m7.5.89 7.361 4.25v8.5L7.5 17.89.139 13.64v-8.5L7.5.89Z"
    />
  </svg>
);
export default PointVector;
