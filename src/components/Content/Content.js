import React from "react";
import styles from "./Content.module.scss";

const MsgBox = ({ name, msg, isSelf, time }) => (
  <div className={`${styles.msgBox} ${isSelf ? styles.isSelf : ""}`}>
    <div className={styles.time}>
      <div>{time}</div>
    </div>
    <div className={styles.rightBox}>
      <div className={styles.msgTag}>{`<${isSelf ? `!--` : ""}${name}>`}</div>
      <div className={styles.content}>{msg}</div>
      <div className={styles.msgTag}>{`${isSelf ? "--" : `</${name}`}>`}</div>
    </div>
  </div>
);

const Content = ({ msg, userName, ChatType = "ramdom" }) => {
  return (
    <div className={styles.wrapper} id="content">
      <div className={styles.scrollArea}>
        {msg.map((content, idx) => (
          <MsgBox
            name={content.name}
            msg={content.msg}
            time={content.time}
            key={idx}
            isSelf={content.name === userName}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
