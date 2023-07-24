import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <div className="w-full relative flex flex-col items-center justify-center h-[570px]">
        <Image
          width={1600}
          height={100}
          className={`w-full absolute z-0 h-full`}
          src={"/assets/landing-page-banner.png"}
          alt={""}
        />
        <Navbar />
        <div
          className={`flex flex-col items-center justify-center gap-5 w-full relative bottom-0 mx-auto`}>
          <Image
            width={1600}
            height={1200}
            className={`w-[300px]`}
            src={"/assets/top-brand-logo.png"}
            alt={""}
          />
          <span className="w-2/3 sm:w-1/2 text-2xl sm:text-4xl font-medium text-center ">
            Find the best restaurants, cafés and bars in India
          </span>
        </div>
      </div>
    </main>
  );
}
