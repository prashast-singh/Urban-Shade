import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm mb-4 md:mb-0">{t("footer.copyright")}</p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-primary-light transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-primary-light transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
