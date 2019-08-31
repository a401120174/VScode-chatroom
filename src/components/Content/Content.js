import React from "react";
import styles from "./Content.module.scss";

const MsgBox = ({ name, msg, isSelf }) => (
  <div className={`${styles.msgBox} ${isSelf ? styles.isSelf : ""}`}>
    <div className={styles.time}>
      <div>12:00</div>
    </div>
    <div className={styles.rightBox}>
      <div className={styles.msgTag}>{`<${isSelf ? `!--` : ""}${name}>`}</div>
      <div className={styles.content}>{msg}</div>
      <div className={styles.msgTag}>{`${isSelf ? "--" : `</${name}`}>`}</div>
    </div>
  </div>
);

const Content = ({ msg, userName = "John", ChatType = "ramdom" }) => {
  return (
    <div className={styles.wrapper}>
      {msg.map((content, idx) => (
        <MsgBox
          name={content.name}
          msg={content.msg}
          key={idx}
          isSelf={idx === 1}
        />
      ))}
    </div>
  );
};

export default Content;
