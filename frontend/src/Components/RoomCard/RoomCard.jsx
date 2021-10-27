import React from "react";
import Styles from "./RoomCard.module.css";
import { useHistory } from "react-router-dom";
const RoomCard = ({ room }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push(`/room/${room.id}`);
      }}
      className={Styles.card}
    >
      <h3 className={Styles.topic}>{room.topic}</h3>
      <div
        className={`${Styles.speakers} ${
          room.speakers.length === 1 ? Styles.singleSpeaker : ""
        }`}
      >
        <div className={Styles.avatars}>
          {room.speakers.map((speaker) => (
            <img src={speaker.avatar} alt="speaker" />
          ))}
        </div>
        <div className={Styles.names}>
          {room.speakers.map((speaker) => (
            <div className={Styles.nameWrapper} key={speaker.id}>
              <span>{speaker.name}</span>
              <img src="\Images\Icons\messageImg.png" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.peopleCount}>
        <span>{room.totalPeople}</span>
        <img src="/Images/Icons/userIcon.png" alt="" />
      </div>
    </div>
  );
};

export default RoomCard;
