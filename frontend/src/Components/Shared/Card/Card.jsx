import React from "react";
import Styles from "./Card.module.css";
export const Card = ({ title, icon, logo, children }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.headingWrapper}>
        {icon ||
          (logo && (
            <img
              src={logo ? `/Images/${logo}.png` : `/Images/icons/${icon}.png`}
              className={Styles.cardLogo}
              alt="logo"
            />
          ))}
        {title && <h1 className={Styles.heading}>{title}</h1>}
      </div>
      {children}
    </div>
  );
};
