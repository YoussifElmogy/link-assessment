import React from "react";
import PropTypes from "prop-types";

const Loader = ({ customSize = 40, suspense = false }) => {
  return (
    <div
      className={`${
        suspense
          ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen"
          : "relative"
      } flex items-center justify-center`}
    >
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        width={customSize}
        height={customSize}
      >
        <circle
          className="opacity-25 text-primary"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          style={{ color: "white" }}
        ></path>
      </svg>
    </div>
  );
};

Loader.propTypes = {
  customSize: PropTypes.number,
  suspense: PropTypes.bool,
};

export default Loader;
