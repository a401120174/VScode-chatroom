import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as firebase from "firebase";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import styles from "./App.module.scss";
import { getChatMsg, getChatRooms } from "../../firestoreFunction";
import * as action from "../../actions/mainAction";
import Popup from "../Popup/Popup";
import AsideBar from "../AsideBar/AsideBar";
import Main from "../Main/Main";
import config from "../../firestoreConfig";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const isInit = useRef(true);
  const unSubscribeMsg = useRef();
  const { roomParam } = useParams();

  //連上firebase
  useEffect(() => {
    try {
      firebase.initializeApp(config);
      dispatch(action.firebaseConnected(true));
      // getChatRooms(rooms => {
      //   dispatch(action.setChatRooms(rooms));
      // });
    } catch (e) {
      console.log(e);
    }
  }, []);

  //連上firebase後訂閱firebase事件
  useEffect(() => {
    if (state.isConnected) {
      //第一次進來要做的事訂閱房間數的變化
      if (isInit.current) {
        getChatRooms(room => {
          dispatch(action.setChatRooms(room, roomParam));
        });
        isInit.current = false;
      }
      //依照網址帶到對應聊天室
      // setTimeout(() => {
      //   console.log(state.chatRooms);
      //   dispatch(action.changeCurrentRoom(roomId));
      // });
      //如果已經存在訂閱(訊息), 先清除訂閱
      // if (unSubscribeMsg.current) {
      //   unSubscribeMsg.current();
      //   dispatch(action.resetMsgs());
      // }
      // //更新訊息
      // dispatch(action.setLoading(true));
      // unSubscribeMsg.current = getChatMsg(roomParam, msg => {
      //   dispatch(action.setLoading(false));
      //   dispatch(action.updateMsg(msg, false));
      // });
    }
  }, [state.isConnected, roomParam]);

  //連上firebase後訂閱firebase事件
  useEffect(() => {
    console.log("object");
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
    console.log(room);
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
