import React, { useState } from "react";
import { Email } from "./Email/Email";
import { Phone } from "./Phone/Phone";
import Styles from "./PhoneEmail.module.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};
export const PhoneEmail = ({ onClick }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  // const handleNext = () => {};
  return (
    <>
      <div className={Styles.cardWrapper}>
        <Component onClick={onClick} />
        <div className={Styles.buttonWrap}>
          <button
            className={`${Styles.ChangeButton} ${Styles.tabButton} ${
              type === "phone" ? `${Styles.active}` : ``
            }`}
            onClick={() => setType("phone")}
          >
            <img src="/Images/icons/mobile.png" alt="" />
          </button>
          <button
            className={`${Styles.tabButton} ${
              type === "email" ? `${Styles.active}` : ``
            }`}
            onClick={() => setType("email")}
          >
            <img src="/Images/icons/mail.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
