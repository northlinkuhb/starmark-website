import * as React from "react";
import { SVGProps } from "react";
const HoverArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={12}
    // height={11}
    viewBox="0 0 12 11"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m.72 10.153 8.663-8.662H1.958L1.894.494h9.193v9.192l-.997-.063V2.198L1.428 10.86l-.707-.707Z"
    />
  </svg>
);
export default HoverArrow;
