import Image from "next/image";
import { FooterHoverMenuProps } from "../../types";

export const FooterHoverMenu = ({ label, flag }: FooterHoverMenuProps) => {
  return (
    <div className="flex items-center justify-between gap-3 border border-black rounded-md px-2 py-2">
      <div className="flex items-center gap-2 text-lg">
        <Image width={25} height={25} src={flag} alt={""} className="h-6" />
        <span>{label}</span>
      </div>
      <Image
        width={20}
        height={20}
        src={"/assets/right-arrow.svg"}
        alt={""}
        className="rotate-90"
      />
    </div>
  );
};
