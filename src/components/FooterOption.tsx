import { useRouter } from "next/router";
import { FooterOptionProps, FooterOptionsProps } from "../../types";

export const FooterOptions = ({ title, options }: FooterOptionsProps) => {
  return (
    <div className="flex flex-col gap-1 text-sm px-2">
      <span className="tracking-wider font-medium">{title}</span>
      {options.map((option, index) => (
        <FooterOption
          key={`footer-option-${option?.label}-${index}`}
          {...option}
        />
      ))}
    </div>
  );
};

export const FooterOption = ({ label, link }: FooterOptionProps) => {
  const router = useRouter();
  return (
    <span
      className="text-[#696969] cursor-pointer"
      onClick={() => {
        router.push(link);
      }}>
      {label}
    </span>
  );
};
