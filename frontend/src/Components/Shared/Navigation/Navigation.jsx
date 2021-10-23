import React from "react";
import Styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);

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
      <div className={Styles.navRight}>
        <h3>{user.name}</h3>
        <Link to="/">
          <img
            src={user.avatar}
            className={Styles.userImg}
            width="40"
            height="40"
            alt="userAvi"
          />
        </Link>
        <button className={Styles.logOut} onClick={logOutUser}>
          <img
            src="/Images/icons/logoutIcon.png"
            className={Styles.logOutIcon}
            alt="logoutIcon"
          />
        </button>
      </div>
    </nav>
  );
};
