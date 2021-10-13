import React, { useState } from "react";
import { Button } from "../../../Components/Shared/Button/Button";
import { Card } from "../../../Components/Shared/Card/Card";
import { TextInput } from "../../../Components/Shared/TextInput/TextInput";
import Styles from "./Otp.module.css";
export const Otp = ({ onClick }) => {
  const [otp, setOtp] = useState("");
  const handleNext = () => {};
  return (
    <>
      <div className={Styles.cardWrapper}>
        <Card title="Please enter the code! " icon="lockIcon">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={Styles.actionButtonWrap}>
            <Button onClick={handleNext} text="You’re done!" />
          </div>
          <p className={Styles.bottomParagraph}>
            By entering your number,you’re agreeing to our Terms of Service and
            Privacy Policy.Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};
