import React from "react";
import styles from "./PopContent.module.scss";
import PropTypes from "prop-types";

const PopContent = ({
  popup,
  userName,
  roomNameInput,
  setId,
  openIdSetPop,
  onChangeId,
  onChangeRoomName,
  creatNewRoom,
  closePopup
}) => {
  const content = type => {
    switch (type) {
      case "SET_ID_TYPE":
        return (
          <div className={styles.idType}>
            <div className={styles.someWord}>
              <h2>聊天室2.0版上線啦(*ﾟ∀ﾟ*) </h2>
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
              value={userName}
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
              value={roomNameInput}
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
      className={`${styles.cover} ${!!popup ? "" : styles.hide}`}
      onClick={closePopup}
    >
      <div className={styles.contentBox}>{content(popup)}</div>
    </div>
  );
};

PopContent.propTypes = {
  popup: PropTypes.string,
  userName: PropTypes.string,
  roomNameInput: PropTypes.string,
  setId: PropTypes.func,
  openIdSetPop: PropTypes.func,
  onChangeId: PropTypes.func,
  onChangeRoomName: PropTypes.func,
  creatNewRoom: PropTypes.func,
  closePopup: PropTypes.func
};

export default PopContent;
