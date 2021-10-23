import React, { useState } from "react";
import AddRoomModel from "../../Components/AddRoomModel/AddRoomModel";
import RoomCard from "../../Components/RoomCard/RoomCard";
import Styles from "./Rooms.module.css";
export const Rooms = () => {
  const [showModel, setShowModel] = useState(false);
  const rooms = [
    {
      id: 1,
      topic: "Which framework best for frontend?",
      speakers: [
        {
          id: 1,
          name: "ajay",
          avatar: "/images/userImg2.png",
        },
        {
          id: 2,
          name: "suniley",
          avatar: "/images/userImg.png",
        },
      ],
      totalPeople: 40,
    },
    {
      id: 2,
      topic: "Is India safer?",
      speakers: [
        {
          id: 1,
          name: "ajay",
          avatar: "/images/userImg.png",
        },
        {
          id: 2,
          name: "suniley",
          avatar: "/images/userImg2.png",
        },
      ],
      totalPeople: 80,
    },
  ];
  function openModel() {
    setShowModel(true);
  }
  function onClose() {
    setShowModel(false);
  }
  return (
    <>
      <div className="container">
        <div className={Styles.roomheader}>
          <div className={Styles.headerLeft}>
            <span className={Styles.heading}>All voice rooms!</span>
            <div className={Styles.searchBox}>
              <img src="/Images/icons/SearchIcon.png" alt="search" />
              <input type="text" className={Styles.searchInput} />
            </div>
          </div>
          <div onClick={openModel} className={Styles.headerRight}>
            <button className={Styles.startRoomBtn}>
              <img src="/images/Icons/speakIcon.png" alt="room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>
        <div className={Styles.roomList}>
          {rooms.map((room) => (
            <>
              <RoomCard room={room} key={room.id} />
              <RoomCard room={room} key={room.id} />
              <RoomCard room={room} key={room.id} />
              <RoomCard room={room} key={room.id} />
              <RoomCard room={room} key={room.id} />
              <RoomCard room={room} key={room.id} />
            </>
          ))}
        </div>
      </div>
      {showModel && <AddRoomModel onClose={onClose} />}
    </>
  );
};
