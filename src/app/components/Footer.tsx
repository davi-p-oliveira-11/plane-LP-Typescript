import { Facebook, Twitter } from "lucide-react";
import Image from "next/image";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/images/assets/logo.svg"
            alt="Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
          />
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-800 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-800 transition" />
            </a>
          </div>
          <p className="text-sm text-gray-500">© {currentYear}</p>
        </div>

        {["Company", "Resources", "Support"].map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {Array.from({ length: 8 }).map((_, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-gray-800 transition">
                    Link {i + 1}
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
