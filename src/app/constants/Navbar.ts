import { NavbarData } from "../types/NavbarDataTypes";

export const navbarData: NavbarData = {
  logo: {
    src: "logo.svg",
    alt: "FieldGuidee Logo",
  },
  links: [
    { label: "Products", href: "/" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
};
