"use client";
import { Product } from "@/app/api/types";
import ArrowTopRight from "@/components/svg/ArrowTopRight";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState, useCallback } from "react";

type ApiResp = {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  items: Product[];
};

const Products = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(9);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResp | null>(null);
  const [error, setError] = useState<string | null>(null);

  const query = useMemo(() => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("pageSize", String(pageSize));
    return params.toString();
  }, [page, pageSize]);

  // Smooth scroll function with better targeting
  const scrollToProducts = useCallback(() => {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      const element = document.getElementById("product-inner");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100);
  }, []);

  // Handle page change with scroll
  const handlePageChange = useCallback(
    (newPage: number) => {
      setPage(newPage);
      scrollToProducts();
    },
    [scrollToProducts]
  );

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/products?${query}`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then((json: ApiResp) => setData(json))
      .catch((err) => setError(err.message || "Error"))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div
      id="product-inner"
      className="~px-[0.9375rem]/[18.75rem] ~gap-[1rem]/[2.5rem] ~pb-[2rem]/[5.8125rem] ~pt-[1.75rem]/[2.5rem]"
    >
      <div className="flex flex-col  bg-white rounded-[0.625rem]  justify-between">
        {/* Products Grid */}
        <div className="~p-[0.5rem]/[2.75rem] ">
          <div className="grid lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ~gap-[1.5rem]/[1.875rem]">
            {loading && (
              <div className="col-span-full p-10 text-center text-gray-400">
                Loading...
              </div>
            )}
            {error && <div className="col-span-full text-red-500">{error}</div>}
            {!loading && data?.items.length === 0 && (
              <div className="col-span-full p-8 text-center text-gray-600">
                No products found.
              </div>
            )}

            {data?.items.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <Link
                  href={`/products/${service.slug}`}
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="bg-[#F9F9F9] border border-[#E5E5E5] w-full cursor-pointer overflow-hidden group rounded-[0.625rem]"
                >
                  <div className="~p-[1.125rem]/[1.875rem]">
                    <div className="~py-[1.25rem]/[2.5rem]">
                      <h3 className="text-black line-clamp-2 h-[3ch] text-ellipsis ~text-[1.125rem]/[1.375rem] leading-[110%]">
                        {service.title}
                      </h3>
                      <p className="text-[#6F6F6F] leading-[110%] h-full line-clamp-2 text-ellipsis ~pt-[0.25rem]/[0.75rem] ~text-[0.875rem]/[1rem]">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Hover CTA */}
                    <div className="flex items-center w-fit pb-[0.3125rem] cursor-pointer">
                      <motion.div
                        initial={{
                          width: "2rem",
                          borderColor: "#000",
                        }}
                        animate={
                          isHovered
                            ? { width: "100%", borderColor: "#004EB2" }
                            : { width: "2rem", borderColor: "#000" }
                        }
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="border-b border-solid flex items-center gap-[1.5rem] overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isHovered
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="text-[#004EB2] whitespace-nowrap"
                        >
                          View Container
                        </motion.p>

                        <motion.div
                          animate={
                            isHovered
                              ? { x: 0, color: "#004EB2" }
                              : { x: -135, color: "#000000" }
                          }
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="flex items-center"
                        >
                          <ArrowTopRight className="size-[1.5rem]" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="bg-white relative overflow-hidden">
                    <motion.div
                      animate={
                        isHovered
                          ? { y: -6, scale: 1.05, rotateY: 6 }
                          : { y: 0, scale: 1, rotateY: 0 }
                      }
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{ perspective: 1200 }}
                      className="w-full relative overflow-hidden ~h-[5.8125rem]/[8.75rem]"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain object-center rounded-b-[0.625rem]"
                      />
                    </motion.div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex ~text-[0.875rem]/[1rem] ~p-[0.5rem]/[1rem] pb-3 text-black font-ppMoriSemibold items-center justify-center">
          <div className="flex max-md:w-full gap-1 items-center">
            {Array.from({ length: data?.totalPages ?? 1 })
              .slice(0, 10)
              .map((_, i) => {
                const pg = i + 1;
                return (
                  <button
                    key={pg}
                    onClick={() => handlePageChange(pg)}
                    className={`~size-[2rem]/[2.5625rem] md:block hidden duration-300 ease-in-out transition-all text-[#6F6F6F] hover:bg-black hover:text-white rounded-full ${
                      data?.page === pg ? "bg-[#DCDFE2]" : ""
                    }`}
                  >
                    {pg}
                  </button>
                );
              })}

            <div className="flex max-md:justify-between max-md:w-full md:~pl-[0]/[3.125rem] gap-[1.75rem]">
              <button
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                disabled={!data || data.page <= 1}
                className="disabled:opacity-50 hover:underline"
              >
                Previous
              </button>

              <button
                onClick={() =>
                  handlePageChange(Math.min(data?.totalPages ?? 1, page + 1))
                }
                disabled={!data || data.page >= (data?.totalPages ?? 1)}
                className="disabled:opacity-50 hover:underline"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
