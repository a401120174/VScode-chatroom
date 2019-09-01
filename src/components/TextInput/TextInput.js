import React, { useRef } from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({ onSubmit, onChangeMsg, value, user }) => {
  const inputEl = useRef(null);

  //   const onTextSubmit = e => {
  //     e.preventDefault();
  //     onSubmit(inputEl.value);
  //   };

  return (
    <div className={styles.box}>
      <form onSubmit={onSubmit}>
        <span>{user || "使用者"} ></span>
        <textarea
          ref={inputEl}
          value={value}
          onChange={onChangeMsg}
          className={styles.textInput}
        />
        <input type="submit" value="送出" className={styles.submit} />
      </form>
    </div>
  );
};

export default TextInput;
