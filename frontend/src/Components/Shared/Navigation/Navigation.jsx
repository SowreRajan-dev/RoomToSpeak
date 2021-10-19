import React from "react";
import Styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
export const Navigation = () => {
  function logOutUser() {}
  return (
    <nav className={`${Styles.navbar} container`}>
      <Link to="/">
        <img src="/Images/Logo.png" className={Styles.logo} alt="logo" />
      </Link>
      <button onClick={logOutUser}>Logout</button>
    </nav>
  );
};
