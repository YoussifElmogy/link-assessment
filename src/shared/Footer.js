import React from "react";
import styles from "../styles/footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import FooterColumn from "../components/FooterColumn";
import footerLinks from "../constants/footerLinks.json";
import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import googleplay from "../assets/googleplay.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerWrapper} container`}>
        <div className="grid grid-cols-12 lg:gap-12 gap-y-6">
          <div className="col-span-12 lg:col-span-3">
            <Link to="/">
              <img className={styles.logo} src={logo} alt="linkDev-logo" />
            </Link>
            <p className="text-gray text-xs font-medium mt-2">
              We make technology produce productive, adaptable, and sustainable
              business experiences.
            </p>
          </div>
          <div
            className={`col-span-12 lg:col-span-6 grid md:grid-cols-3 grid-cols-1 lg:gap-x-16 gap-x-6 ${styles.footerMainNav}`}
          >
            {footerLinks.sections.map((section, index) => (
              <FooterColumn
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-3 mb-7">
              <Link to="/facebook" className={styles.socialIconsWrapper}>
                <div className={styles.socialIcon}>
                  <BiLogoFacebook />
                </div>
              </Link>
              <Link to="/instagram" className={styles.socialIconsWrapper}>
                <div className={styles.socialIcon}>
                  <CiInstagram />
                </div>
              </Link>
              <Link to="/X" className={styles.socialIconsWrapper}>
                <div className={styles.socialIcon}>
                  <FaXTwitter />
                </div>
              </Link>
            </div>
            <div className={styles.ourApp}>
              <span className="text-gray font-medium text-lg">
                Discover our app
              </span>
              <div className="flex items-center flex-wrap gap-2 mt-4">
                <img
                  src={googleplay}
                  alt="google play"
                  className={styles.appImg}
                />
                <img
                  src={googleplay}
                  alt="app store"
                  className={styles.appImg}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <span className="font-medium text-gray text-sm text-center">
            All rights reserved@Linkdevelopment.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
