import * as React from "react";
import { SVGProps } from "react";
const Mail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M22 4H2v16h20V4Zm-2 4-8 5-8-5V6l8 5 8-5v2Z" />
  </svg>
);
export default Mail;
