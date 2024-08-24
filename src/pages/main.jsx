import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useTranslation } from "react-i18next";
import Loader from "../shared/loader";

const Main = ({ children }) => {
  const { i18n } = useTranslation();
  const dir = i18n.dir();

  return (
    <div className="layout-wrapper" dir={dir}>
      <Header />
      <main>
        <Suspense fallback={<Loader customSize={60} suspense />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
