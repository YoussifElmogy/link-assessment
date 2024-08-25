import React, { Suspense } from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";
import Header from "../components/shared/Header";
import Loader from "../components/shared/loader";
import Footer from "../components/shared/Footer";

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
