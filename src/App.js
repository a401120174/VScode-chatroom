import React, { useEffect, useRef } from "react";
import styles from "./App.module.scss";
import * as action from "./actions/socketAction.js";
import * as firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import Popup from "./components/Popup/Popup";
import AsideBar from "./components/AsideBar/AsideBar";
import Main from "./components/Main/Main";

import { getChatMsg, getChatRooms } from "./firestoreFunction";

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

      unSubscribeMsg.current = getChatMsg(state.currentRoom, msg => {
        dispatch(action.updateMsg(msg, false));
      });

      // getLobbyMsg
      // db.collection("movies")
      //   .doc("新世紀福爾摩斯")
      //   .set({
      //     name: "新世紀福爾摩斯",
      //     date: "2010",
      //     desctiption:
      //       "本劇改編自阿瑟·柯南·道爾爵士家喻戶曉的推理小說，一位脾氣古怪的大偵探在現代倫敦的街頭悄悄巡行，四處搜尋線索。",
      //     actors: ["班尼迪克·康柏拜區", "馬丁·費曼"]
      //   });

      // db.collection("users")
      //   .add({
      //     first: "Ada",
      //     last: "Lovelace",
      //     born: 1815
      //   })
      //   .then(function(docRef) {
      //     console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch(function(error) {
      //     console.error("Error adding document: ", error);
      //   });

      // const connectedRef = firebase.database().ref(".info/connected");
      // const onlineUser = firebase.database().ref("user");
      // var userRef = onlineUser.push();

      // //紀錄上線人數
      // connectedRef.on("value", function(snap) {
      //   if (snap.val()) {
      //     userRef.onDisconnect().remove();
      //     userRef.set(true);
      //   }
      // });

      // onlineUser.on("value", function(snap) {
      //   dispatch(action.updateOnlineUser(snap.numChildren()));
      // });
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
