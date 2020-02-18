import React from "react";
import styles from "./AsideBar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../actions/socketAction.js";

const AsideBar = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // console.log(chatReducer.rooms);
  const enterRoom = name => {
    dispatch(action.changeCurrentRoom(name));
  };

  return (
    <aside className={styles.aside}>
      <h2>聊天室總管</h2>
      <ul>
        {state.chatRooms.map(room => (
          <li
            onClick={() => {
              enterRoom(room.name);
            }}
          >
            {room.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideBar;
