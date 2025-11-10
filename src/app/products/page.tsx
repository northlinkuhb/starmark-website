import React from "react";
import Hero from "./_components/Hero";
import ProductsPage from "./_components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Starmark - Shipping Containers & Solutions",
  description:
    "Browse Starmark  range of high-quality shipping containers for sale and lease. From dry vans to reefers, our reliable products support global freight, storage, and supply chain needs.",
  alternates: {
    canonical: "/products",
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <ProductsPage />
    </div>
  );
};

export default page;
