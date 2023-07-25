export type NavItemProps = {
  label: string;
  action: () => void;
};
export type PopupEncloserProps = {
  children: any;
  show: boolean;
  close: (Option: boolean) => void;
};

export type LocationCardProps = {
  label: string;
  redirectLink: string;
};

export type CountryCardProps = {
  label: string;
  flag: string;
  redirectLink: string;
};

export type FooterHoverMenuProps = {
  label: string;
  flag: string;
};

export type FooterOptionProps = {
  label: string;
  link: string;
};

export type FooterOptionsProps = {
  title: string;
  options: FooterOptionProps[];
};

export type FooterSocialsProps = {
  title: string;
  socials: FooterSocialProps[];
};

export type FooterSocialProps = {
  icon: string;
  link: string;
};
