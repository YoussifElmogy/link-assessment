// LinkButton.js
import React from "react";
import styles from "../../styles/button.module.scss";

const LinkButton = ({ children, variant = "default", href, ...props }) => {
  const className = `${styles.linkBtn} ${styles[variant]}`;

  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
