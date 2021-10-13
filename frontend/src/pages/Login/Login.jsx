import React, { useState } from "react";
import Styles from "./Login.module.css";

import { Otp } from "../Steps/Otp/Otp";
import { PhoneEmail } from "../Steps/PhoneEmail/PhoneEmail";

const steps = {
  1: PhoneEmail,
  2: Otp,
};
export const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const handleNext = () => {
    setStep(step + 1);
  };
  return <Step onClick={handleNext} />;
};
