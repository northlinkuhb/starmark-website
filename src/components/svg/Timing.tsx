import * as React from "react";
import { SVGProps } from "react";
const Timing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={24}
    //     height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3Z"
    />
  </svg>
);
export default Timing;
