import * as React from "react";
import { SVGProps } from "react";
const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M24 .652H0v24h24v-24Z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#004EB2"
        d="M22.223.652H1.772C.792.652 0 1.426 0 2.382v20.536c0 .956.792 1.734 1.772 1.734h20.451c.98 0 1.777-.778 1.777-1.73V2.383c0-.956-.797-1.73-1.777-1.73ZM7.12 21.104H3.558V9.648H7.12v11.456ZM5.34 8.087a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.017h-3.558v-5.569c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.448-2.133 2.943v5.663H9.356V9.648h3.413v1.565h.047c.473-.9 1.636-1.851 3.365-1.851 3.605 0 4.27 2.372 4.27 5.456v6.286Z"
      />
    </g>
  </svg>
);
export default LinkedIn;
