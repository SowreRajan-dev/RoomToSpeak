import React from "react";
import Styles from "./Name.module.css";
export const Name = ({ onClick }) => {
  return (
    <>
      <div> Name </div>
      <button onClick={onClick}>Next</button>
    </>
  );
};
