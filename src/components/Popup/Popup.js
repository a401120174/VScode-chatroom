import React from "react";
import styles from "./Popup.module.scss";
import * as action from "../../actions/socketAction.js";
import { useSelector, useDispatch } from "react-redux";

const Popup = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const setId = () => {
    const ramdom = Math.floor(Math.random() * 1000);
    dispatch(action.setId(state.userName || `無名氏${ramdom}`));
    dispatch(action.openPopup(""));
  };

  const openIdSetPop = () => {
    dispatch(action.openPopup("SET_ID"));
  };

  const onChangeId = e => {
    dispatch(action.setId(e.target.value.trim()));
  };

  const content = type => {
    switch (type) {
      case "SET_ID_TYPE":
        return (
          <div className={styles.idType}>
            <div onClick={setId}>[匿名聊天]</div>
            <div onClick={openIdSetPop}>[暱稱聊天]</div>
          </div>
        );
      case "SET_ID":
        return (
          <div className={styles.idSet}>
            <div className={styles.title}>暱稱聊天</div>
            <input
              value={state.userName}
              onChange={onChangeId}
              placeholder="輸入暱稱"
            />
            <div onClick={setId} className={styles.confirm}>
              [確定]
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.cover} ${!!state.popup ? "" : styles.hide}`}>
      <div className={styles.contentBox}>{content(state.popup)}</div>
    </div>
  );
};

export default Popup;
