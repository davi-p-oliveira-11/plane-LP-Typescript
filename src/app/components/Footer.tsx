import { Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import { footerLinks, socialMedia } from "../constants/Footer";

const iconMap = {
  Facebook,
  Twitter,
};

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black-background text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/images/assets/plane-white.svg"
            alt="Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
          />
          <div className="flex space-x-4">
            {socialMedia.map(({ name, url, icon }, index) => {
              const IconComponent = iconMap[icon as keyof typeof iconMap];
              return (
                <a key={index} href={url} aria-label={name}>
                  <IconComponent className="w-6 h-6 hover:text-gray-800 transition" />
                </a>
              );
            })}
          </div>
          <p className="text-sm">© {currentYear}</p>
        </div>

        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-gray-800 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
