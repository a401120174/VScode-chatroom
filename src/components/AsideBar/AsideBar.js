import React from "react";
import styles from "./AsideBar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../actions/socketAction.js";
import { ReactComponent as Logo } from "../../static/char_icon.svg";

const AsideBar = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // console.log(chatReducer.rooms);
  const enterRoom = name => {
    dispatch(action.changeCurrentRoom(name));
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.title}>
        <h2>
          <Logo />
          <span>聊天室總管</span>
        </h2>
      </div>
      <div className={styles.subTitle}>
        聊天室列表 ({state.chatRooms.length})
      </div>
      <div className={styles.roomList}>
        <ul>
          {state.chatRooms.map((room, idx) => (
            <li
              onClick={() => {
                enterRoom(room.name);
              }}
            >
              C00{idx + 1} {room.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;
