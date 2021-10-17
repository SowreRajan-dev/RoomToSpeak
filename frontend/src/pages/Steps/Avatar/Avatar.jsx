import React, { useState } from "react";
import Styles from "./Avatar.module.css";
import { Button } from "../../../Components/Shared/Button/Button";
import { Card } from "../../../Components/Shared/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import { activate } from "../../../http";
import { setAuth } from "../../../store/authSlice";
export const Avatar = ({ onClick }) => {
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/Images/userImg.png");
  const dispatch = useDispatch();
  async function submitHandler() {
    try {
      const { data } = await activate({ name, avatar });
      if (data.auth) {
        dispatch(setAuth(data));
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function captureImg(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);

      dispatch(setAvatar(reader.result));
    };
  }
  return (
    <>
      <Card title={`Hey ${name ? name + "!" : "There!"}`} logo="Logo">
        <div className={Styles.avatarWrapper}>
          <img src={`${image}`} className={Styles.userImg} alt="avatar" />
        </div>
        <p className={Styles.subHeading}>How's This photo?</p>
        <div>
          <input
            type="file"
            onChange={captureImg}
            id="avatarInput"
            className={Styles.avatarInput}
          />
          <label htmlFor="avatarInput" className={Styles.avatarLabel}>
            Choose a different photo
          </label>
        </div>
        <div className={Styles.actionButtonWrap}>
          <Button text="You’re done!" onClick={submitHandler} />
        </div>
      </Card>
    </>
  );
};
