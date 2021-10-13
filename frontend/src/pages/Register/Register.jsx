import React, { useState } from "react";
import { Avatar } from "../Steps/Avatar/Avatar";
import { Name } from "../Steps/Name/Name";
import { Otp } from "../Steps/Otp/Otp";
import { PhoneEmail } from "../Steps/PhoneEmail/PhoneEmail";
import { Username } from "../Steps/Username/Username";
import Styles from "./Register.module.css";
const steps = {
  1: PhoneEmail,
  2: Otp,
  3: Name,
  4: Avatar,
  5: Username,
};
export const Register = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const Step = steps[step];
  return (
    <div>
      <Step onClick={handleNext} />
    </div>
  );
};
