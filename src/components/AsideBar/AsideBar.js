import React from "react";
import styles from "./AsideBar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../actions/mainAction";
import { ReactComponent as Logo } from "../../static/char_icon.svg";

const AsideBar = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const enterRoom = name => {
    dispatch(action.changeCurrentRoom(name));
  };

  const creatNewRoom = () => {
    dispatch(action.openPopup("CREAT_ROOM"));
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
      <div className={styles.addBtnBox}>
        <button onClick={creatNewRoom}>新增聊天室</button>
      </div>
    </aside>
  );
};

export default AsideBar;
