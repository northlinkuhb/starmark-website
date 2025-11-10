import React from "react";
import Hero from "./_components/Hero";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Starmark ",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${product.type} | Starmark `,
    description: product.subtitle,
    alternates: {
      canonical: `/products/${params.slug}`,
    },
  };
}

const ProductPage = ({ params }: PageProps) => {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Hero product={product} />
    </div>
  );
};

export default ProductPage;
