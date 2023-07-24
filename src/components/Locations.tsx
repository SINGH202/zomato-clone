import { useRouter } from "next/router";
import { LocationCardProps } from "../../types";
import Image from "next/image";
import { config } from "@/pages/api/data";

export const Locations = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-6xl px-5 gap-y-9 gap-x-5 text-[#1c1c1c] text-xl">
      {config.indiaRestaurants.map((restaurant, index) => (
        <LocationCard
          key={`indian-restaurant-${index}`}
          label={restaurant.label}
          redirectLink={""}
        />
      ))}
    </div>
  );
};

export const LocationCard = ({ label, redirectLink }: LocationCardProps) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between w-80 px-6 py-5 border hover:border-[#0000ee] cursor-pointer rounded-md shadow-sm"
      onClick={() => {
        router.push(redirectLink);
      }}>
      <span className="">{label}</span>
      <Image width={22} height={22} src={"/assets/right-arrow.svg"} alt={""} />
    </div>
  );
};
