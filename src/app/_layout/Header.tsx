"use client";
// import Accordion from "@/components/svg/Accordion";
import Cross from "@/components/svg/Cross";
import HumBurger from "@/components/svg/HumBurger";
import Logo from "@/components/svg/Logo";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[5000] lg:hidden h-full w-full bg-black/50"
          />
        )}
      </AnimatePresence>
      <div className="fixed top-0 z-[9999] w-full ~px-[0.375rem]/[1.5rem]">
        <div className="bg-white text-[#002257] leading-[110%] w-full ~text-[0.875rem]/[1rem] ~px-[0.5rem]/[5rem] ~py-[1rem]/[1.25rem] flex justify-between items-center ~rounded-b-[0.5rem]/[0.625rem]">
          <Link href="/">
            <Logo className="~w-[5.3855862617rem]/[7.4051818848rem]" />
          </Link>
          <div className="lg:flex hidden ~gap-[0.75rem]/[1.5rem]">
            <Link
              href={"/"}
              className={`nav-link flex items-center gap-[0.5rem] ${
                pathname === "/" ? "font-ppMoriSemibold " : ""
              }`}
            >
              {pathname === "/" && (
                <span className="active-dot ~size-[0.25rem]/[0.3125rem] rounded-full bg-[#FF9100]"></span>
              )}
              <span className="relative after:absolute block after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#002257] md:after:bg-maroonLight after:transition-all after:duration-200 hover:after:w-full">
                Home
              </span>
            </Link>

            <Link
              href="/about-us"
              className={`nav-link flex items-center gap-[0.5rem]  ${
                pathname.startsWith("/about") ? "font-ppMoriSemibold " : "/"
              }`}
            >
              {pathname === "/about-us" && (
                <span className="active-dot ~size-[0.25rem]/[0.3125rem] rounded-full bg-[#FF9100]"></span>
              )}
              <span className="relative after:absolute block after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#002257] md:after:bg-maroonLight after:transition-all after:duration-200 hover:after:w-full">
                About Us
              </span>
            </Link>

            <Link
              href="/services"
              className={`nav-link flex items-center gap-[0.5rem] ${
                pathname.startsWith("/services") ? "font-ppMoriSemibold" : ""
              }`}
            >
              {pathname.startsWith("/services") && (
                <span className="active-dot ~size-[0.25rem]/[0.3125rem] rounded-full bg-[#FF9100]"></span>
              )}
              <span className="relative after:absolute block after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#002257] md:after:bg-maroonLight after:transition-all after:duration-200 hover:after:w-full">
                Services
              </span>
            </Link>

            <Link
              href="/products"
              className={`nav-link flex items-center ~gap-[0.5rem]/[0.75rem] ${
                pathname.startsWith("/products") ? "font-ppMoriSemibold " : "/"
              }`}
            >
              {pathname.startsWith("/products") && (
                <span className="active-dot ~size-[0.25rem]/[0.3125rem] rounded-full bg-[#FF9100]"></span>
              )}
              <span className="relative after:absolute block after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#002257] md:after:bg-maroonLight after:transition-all after:duration-200 hover:after:w-full">
                New/Used Containers
              </span>
            </Link>

            <Link
              href="/contact"
              className={`nav-link flex items-center ~gap-[0.5rem]/[0.75rem] ${
                pathname.startsWith("/contact") ? "font-ppMoriSemibold " : ""
              }`}
            >
              {pathname.startsWith("/contact") && (
                <span className="active-dot ~size-[0.25rem]/[0.3125rem] rounded-full bg-[#FF9100]"></span>
              )}
              <span className="relative after:absolute block after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#002257] md:after:bg-maroonLight after:transition-all after:duration-200 hover:after:w-full">
                Contact Us
              </span>
            </Link>
          </div>
          <div className="lg:flex hidden items-center  ~gap-[0.75rem]/[1.25rem]">
            <Link
              href={"/contact"}
              className="font-ppMoriSemibold hover:bg-white  hover:text-[#002257] ease-in-out transition-all duration-300 text-white rounded-full border border-[#003589] ~py-[0.625rem]/[1rem] ~px-[1rem]/[1.75rem] bg-[#004EB2]"
            >
              Let&apos;s work together
            </Link>
          </div>

          <div className="lg:hidden ">
            <HumBurger
              onClick={() => {
                setOpen(!open);
              }}
              className="~size-[2.5rem]/[3rem]"
            />

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  data-lenis-prevent
                  className="fixed bottom-0 right-0 z-[99999]  w-full h-[90vh] bg-white overflow-y-auto no-scrollbar "
                >
                  <div className="  flex justify-between p-[1rem] items-center ">
                    {" "}
                    <Link onClick={() => setOpen(!open)} href="/" className="">
                      {" "}
                      <Logo className="~w-[5.3855862617rem]/[7.4051818848rem]" />
                    </Link>
                    <Cross
                      onClick={() => setOpen(!open)}
                      className="~w-[1.25rem]/[1.75rem] ~h-[0.875rem]/[1.25rem]"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div className="pt-[1.5rem] px-[1rem]">
                      <Link
                        onClick={() => setOpen(!open)}
                        href={"/"}
                        className={` py-[0.75rem] block ${
                          pathname === "/" ? "font-ppMoriSemibold " : ""
                        }`}
                      >
                        Home
                      </Link>

                      <Link
                        onClick={() => setOpen(!open)}
                        href="/about-us"
                        className={` py-[0.75rem] block ${
                          pathname.startsWith("/about")
                            ? "font-ppMoriSemibold "
                            : "/"
                        }`}
                      >
                        About Us
                      </Link>

                      <Link
                        onClick={() => setOpen(!open)}
                        href="/services"
                        className={` py-[0.75rem] block ${
                          pathname.startsWith("/services")
                            ? "font-ppMoriSemibold "
                            : "/"
                        }`}
                      >
                        Services
                      </Link>

                      <Link
                        onClick={() => setOpen(!open)}
                        href="/products"
                        className={`flex items-center ~gap-[0.5rem]/[0.75rem] py-[0.75rem]  ${
                          pathname.startsWith("/products")
                            ? "font-ppMoriSemibold "
                            : "/"
                        }`}
                      >
                        New/Used Containers
                        {/* <Accordion className=" text-[#FF9100] w-[0.8125rem]" /> */}
                      </Link>

                      <Link
                        onClick={() => setOpen(!open)}
                        href="/contact"
                        className={` py-[0.75rem] block ${
                          pathname.startsWith("/contact")
                            ? "font-ppMoriSemibold "
                            : ""
                        }`}
                      >
                        Contact Us
                      </Link>
                    </div>

                    <div className="flex flex-col sm:items-center p-[1rem] pb-[6.5rem]  gap-[1.25rem]">
                      <div className="font-ppMoriSemibold hover:bg-white sm:w-fit  hover:text-[#002257] ease-in-out text-center transition-all duration-300 text-white rounded-full border border-[#003589] py-[1rem] ~px-[1rem]/[1.75rem] bg-[#004EB2]">
                        Let&apos;s work together
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
