import Image from "next/image";
import { FooterHoverMenu } from "./FooterHoverMenu";
import { config } from "@/pages/api/data";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full bg-[#f8f8f8]">
      <div className="flex flex-col gap-5 justify-center items-center w-full max-w-6xl bg-[#f8f8f8] px-5 py-10 md:pt-16">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <Image
            width={180}
            height={50}
            src={"/assets/footer-brand-logo.png"}
            alt={""}
          />
          <div className="flex flex-col sm:flex-row items-center justify-end gap-5 sm:gap-10">
            <FooterHoverMenu label={"India"} flag={"/assets/in.png"} />
            <FooterHoverMenu label={"English"} flag={"/assets/glob-icon.svg"} />
          </div>
        </div>
        <div></div>
        <div className="border border-t-[#696969] w-full"></div>
        <span className="text-sm text-[#4f4f4f]">{config?.rightsText}</span>
      </div>
    </div>
  );
};
