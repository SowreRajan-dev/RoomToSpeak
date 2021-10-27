import React, { useEffect, useState } from "react";
import AddRoomModel from "../../Components/AddRoomModel/AddRoomModel";
import RoomCard from "../../Components/RoomCard/RoomCard";
import { getAllRooms } from "../../http";
import Styles from "./Rooms.module.css";
export const Rooms = () => {
  const [showModel, setShowModel] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

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
            </>
          ))}
        </div>
      </div>
      {showModel && <AddRoomModel onClose={onClose} />}
    </>
  );
};
