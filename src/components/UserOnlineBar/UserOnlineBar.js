import React, { useRef } from "react";
import styles from "./UserOnlineBar.module.scss";

const UserOnlineBar = ({ onlineCount }) => {
  return (
    <div className={styles.box}>
      <div>線上人數:{onlineCount}人</div>
    </div>
  );
};

export default UserOnlineBar;
