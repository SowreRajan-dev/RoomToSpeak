import React, { useState } from "react";
import { Button } from "../../../../Components/Shared/Button/Button";
import { Card } from "../../../../Components/Shared/Card/Card";
import { TextInput } from "../../../../Components/Shared/TextInput/TextInput";
import Styles from "./Email.module.css";

export const Email = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Card title="Enter your Email id" logo="Logo">
        <img src="/Images/icons/mail.png" className={Styles.iconImg} alt="" />
        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <div className={Styles.actionButtonWrap}>
            <Button onClick="" text="Continue" />
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
