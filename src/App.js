import React, { useEffect } from "react";
import styles from "./App.module.scss";
import * as action from "./actions/socketAction.js";
import { connect, useSelector, useDispatch } from "react-redux";
import webSocket from "socket.io-client";
import Content from "./components/Content/Content";
import TextInput from "./components/TextInput/TextInput";

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

  return (
    <div className={styles.App}>
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
