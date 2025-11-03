"use client";
import Image from "next/image";
import React from "react";

import PointVector from "@/components/svg/PointVector";
import ArrowButton from "@/components/ArrowButton";
import ArrowTopRight from "@/components/svg/ArrowTopRight";
import { AnimatePresence, motion } from "motion/react";
import { Product } from "@/app/api/types";
import TextAnimation from "@/components/animations/TextAnimation";
import Link from "next/link";

type Props = {
  product: Product;
};

const Hero = ({ product }: Props) => {
  // const [selectedImage, setSelectedImage] = useState(product.image);
  return (
    <div className="~pt-[5.75rem]/[9.25rem] ~pb-[3.125rem]/[5.9375rem] ~px-[1rem]/[19.375rem]">
      <div className="bg-white rounded-[0.625rem] ~gap-[1rem]/[4.375rem] flex xl:flex-row flex-col xl:items-center ~p-[0.625rem]/[1.375rem]">
        <div className="xl:~w-[16.875rem]/[34.375rem]">
          <div className="xl:~w-[16.875rem]/[34.375rem] shrink-0 relative rounded-[0.625rem] overflow-hidden ~h-[21.5625rem]/[37.5rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={product.image}
                  fill
                  alt=""
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* <div className="flex overflow-x-auto no-scrollbar pt-[1.25rem] pb-2 pr-[1rem] gap-[1.0625rem]">
            {product.map((item, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(item)}
                className={`size-[6.375rem] shrink-0 relative rounded-[0.625rem] overflow-hidden duration-300 ease-in-out transition-all ring-2 ${
                  selectedImage === item
                    ? "ring-[#004EB2]"
                    : "brightness-[0.75] ring-transparent "
                }`}
              >
                <Image src={item} fill alt="" className="object-cover" />
              </button>
            ))}
          </div> */}
        </div>

        <div>
          <TextAnimation delay={0.2}>
            <h2 className="~text-[1.5rem]/[3.125rem]  text-[#004EB2] leading-[105%] ">
              {product.title}
            </h2>
          </TextAnimation>
          <p className="text-[#6F6F6F] xl:max-w-[50ch] ~text-[0.875rem]/[1rem] pt-[1.25rem]">
            {product.subtitle}
          </p>
          <div className="~pt-[1rem]/[3.25rem]">
            <p className="font-ppMoriSemibold leading-[100%] text-[1rem] flex items-center gap-[0.5rem]">
              {" "}
              <PointVector className="mb-1 text-[#004EB2]" />
              Specifications
            </p>
            <div className="~pt-[1rem]/[1.5625rem] ~space-y-[0.625rem]/[1rem]  leading-[120%] ~text-[0.8125rem]/[1rem]">
              <div className="flex  ~gap-[0.5rem]/[2rem]">
                <p className="font-ppMoriSemibold text-black md:min-w-[9rem]">
                  Dimensions:
                </p>
                <p className="text-[#6F6F6F]">{product.dimensions}</p>
              </div>
              <div className="flex  ~gap-[0.5rem]/[2rem]">
                <p className="font-ppMoriSemibold text-black md:min-w-[9rem]">
                  Material:
                </p>
                <p className="text-[#6F6F6F]">{product.material}</p>
              </div>
              <div className="flex  ~gap-[0.5rem]/[2rem]">
                <p className="font-ppMoriSemibold text-black md:min-w-[9rem]">
                  Tare Weight:
                </p>
                <p className="text-[#6F6F6F]">{product.tare_weight}</p>
              </div>
              <div className="flex  ~gap-[0.5rem]/[2rem]">
                <p className="font-ppMoriSemibold text-black md:min-w-[9rem]">
                  Payload Capacity:
                </p>
                <p className="text-[#6F6F6F]">{product.payload_capacity}</p>
              </div>
              <div className="flex  ~gap-[0.5rem]/[2rem]">
                <p className="font-ppMoriSemibold text-black md:min-w-[9rem]">
                  Floor Type :
                </p>
                <p className="text-[#6F6F6F]">{product.floor_type}</p>
              </div>
              <div className="flex  ~gap-[0.5rem]/[2rem]">
                <p className="font-ppMoriSemibold text-black md:min-w-[9rem]">
                  Compliance:{" "}
                </p>
                <p className="text-[#6F6F6F]">{product.compliance}</p>
              </div>
            </div>
            <div className="~pt-[1.5rem]/[3.75rem] ~gap-[1.375rem]/[2.5rem] flex flex-wrap items-center">
              <Link href={"/contact"}>
                <ArrowButton
                  className="bg-[#004EB2] ~gap-[1.0625rem]/[1.25rem] max-sm:w-full max-sm:justify-between text-white hover:bg-white hover:text-[#004EB2]"
                  content="Get a quote"
                />
              </Link>

              <Link href="mailto:containers@starmarkco.com">
                <motion.button
                  whileHover="hover"
                  className="text-black hover:text-[#004EB2] max-sm:w-full max-sm:justify-between  max-lg:~px-[1rem]/[1.75rem] duration-300 transition-all ease-in-out hover:border-b-[#004EB2] border-b border-b-black pb-[0.3rem] flex gap-[1.25rem] font-ppMoriSemibold items-center"
                >
                  Work with us
                  <motion.span
                    variants={{
                      initial: { x: 0, y: 0, rotate: 0 },
                      hover: { x: 6, y: 0, rotate: 45 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <ArrowTopRight className="~size-[1.5rem]/[1.5625rem]" />
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="~pt-[1.25rem]/[2.3125rem]">
        <div className="grid md:grid-cols-2 ~gap-[1rem]/[1.875rem]">
          {" "}
          <div className="~px-[1rem]/[1.0625rem] rounded-[0.625rem] ~py-[2rem]/[2.5rem] bg-white">
            <p className="font-ppMoriSemibold leading-[100%] text-[1rem] flex items-center gap-[0.5rem]">
              {" "}
              <PointVector className="mb-1 text-[#004EB2]" />
              Key Benefits
            </p>
            <div className="leading-[120%] pt-[1rem] flex flex-col gap-[1.25rem] ~text-[0.875rem]/[1.25rem]">
              {product.benefits?.map((item, i) => (
                <TextAnimation delay={0.2} key={i}>
                  <div>
                    <span className="font-ppMoriSemibold">{item.title}</span>{" "}
                    {item.description}
                  </div>
                </TextAnimation>
              ))}
            </div>
          </div>
          <div className="~px-[1rem]/[1.0625rem] text-white rounded-[0.625rem] ~py-[2rem]/[2.5rem] bg-[#004EB2]">
            <p className="font-ppMoriSemibold leading-[100%] text-[1rem] flex items-center gap-[0.5rem]">
              {" "}
              <PointVector className="mb-1 text-white" />
              Industry Use Cases
            </p>
            <div className="leading-[120%] pt-[1rem] flex flex-col gap-[1.25rem] ~text-[0.875rem]/[1.25rem]">
              {product.use_cases?.map((item, i) => (
                <TextAnimation delay={0.2} key={i}>
                  <div>
                    <span className="font-ppMoriSemibold">{item.title}</span>{" "}
                    {item.description}
                  </div>
                </TextAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
