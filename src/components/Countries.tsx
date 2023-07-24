import { useRouter } from "next/router";
import { CountryCardProps } from "../../types";
import Image from "next/image";
import { config } from "@/pages/api/data";

export const Countries = () => {
  return (
    <div className="flex flex-col gap-5 max-w-6xl px-5">
      <span className="text-4xl">All Countries</span>
      <div className="flex flex-wrap justify-center gap-y-9 gap-x-5 text-[#1c1c1c] text-xl">
        {config.countries.map((countryData, index) => (
          <CountryCard
            key={`indian-restaurant-${index}`}
            label={countryData?.name}
            redirectLink={""}
            flag={countryData?.flag}
          />
        ))}
      </div>
    </div>
  );
};

export const CountryCard = ({
  label,
  redirectLink,
  flag,
}: CountryCardProps) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between w-80 px-6 py-5 border hover:border-[#0000ee] cursor-pointer rounded-md shadow-sm"
      onClick={() => {
        router.push(redirectLink);
      }}>
      <div className="flex gap-2 items-center">
        <Image width={40} height={40} src={flag} alt={""} />
        <span className="">{label}</span>
      </div>
      <Image width={22} height={22} src={"/assets/right-arrow.svg"} alt={""} />
    </div>
  );
};
