import React from "react";
import PropTypes from "prop-types";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useTranslation } from "react-i18next";

const Main = ({ children }) => {
  const { i18n } = useTranslation();
  console.log(i18n);
  const dir = i18n.dir();

  return (
    <div className="layout-wrapper" dir={dir}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
