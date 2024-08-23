import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { set } from "../configs/localstorage.service"; // Ensure this is the function to set local storage
import "../styles/languageSwitcher.scss"; // Import the SCSS file for styles
import { FaChevronDown } from "react-icons/fa6";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    set("lang", lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Determine the other language
  const otherLanguage = i18n.language === "en" ? "ar" : "en";
  const otherLanguageLabel = i18n.language === "en" ? "AR" : "EN";

  return (
    <div className="language-switcher">
      <div className="language-switcher-selected" onClick={toggleDropdown}>
        {i18n.language === "en" ? "EN" : "AR"}
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <FaChevronDown />
        </span>
      </div>
      {isOpen && (
        <div className="language-switcher-dropdown">
          <div
            className={`language-option`}
            onClick={() => handleLanguageChange(otherLanguage)}
          >
            {otherLanguageLabel}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
