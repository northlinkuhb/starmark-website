import React from "react";
import Hero from "./_componenets/Hero";
import Overview from "./_componenets/Overview";
import Benefits from "./_componenets/Benefits";
import Cases from "./_componenets/Cases";
import services from "@/data/services.json";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = services.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Service Not Found | Starmark Logistics",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${product.title} | Starmark Logistics`,
    description: product.subtitle,
    alternates: {
      canonical: `/products/${params.slug}`,
    },
  };
}
const page = ({ params }: PageProps) => {
  const service = services.find((p) => p.slug === params.slug);

  if (!service) {
    return notFound();
  }
  return (
    <div>
      <Hero
        image={service.image}
        title={service.title}
        subtitle={service.subtitle}
      />
      <Overview overviewText={service.overview} />
      <Benefits benefits={service.benefits} />
      <Cases cases={service.cases} />
    </div>
  );
};

export default page;
