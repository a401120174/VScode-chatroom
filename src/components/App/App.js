import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./App.module.scss";
import { getChatMsg, getChatRooms } from "../../firestoreFunction";
import * as action from "../../actions/mainAction";
import Popup from "../Popup/Popup";
import AsideBar from "../AsideBar/AsideBar";
import Main from "../Main/Main";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const unSubscribeMsg = useRef();
  const isInit = useRef(true);

  //連上firebase
  useEffect(() => {
    console.log("object");
    dispatch(action.getFirebase());
  }, []);

  //連上Socket後訂閱Socket事件
  useEffect(() => {
    const { database } = state;
    console.log(database);
    if (database) {
      //第一次進來要做的事
      if (isInit.current) {
        getChatRooms(rooms => {
          dispatch(action.setChatRooms(rooms));
        });
        isInit.current = false;
      }
      //如果已經存在訂閱, 先清除訂閱
      if (unSubscribeMsg.current) {
        unSubscribeMsg.current();
        dispatch(action.resetMsgs());
      }
      //更新訊息
      dispatch(action.setLoading(true));
      unSubscribeMsg.current = getChatMsg(state.currentRoom, msg => {
        dispatch(action.setLoading(false));
        dispatch(action.updateMsg(msg, false));
      });
    }
  }, [state.database, state.currentRoom]);

  return (
    <div className={styles.App}>
      <AsideBar />
      <Main />
      <Popup />
    </div>
  );
}

export default App;
