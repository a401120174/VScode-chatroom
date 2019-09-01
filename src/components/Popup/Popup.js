import React, { useRef } from "react";
import styles from "./Popup.module.scss";

const Popup = ({ content, isOpen }) => {
  return (
    <div className={`${styles.cover} ${isOpen ? "" : styles.hide}`}>
      <div className={styles.contentBox}>{content}</div>
    </div>
  );
};

export default Popup;
