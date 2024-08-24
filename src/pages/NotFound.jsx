import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
      <div className="flex items-center text-lg text-gray-400">
        <h1 className="text-4xl font-light text-primary">404</h1>
        <span className="mx-4 h-8 border-l border-gray-600" />
        <h2 className="text-xl font-light text-primary">
          This page could not be found.
        </h2>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-primary text-white rounded  focus:outline-none "
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
