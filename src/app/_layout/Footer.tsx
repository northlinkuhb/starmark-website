import FaceBook from "@/components/svg/FaceBook";
import Instagram from "@/components/svg/Instagram";
import LinkedIn from "@/components/svg/LinkedIn";
import Logo from "@/components/svg/Logo";
import StarMark from "@/components/svg/StarMark";
import footer from "@public/svg/footer-svg.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="~px-[0.625rem]/[5.75rem] ~pb-[2.0625rem]/[3.75rem]">
        <div className=" bg-white  ~pt-[2.25rem]/[8.25rem] ~rounded-[1.25rem]/[2rem]">
          <div className="flex lg:flex-row flex-col lg:~px-[-9.375rem]/[13.625rem] ~px-[1rem]/[13rem] ~gap-[1.25rem]/[6.875rem] lg:~gap-[-1.25rem]/[6.875rem] ~pb-[3.625rem]/[10.375rem] justify-between">
            <Link href="/">
              <Logo className=" ~w-[7.8006258011rem]/[13.4375rem]" />
            </Link>

            <div className="flex md:flex-row flex-col ~gap-[1.25rem]/[6.875rem] lg:~gap-[-1.25rem]/[6.875rem] ">
              <div className="~text-[0.8125rem]/[1.25rem]">
                <h4 className=" font-ppMoriSemibold leading-[105%]">Explore</h4>

                <div className="text-[#838383] ~pt-[0.625rem]/[1.5rem] space-y-[0.3rem]">
                  <Link
                    href="/products"
                    className="hover:text-[#002257] block hover:underline duration-300 ease-in-out transition-all"
                  >
                    New/Used Containers
                  </Link>
                  <Link
                    className="hover:text-[#002257] block hover:underline duration-300 ease-in-out transition-all"
                    href="/services"
                  >
                    Logistics
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-[#002257] block hover:underline duration-300 ease-in-out transition-all"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="~text-[0.8125rem]/[1.25rem]">
                <h4 className=" font-ppMoriSemibold leading-[105%]">Company</h4>

                <div className="text-[#838383] ~pt-[0.625rem]/[1.5rem] space-y-[0.3rem]">
                  <Link
                    href="/about-us"
                    className="hover:text-[#002257] block hover:underline duration-300 ease-in-out transition-all"
                  >
                    About us
                  </Link>
                  <Link
                    href="/terms-and-condition"
                    className="hover:text-[#002257] block hover:underline duration-300 ease-in-out transition-all"
                  >
                    Terms of service
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#002257] block hover:underline duration-300 ease-in-out transition-all"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col ~gap-[0.625rem]/[0.75rem]">
              <div className="bg-[#F9F9F9] text-black font-ppMoriSemibold  shrink-0 whitespace-nowrap ~text-[0.875rem]/[1.11625rem]   ~rounded-[1.875rem]/[2.125rem]  flex items-center ~py-[0.5625rem]/[0.8125rem] px-[1.25rem]">
                Follow us{" "}
                <span className="text-[#838383]"> &nbsp;on Socials</span>
                <div className="flex ~gap-[0.625rem]/[1rem] ~pl-[2.75rem]/[2.5625rem]">
                  <Link target="_blank" href={"https://www.linkedin.com/"}>
                    {" "}
                    <LinkedIn className="~size-[0.875rem]/[1.5rem] hover:scale-110 duration-300 transition-all ease-in-out" />
                  </Link>
                  <Link target="_blank" href={"https://www.instagram.com/"}>
                    <Instagram className="~size-[0.875rem]/[1.5rem] hover:scale-110 duration-300 transition-all ease-in-out" />
                  </Link>
                  <Link target="_blank" href={"https://www.facebook.com/"}>
                    <FaceBook className="~size-[0.875rem]/[1.5rem] hover:scale-110 duration-300 shrink-0 transition-all ease-in-out" />
                  </Link>{" "}
                </div>
              </div>

              <div className="bg-[#F9F9F9] flex items-center ~gap-[1.1875rem]/[1.5rem]  ~rounded-[1.875rem]/[2.125rem] p-[0.75rem]">
                <Image
                  src={footer}
                  alt="Footer Image"
                  className="~size-[5rem]/[5.625rem]"
                />
                <div>
                  <h3 className="~text-[1rem]/[1.488125rem] text-black font-ppMoriSemibold">
                    Talk to Sales
                  </h3>{" "}
                  <p className="~text-0.75rem]/[1rem] text-[#6F6F6F]">
                    Get your Deal done
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="~px-[0.5rem]/[7.4375rem] ~pb-[0.5rem]/[2.625rem]">
            {" "}
            <StarMark />
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#E5E5E5] ~py-[1rem]/[2rem] ~px-[2.5rem]/[11.875rem]">
        <div className=" flex sm:flex-row flex-col max-sm:items-center ~text-[0.75rem]/[1rem] font-ppMoriSemibold text-[#6F6F6F] ~gap-[0.25rem]/[1rem] justify-between w-full">
          <p>Starmark® All rights reserved.</p>
          <p>
            Designed by{" "}
            <span className="text-black">
              <span>
                <Link
                  target="_blank"
                  className="hover:underline decoration-1 "
                  href={"https://www.urbanhubinnovations.com/"}
                >
                  Urbanhub Innovations
                </Link>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
