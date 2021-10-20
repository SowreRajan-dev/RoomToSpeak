import React from "react";
import Styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  async function logOutUser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <nav className={`${Styles.navbar} container`}>
      <Link to="/">
        <img src="/Images/Logo.png" className={Styles.logo} alt="logo" />
      </Link>
      {isAuth && <button onClick={logOutUser}>Logout</button>}
    </nav>
  );
};
