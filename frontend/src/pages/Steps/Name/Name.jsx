import React, { useState } from "react";
import Styles from "./Name.module.css";
import { Button } from "../../../Components/Shared/Button/Button";
import { Card } from "../../../Components/Shared/Card/Card";
import { TextInput } from "../../../Components/Shared/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";

export const Name = ({ onClick }) => {
  const { name } = useSelector((state) => state.activate);
  const [fullname, setFullName] = useState(name);
  const dispatch = useDispatch();
  const submitNext = () => {
    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));
    onClick();
  };
  return (
    <>
      <Card title="What’s your full name? " logo="Logo">
        <img
          src="/Images/icons/NameIcon.png"
          className={Styles.cardLogo}
          alt=""
        />
        <TextInput
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        <p className={Styles.bottomParagraph}>Please enter your real name :)</p>
        <div className={Styles.actionButtonWrap}>
          <Button onClick={submitNext} text="You’re done!" />
        </div>
      </Card>
    </>
  );
};
