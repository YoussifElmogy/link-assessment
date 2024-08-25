import React, { useState, useEffect } from "react";
import styles from "../../styles/header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import Hamburger from "hamburger-react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import UserProfile from "../../components/userProfile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`container py-4 ${styles.header} ${
        i18n.language === "ar" ? styles.rtl : ""
      }`}
    >
      {" "}
      <div className={styles.headerWrapper}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="linkDev-logo" />
        </Link>
        {isDesktop ? null : (
          <button
            className="lg:hidden text-primary focus:outline-none z-30"
            onClick={toggleMenu}
          >
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </button>
        )}
        <div
          className={`${styles.menuWrapper} ${
            isMenuOpen ? styles.menuWrapperOpen : ""
          } lg:${styles.menuWrapperDesktop}`}
        >
          <nav>
            <Link to="/" className="block lg:inline-block lg:px-6 px-2 py-2">
              Home
            </Link>
            <Link
              to="/about"
              className="block lg:inline-block lg:px-6 px-2 py-2"
            >
              About
            </Link>
            <Link
              to="/news"
              className="block lg:inline-block lg:px-6 px-2 py-2"
            >
              News
            </Link>
            <Link
              to="/contact-us"
              className="block lg:inline-block lg:px-6 px-2 py-2"
            >
              Contact us
            </Link>
          </nav>
          <UserProfile />
          <LanguageSwitcher />
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;
