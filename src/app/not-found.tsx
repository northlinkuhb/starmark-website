import Link from "next/link";
import Image from "next/image";
import Notfound from "@public/svg/error.svg";
import ArrowButton from "@/components/ArrowButton";
// import background from "@public/images/404-bg.png";

export default function NotFound() {
  return (
    <>
      <div className="md:flex-row flex flex-col-reverse items-center justify-center md:gap-[8.625rem] ~py-[5.75rem]/[10.25rem]">
        <Link href={"/"} className=" flex items-center gap-[0.5rem] md:hidden ">
          <ArrowButton
            className="bg-[#004EB2] ~gap-[1.0625rem]/[1.25rem] max-sm:w-full max-sm:justify-between text-white hover:bg-white hover:text-[#004EB2]"
            content="Go Back"
          />
        </Link>
        <p className="pt-[1.125rem] text-[#002257] leading-[1.875rem] pb-[0.9063rem] ~text-[1rem]/[1.375rem] block md:hidden">
          The page you are looking for not available
        </p>

        <div className="  ">
          <Image
            alt="background"
            src={Notfound}
            className="~w-[6.6875rem]/[29.25rem] ~h-[6.4375rem]/[28.0625rem]"
          />
        </div>

        <div className="flex flex-col items-center md:items-start font-ppMoriReqular">
          <h1 className="~text-[1.625rem]/[10.25rem] text-[#004EB2]  leading-[120%]">
            404
          </h1>
          <p className=" text-[#004EB2]  ~pt-[1rem]/[3.75rem] ~text-[1.125rem]/[1.875rem] leading-[120%]">
            Looks like you’re lost{" "}
          </p>
          <p className="pt-[1.125rem] text-[#002257] leading-[1.875rem] pb-[0.9063rem] ~text-[1rem]/[1.375rem] md:block hidden">
            The page you are looking for not available
          </p>
          <Link
            href={"/"}
            className=" md:flex items-center gap-[0.625rem] hidden "
          >
            <ArrowButton
              className="bg-[#004EB2] ~gap-[1.0625rem]/[1.25rem] max-sm:w-full max-sm:justify-between text-white hover:bg-white hover:text-[#004EB2]"
              content="Go Back"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
