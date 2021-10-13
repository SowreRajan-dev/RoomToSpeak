import React from "react";
import Styles from "./Button.module.css";
export const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={Styles.button}>
      <span>{text}</span>
      <img src="/Images/Icons/arrow.png" className={Styles.arrow} alt="arrow" />
    </button>
  );
};
