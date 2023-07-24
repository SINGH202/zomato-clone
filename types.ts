export type NavItemProps = {
  label: string;
  action: () => void;
};
export type PopupEncloserProps = {
  children: any;
  show: boolean;
  close: (Option: boolean) => void;
};
