import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => (
  <div>
    <div className="lg:mb-8 mb-4 font-bold lg:text-xl text-lg">{title}</div>
    {links.map(({ to, label }, index) => (
      <div className="mb-2">
        <Link
          key={index}
          to={to}
          className="text-gray font-medium lg:text-lg text-md hover:text-primary"
        >
          {label}
        </Link>
      </div>
    ))}
  </div>
);
export default FooterColumn;
