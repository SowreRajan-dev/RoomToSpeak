import React from "react";
import Styles from "./TextInput.module.css";
export const TextInput = (props) => {
  return (
    <div>
      <input
        className={Styles.input}
        style={{ width: props.fullWidth === "true" ? "100%" : "inherit" }}
        {...props}
      />
    </div>
  );
};
