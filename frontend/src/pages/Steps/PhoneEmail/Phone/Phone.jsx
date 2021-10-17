import React, { useState } from "react";
import { Button } from "../../../../Components/Shared/Button/Button";
import { Card } from "../../../../Components/Shared/Card/Card";
import { TextInput } from "../../../../Components/Shared/TextInput/TextInput";
import { sendOtp } from "../../../../http";
import Styles from "./Phone.module.css";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";

export const Phone = ({ onClick }) => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const submit = async () => {
    const { data } = await sendOtp({ phone: phone });
    console.log(data);
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    onClick();
  };
  return (
    <>
      <Card title="Enter your Phone Number" logo="Logo">
        <img src="/Images/icons/phone.png" className={Styles.iconImg} alt="" />
        <div className={Styles.textField}>
          <TextInput value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <div className={Styles.actionButtonWrap}>
            <Button onClick={submit} text="Continue" />
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
