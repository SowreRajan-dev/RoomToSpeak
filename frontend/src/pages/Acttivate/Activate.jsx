import React, { useState } from "react";
import { Name } from "../Steps/Name/Name";
import { Avatar } from "../Steps/Avatar/Avatar";

const steps = {
  1: Name,
  2: Avatar,
};
export const Activate = () => {
  const [step, setStep] = useState(1);
  const onNext = () => {
    setStep(step + 1);
  };
  const Step = steps[step];
  return (
    <div className="cardWrapper">
      <Step onClick={onNext} />
    </div>
  );
};
