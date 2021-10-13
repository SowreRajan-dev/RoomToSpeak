import React from "react";
import Styles from "./Avatar.module.css";
export const Avatar = ({ onClick }) => {
  return (
    <>
      <div>Avatar </div>
      <button onClick={onClick}>Next</button>
    </>
  );
};
