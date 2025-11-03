import ArrowButton from "@/components/ArrowButton";
import Call from "@/components/svg/Call";
import Location from "@/components/svg/Location";
import Mail from "@/components/svg/Mail";
import PointVector from "@/components/svg/PointVector";
import Timing from "@/components/svg/Timing";
import Link from "next/link";
import React from "react";

const FormSection = () => {
  return (
    <div className="~px-[0.9375rem]/[18.75rem] ~pb-[3rem]/[7.8125rem]">
      <div className="~border-[0.75rem]/[1rem] ~mt-[-3rem]/[-5.3125rem] relative bg-white z-40 flex xl:flex-row flex-col ~gap-[1.75rem]/[5.8125rem] ~rounded-[1rem]/[1.2rem] border-white ">
        <div className="xl:w-[40%]">
          <div className="w-full bg-[#004EB2] h-full text-white ~px-[1.5625rem]/[2.5rem] ~pt-[3rem]/[2.5rem] rounded-[0.625rem]">
            <h3 className="font-ppMoriSemibold leading-[100%] text-[1.75rem]">
              Our Information
            </h3>

            <p className="~py-[1.875rem]/[3rem] leading-[120%] text-white 2xl:pr-3 ~text-[0.875rem]/[1.25rem]">
              Whether you have a question about our services or need a quote,
              we&apos;re ready to assist
            </p>

            <div className="flex flex-col ~pb-[4.0625rem]/[6.5625rem] ~text-[0.875rem]/[1.25rem] leading-[120%] ~gap-[1.25rem]/[2rem]">
              <Link
                href="tel:+97338406154"
                className="flex ~gap-[0.625rem]/[1.5rem] group items-center"
              >
                {" "}
                <Call className="~size-[1rem]/[1.5rem] shrink-0" />
                <p className="group-hover:underline duration-300 ease-in-out transition-all">
                  {" "}
                  +973 3840 6154
                </p>
              </Link>
              <Link
                className="flex text-wrap ~gap-[0.625rem]/[1.5rem] group items-center"
                href="mailto:containers@starmarkco.com"
              >
                <Mail className="~size-[1rem]/[1.5rem] shrink-0" />
                <p className="group-hover:underline duration-300 ease-in-out transition-all">
                  containers@starmarkco.com
                </p>
              </Link>
              <div className="flex  cursor-pointer ~gap-[0.625rem]/[1.5rem] group items-center">
                <Location className="~size-[1rem]/[1.5rem] shrink-0" />
                <Link
                  target="_blank"
                  href={"https://maps.app.goo.gl/5NwSy8ugRL9KXGzx9"}
                  className="group-hover:underline duration-300 ease-in-out transition-all"
                >
                  Seef, Kingdom of Bahrain Dammam, Kingdom of Saudi Arabia
                </Link>{" "}
              </div>
              <div className="flex ~gap-[0.625rem]/[1.5rem] items-center">
                <Timing className="~size-[1rem]/[1.5rem] shrink-0" />
                Mon - Fri: 8:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[60%] ">
          <div className="~pt-[0]/[5.125rem] text-black ~pb-[2.8125rem]/[5.125rem] max-xl:~pl-[0]/[2.6875rem] ~pr-[0]/[2.6875rem]">
            <h4 className="flex text-[1rem] h-fit items-center gap-[0.4375rem] font-ppMoriSemibold">
              <PointVector className="text-[#004EB2] " />
              Send Us a Message
            </h4>
            <form className="~pt-[1.375rem]/[3rem]">
              <div className="grid md:grid-cols-2 ~gap-y-[1.25rem]/[2.625rem] ~gap-x-[1.25rem]/[2.4375rem]">
                <div className="~text-[0.875rem]/[1rem]">
                  <p className="pb-[0.25rem]">First Name</p>
                  <input
                    placeholder="Enter Your First Name"
                    className="w-full outline-none  border-b border-b-[#8D8D8D] pb-[0.6875rem]"
                  />
                </div>
                <div className="~text-[0.875rem]/[1rem]">
                  <p className="pb-[0.25rem]">Last Name</p>
                  <input
                    placeholder="Enter Your Last Name"
                    className="w-full outline-none  border-b border-b-[#8D8D8D] pb-[0.6875rem]"
                  />
                </div>{" "}
                <div className="~text-[0.875rem]/[1rem]">
                  <p className="pb-[0.25rem]">Email</p>
                  <input
                    placeholder="Enter Your Email"
                    className="w-full outline-none  border-b border-b-[#8D8D8D] pb-[0.6875rem]"
                  />
                </div>
                <div className="~text-[0.875rem]/[1rem]">
                  <p className="pb-[0.25rem]">Inquiry Type</p>
                  <input
                    placeholder="Select a Service or Product"
                    className="w-full outline-none  border-b border-b-[#8D8D8D] pb-[0.6875rem]"
                  />
                </div>
              </div>
              <div className="~pt-[2.3125rem]/[3.75rem]">
                <div className="~text-[0.875rem]/[1rem]">
                  <p className="pb-[0.25rem]">Inquiry Type</p>
                  <textarea
                    rows={1}
                    placeholder="Write your message.."
                    className="w-full outline-none  border-b border-b-[#8D8D8D] pb-[0.6875rem]"
                  />
                </div>
              </div>
              <div className="flex pt-[2.5rem] justify-end">
                <ArrowButton
                  className="bg-[#004EB2] ~gap-[1.0625rem]/[1.25rem] max-sm:w-full flex justify-between  text-white hover:bg-white hover:text-[#004EB2]"
                  content="Submit Enquiry"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
