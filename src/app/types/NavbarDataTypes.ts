export type NavbarLink = {
  label: string;
  href: string;
};

export type NavbarData = {
  logo: {
    src: string;
    alt: string;
  };
  links: NavbarLink[];
};
