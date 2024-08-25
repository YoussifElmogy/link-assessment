import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const SingleNews = lazy(() => import("./pages/singleNews"));
const News = lazy(() => import("./pages/news"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<SingleNews />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
