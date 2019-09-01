import React, { useEffect } from "react";
import styles from "./App.module.scss";
import * as action from "./actions/socketAction.js";
import { connect, useSelector, useDispatch } from "react-redux";
import webSocket from "socket.io-client";
import Content from "./components/Content/Content";
import TextInput from "./components/TextInput/TextInput";
import Popup from "./components/Popup/Popup";

function App(props) {
  const dispatch = useDispatch();
  const socketReducer = useSelector(state => state);

  //連上Socket
  useEffect(() => {
    dispatch(action.getSocket());
    return () => {
      // cleanup;
    };
  }, []);

  //連上Socket後訂閱Socket事件
  useEffect(() => {
    const { socket } = socketReducer;

    if (socket) {
      socket.on("online", message => {
        console.log(message);
      });

      socket.on("msg", message => {
        dispatch(action.updateMsg(message));
      });
    }
    return () => {
      // cleanup;
    };
  }, [socketReducer.socket]);

  const onSubmit = e => {
    e.preventDefault();
    socketReducer.socket.emit("send", {
      name: socketReducer.userName,
      msg: socketReducer.currentMsg
    });
  };

  const onChangeMsg = e => {
    dispatch(action.changeMsg(e.target.value));
  };

  const setId = () => {
    dispatch(action.setId(socketReducer.userName || "undefinedUser"));
    dispatch(action.openPopup(""));
  };

  const openIdSetPop = () => {
    dispatch(action.openPopup("SET_ID"));
  };

  const onChangeId = e => {
    dispatch(action.setId(e.target.value));
  };

  const renderPopup = () => {
    switch (socketReducer.popup) {
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
              value={socketReducer.userName}
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
    <div className={styles.App}>
      <Popup content={renderPopup()} isOpen={!!socketReducer.popup} />
      <div className={styles.rightPart}>
        <Content msg={socketReducer.msg} />
        <TextInput
          onSubmit={onSubmit}
          onChangeMsg={onChangeMsg}
          value={socketReducer.currentMsg}
        />
      </div>
    </div>
  );
}

export default App;
