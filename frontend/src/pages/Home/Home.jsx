import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Shared/Button/Button";
import { Card } from "../../Components/Shared/Card/Card";
import Styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={Styles.cardWrapper}>
      <Card title="Welcome Speakers!" icon="Logo">
        <p className={Styles.text}>
          {" "}
          Yo speakers! This is your room to speak your words with a passion .Get
          a chance and speak your thoughts! Try to speak and take a break :)
        </p>
        <Button text="Get your username" />
        <div className={Styles.signInWrapper}>
          <span className={Styles.hasInvite}>Have an invite text?</span>
          <Link to="/login">
            <span className={Styles.signInText}>Sign in</span>
          </Link>
        </div>
      </Card>
    </div>
  );
};
