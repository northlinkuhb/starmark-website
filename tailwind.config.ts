import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const configs: Config = {
  content: {
    files: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }: any) => ({
      defaultScreens: ["20rem", "120rem"],
    }),
    extend: {
      colors: {},
      fontFamily: {
        ppMoriReqular: "var(--font-pp-mori-regular)",
        ppMoriSemibold: "var(--font-pp-mori-semibold)",
      },
      fontSize: {},
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
};

export default configs;
