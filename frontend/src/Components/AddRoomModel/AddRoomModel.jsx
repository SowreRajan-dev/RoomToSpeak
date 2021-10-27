import React, { useState } from "react";
import Styles from "./AddRoomModel.module.css";
import { TextInput } from "../Shared/TextInput/TextInput";
import { createRoom as create } from "../../http/index";
import { useHistory } from "react-router-dom";

function AddRoomModel({ onClose }) {
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");
  const history = useHistory();

  async function createRoom() {
    // server call
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });
      history.push(`/room/${data.id}`);
      console.log(data);
    } catch (err) {
      console.log(err.messages);
    }
  }
  return (
    <div className={Styles.modelMask}>
      <div className={Styles.modelBody}>
        <button className={Styles.closeButton} onClick={onClose}>
          <img
            src="/Images/Icons/close.png"
            className={Styles.closeButton}
            alt="close-icon"
          />
        </button>
        <div className={Styles.modalHeader}>
          <h3 className={Styles.heading}>Enter the topic to be discussed</h3>
          <TextInput
            fullWidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <h2 className={Styles.subHeading}>Room types</h2>
          <div className={Styles.roomTypes}>
            <div
              onClick={() => setRoomType("open")}
              className={`${Styles.typeBox} ${
                roomType === "open" ? Styles.active : ""
              }`}
            >
              <img src="/Images/Icons/Globe.png" alt="Globe-icon" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${Styles.typeBox} ${
                roomType === "social" ? Styles.active : ""
              }`}
            >
              <img src="/Images/Icons/Users.png" alt="Social-icon" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("private")}
              className={`${Styles.typeBox} ${
                roomType === "private" ? Styles.active : ""
              }`}
            >
              <img src="/Images/Icons/Lock.png" alt="Lock-icon" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={Styles.modalFooter}>
          <h2>Start a room, open to everyone </h2>
          <button onClick={createRoom} className={Styles.footerBtn}>
            <h3>Let's go</h3>
            <img
              src="/Images/Icons/rightArrowIcon.png"
              width="26px"
              height="26px"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRoomModel;
