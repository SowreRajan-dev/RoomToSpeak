import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../Components/Shared/Button/Button";
import { Card } from "../../../../Components/Shared/Card/Card";
import { TextInput } from "../../../../Components/Shared/TextInput/TextInput";
import Styles from "./Phone.module.css";

export const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const onNext = () => {};
  return (
    <>
      <Card title="Enter your Phone Number" logo="Logo">
        <img src="/Images/icons/phone.png" className={Styles.iconImg} alt="" />
        <div className={Styles.textField}>
          <TextInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <div className={Styles.actionButtonWrap}>
            <Button onClick={onNext} text="Continue" />
          </div>
          <p className={Styles.bottomParagraph}>
            By entering your number,you’re agreeing to our Terms of Service and
            Privacy Policy.Thanks!
          </p>
        </div>
      </Card>
    </>
  );
};
