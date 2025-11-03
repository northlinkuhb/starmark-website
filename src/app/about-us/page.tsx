import React from "react";
import Hero from "./_components/Hero";
import OurStory from "./_components/OurStory";
import Mission from "./_components/Mission";
import OurJourney from "./_components/OurJourney";
import Partner from "./_components/Partner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Starmark Logistics - Trusted Since 2005",
  description:
    "Discover the story of Starmark Logistics. Since 2005, we’ve built a legacy of trust, efficiency, and global logistics expertise, offering reliable container solutions, freight services, and end-to-end supply chain support.",
  alternates: {
    canonical: "/about-us",
  },
};
const page = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <Mission />
      <OurJourney />
      <Partner />
    </div>
  );
};

export default page;
