// LinkButton.js
import React from "react";
import styles from "../../styles/button.module.scss";

const LinkButton = ({ children, variant = "default", href, ...props }) => {
  const className = `${styles.linkBtn} ${styles[variant]}`;
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return (
    <a
      href={href}
      className={className}
      {...props}
      target={isExternal ? "_blank" : "_self"} // Open in a new tab if external
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};

export default LinkButton;
