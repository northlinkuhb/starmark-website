import React from "react";
import Hero from "./_components/Hero";
import ServiceSection from "./_components/ServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Starmark Logistics Container & Freight Solutions",
  description:
    "Explore Starmark Logistics’ wide range of services including container sales, leasing, freight forwarding, logistics, warehousing, and complete supply chain solutions tailored to your business needs.",
  alternates: {
    canonical: "/services",
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
    </div>
  );
};

export default page;
