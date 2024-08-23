import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/loader";
import "./configs/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader customSize={60} suspense />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
