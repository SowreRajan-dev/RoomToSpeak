import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Card.module.css";
export const Card = ({ title, icon, children }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.headingWrapper}>
        <img
          src={`/Images/${icon}.png`}
          className={Styles.cardLogo}
          alt="logo"
        />
        <h1 className={Styles.heading}>{title}</h1>
      </div>
      {children}
    </div>
  );
};