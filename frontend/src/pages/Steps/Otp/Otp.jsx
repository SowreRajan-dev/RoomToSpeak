import React, { useState } from "react";
import { Button } from "../../../Components/Shared/Button/Button";
import { Card } from "../../../Components/Shared/Card/Card";
import { TextInput } from "../../../Components/Shared/TextInput/TextInput";
import { verifyOtp } from "../../../http";
import Styles from "./Otp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
export const Otp = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const handleNext = async () => {
    if (!otp || !phone || !hash) return;
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  };
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
