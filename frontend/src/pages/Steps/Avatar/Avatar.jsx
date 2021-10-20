import React, { useState } from "react";
import Styles from "./Avatar.module.css";
import { Button } from "../../../Components/Shared/Button/Button";
import { Card } from "../../../Components/Shared/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import { activate } from "../../../http";
import { setAuth } from "../../../store/authSlice";
import Loader from "../../../Components/Shared/Loader/Loader";
export const Avatar = ({ onClick }) => {
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/Images/userImg.png");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  async function submitHandler() {
    if (!name || !avatar) return;
    setLoading(true);
    try {
      const { data } = await activate({ name, avatar });
      if (data.auth) {
        dispatch(setAuth(data));
      }
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
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
  if (loading) return <Loader message="Activation in progress..." />;
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
