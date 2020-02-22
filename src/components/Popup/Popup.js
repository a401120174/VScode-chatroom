import React from "react";
import styles from "./Popup.module.scss";
import * as action from "../../actions/mainAction";
import { useSelector, useDispatch } from "react-redux";
import { creatRoom } from "../../firestoreFunction";

const Popup = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const closePopup = e => {
    if (e.target !== e.currentTarget || state.popup !== "CREAT_ROOM") return;
    dispatch(action.openPopup(""));
  };

  const creatNewRoom = () => {
    if (!state.roomNameInput) return;
    creatRoom(state.roomNameInput, () => {
      dispatch(action.changeCurrentRoom(state.roomNameInput));
      dispatch(action.openPopup(""));
    });
  };

  const setId = () => {
    const ramdom = Math.floor(Math.random() * 1000);
    dispatch(action.setId(state.userName || `訪客${ramdom}號`));
    dispatch(action.openPopup(""));
  };

  const openIdSetPop = () => {
    dispatch(action.openPopup("SET_ID"));
  };

  const onChangeId = e => {
    dispatch(action.setId(e.target.value.trim()));
  };

  const onChangeRoomName = e => {
    dispatch(action.setRoomName(e.target.value.trim()));
  };

  const content = type => {
    switch (type) {
      case "SET_ID_TYPE":
        return (
          <div className={styles.idType}>
            <div className={styles.someWord}>
              聊天室2.0版上線啦(*ﾟ∀ﾟ*) <br />
              <br />
              [new] 新增多聊天室功能
              <br />
              [new] 新增多種表情符號
              <br />
              歡迎大家找親朋好友來聊~
            </div>
            <div className={styles.btnBox}>
              <div onClick={setId}>[匿名聊天]</div>
              <div onClick={openIdSetPop}>[暱稱聊天]</div>
            </div>
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
      case "CREAT_ROOM":
        return (
          <div className={styles.idSet}>
            <div className={styles.title}>創立聊天室</div>
            <input
              value={state.roomNameInput}
              onChange={onChangeRoomName}
              placeholder="輸入聊天室名稱"
            />
            <div onClick={creatNewRoom} className={styles.confirm}>
              [確定]
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles.cover} ${!!state.popup ? "" : styles.hide}`}
      onClick={closePopup}
    >
      <div className={styles.contentBox}>{content(state.popup)}</div>
    </div>
  );
};

export default Popup;
