import Image from "next/image";

export const PopularStaticText = () => {
  return (
    <div className="flex flex-col gap-5 px-5 items-center justify-center w-full">
      <span className="flex gap-4 text-[#1c1c1c] text-4xl">
        Popular locations in
        <Image
          width={50}
          height={50}
          className={``}
          src={"/assets/in.png"}
          alt={""}
        />
        India
      </span>
      <span className="text-center text-xl sm:w-2/3  lg:h-1/2 text-[#696969]">
        From swanky upscale restaurants to the cosiest hidden gems serving the
        most incredible food, Zomato covers it all. Explore menus, and millions
        of restaurant photos and reviews from users just like you, to find your
        next great meal.
      </span>
    </div>
  );
};
