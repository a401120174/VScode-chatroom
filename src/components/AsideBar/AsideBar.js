import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./AsideBar.module.scss";
import { ReactComponent as Logo } from "../../static/char_icon.svg";

const AsideBar = ({ creatRoom, chatRooms, onClick }) => {
   return (
      <aside className={styles.aside}>
         <div className={styles.title}>
            <h2>
               <Logo />
               <span>聊天室總管</span>
            </h2>
         </div>
         <div className={styles.subTitle}>聊天室列表 ({chatRooms.length})</div>
         <div className={styles.roomList}>
            <ul>
               {chatRooms.map((room, idx) => (
                  <li key={idx} onClick={() => onClick(room.name)}>
                     C00{idx + 1} {room.name}
                  </li>
               ))}
            </ul>
         </div>
         <div className={styles.addBtnBox}>
            <button onClick={creatRoom}>新增聊天室</button>
         </div>
      </aside>
   );
};

AsideBar.propTypes = {
   creatRoom: PropTypes.func,
   chatRooms: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
      })
   ),
};

export default AsideBar;
