import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import styles from "./App.module.scss";
import config from "../../firestoreConfig";
import { getChatMsg, getChatRooms } from "../../firestoreFunction";
import * as action from "../../actions/mainAction";

import Popup from "../Popup/Popup";
import AsideBar from "../Aside/Aside";
import Main from "../Main/Main";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const unSubscribeMsg = useRef();
  const { roomParam } = useParams();

  //連上firebase
  useEffect(() => {
    try {
      firebase.initializeApp(config);
      dispatch(action.firebaseConnected(true));
    } catch (e) {
      console.log(e);
    }
  }, []);

  //連上firebase後訂閱firebase事件
  useEffect(() => {
    if (state.isConnected) {
      //第一次進來要做的事訂閱房間數的變化
      getChatRooms(room => {
        dispatch(action.setChatRooms(room, roomParam));
      });
    }
  }, [state.isConnected]);

  //連上firebase後訂閱firebase事件
  useEffect(() => {
    let room;
    if (state.chatRooms.map(i => i.name).includes(roomParam)) {
      room = roomParam;
    } else {
      room = "大廳";
    }

    dispatch(action.changeCurrentRoom(room));

    //如果已經存在訂閱(訊息), 先清除訂閱
    if (unSubscribeMsg.current) {
      unSubscribeMsg.current();
      dispatch(action.resetMsgs());
    }
    //更新訊息
    dispatch(action.setLoading(true));
    unSubscribeMsg.current = getChatMsg(room, msg => {
      dispatch(action.setLoading(false));
      dispatch(action.updateMsg(msg, false));
    });
  }, [state.currentRoom, roomParam]);

  return (
    <div className={styles.App}>
      <AsideBar />
      <Main />
      <Popup />
    </div>
  );
}

export default App;
