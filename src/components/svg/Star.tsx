import * as React from "react";
import { SVGProps } from "react";
const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
    fill="none"
    {...props}
  >
    <path
      fill="#FF9100"
      d="M10.397 6.613h6.43l-5.205 3.774 1.987 6.113-5.199-3.774L3.212 16.5l1.987-6.113L0 6.613h6.423L8.41.5l1.987 6.113Z"
    />
  </svg>
);
export default Star;
