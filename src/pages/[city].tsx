import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { PopularStaticText } from "@/components/PopularStaticText";
import { Locations } from "@/components/Locations";
import { Countries } from "@/components/Countries";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export default function City() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-10 ${inter.className}`}>
      {/* <div className="w-full text-white relative flex flex-col items-center justify-center h-[570px]">
       */}
      <div className=""></div>
      <Footer />
    </main>
  );
}
