import Image from "next/image";
import { FooterSocialsProps } from "../../types";
import { useRouter } from "next/router";

export const FooterSocials = ({ title, socials }: FooterSocialsProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1.5 text-sm px-2">
      <span className="tracking-wider font-medium">{title}</span>
      <div className="grid grid-cols-5 gap-1.5">
        {socials.map((social, index) => (
          <a key={`footer-social-${index}`} href={social?.link} target="_blank">
            <Image width={25} height={15} src={social?.icon} alt={""} />
          </a>
        ))}
      </div>
    </div>
  );
};
