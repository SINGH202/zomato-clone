import { config } from "@/pages/api/data";
import { NavItemProps } from "../../types";
import { useState } from "react";
import { PopupEncloser } from "./PopupEncloser";
import { useRouter } from "next/router";

export const NavItem = ({ label, action }: NavItemProps) => {
  return (
    <div className="px-4 text-xl cursor-pointer" onClick={() => action()}>
      {label}
    </div>
  );
};

export const NavItems = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex gap-2 items-center">
      <NavItem
        label={"Add restaurant"}
        action={() => {
          router.push("/");
        }}
      />
      <NavItem
        label={"Log in"}
        action={() => {
          setIsLoginFormOpen(true);
        }}
      />
      <NavItem
        label={"Sign up"}
        action={() => {
          setIsSignUpFormOpen(true);
        }}
      />
      <PopupEncloser
        show={isLoginFormOpen}
        close={() => setIsLoginFormOpen(false)}>
        <div className="w-12 h-12 bg-white"></div>
      </PopupEncloser>
      <PopupEncloser
        show={isSignUpFormOpen}
        close={() => setIsSignUpFormOpen(false)}>
        <div className="w-12 h-12 bg-white"></div>
      </PopupEncloser>
    </div>
  );
};
