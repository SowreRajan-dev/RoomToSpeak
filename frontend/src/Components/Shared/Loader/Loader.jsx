import React from "react";
import Styles from "./Loader.module.css";
import { Card } from "../../../Components/Shared/Card/Card";

const Loader = ({ message }) => {
  return (
    <div className="cardWrapper">
      <Card>
        <svg
          className={Styles.spinner}
          width="42"
          height="42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="18" stroke="#C4C5C5" strokeWidth="4" />
          <path
            d="M20.778 1.001A20 20 0 1 1 1.543 25.627l3.876-.922a16.016 16.016 0 1 0 15.403-19.72l-.044-3.984Z"
            fill="#5453E0"
          />
        </svg>
        <span className={Styles.message}>{message}</span>
      </Card>
    </div>
  );
};

export default Loader;
