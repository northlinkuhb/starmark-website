import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: process.env.IMAGE_UNOPTIMIZE == "true",
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all domains
      },
      {
        protocol: "http",
        hostname: "**", // allow all domains with http too
      },
    ],
  },
};

export default nextConfig;
