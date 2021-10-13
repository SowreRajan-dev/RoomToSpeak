import React from "react";
import Styles from "./TextInput.module.css";
export const TextInput = (props) => {
  return (
    <div>
      <input className={Styles.input} {...props} />
    </div>
  );
};
