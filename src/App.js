import React, { useEffect, useRef } from "react";
import styles from "./App.module.scss";
import * as action from "./actions/socketAction.js";
import * as firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import Content from "./components/Content/Content";
import TextInput from "./components/TextInput/TextInput";
import Popup from "./components/Popup/Popup";
import UserOnlineBar from "./components/UserOnlineBar/UserOnlineBar";
import AsideBar from "./components/AsideBar/AsideBar";
import { getChatMsg } from "./firestoreFunction";

function App(props) {
  const dispatch = useDispatch();
  const chatReducer = useSelector(state => state);
  const databaseMsg = useRef();

  //連上firebase
  useEffect(() => {
    dispatch(action.getFirebase());
  }, []);

  //自動滾到最底
  useEffect(() => {
    const ele = document.querySelector("#content");
    ele.scrollTop = ele.scrollHeight;
  }, [chatReducer.msg.length]);

  //連上Socket後訂閱Socket事件
  useEffect(() => {
    const { database } = chatReducer;
    if (database) {
      const db = firebase.firestore();
      databaseMsg.current = db.collection("msg");
      getChatMsg("lobby", msg => {
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
  }, [chatReducer.database]);

  const onSubmit = e => {
    if (e) e.preventDefault();

    if (chatReducer.currentMsg.trim().length === 0) return;
    const now = new Date();
    const hour = now.getHours();
    let minute =
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    const postData = {
      name: chatReducer.userName,
      msg: chatReducer.currentMsg,
      time: `${hour}:${minute}`
    };

    databaseMsg.current
      .add(postData)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        dispatch(action.changeMsg(""));
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    // const newPostKey = firebase
    //   .database()
    //   .ref()
    //   .child("posts")
    //   .push().key;
    // const updates = {};
    // updates[newPostKey] = postData;

    //寫入資料
    // databaseMsg.current.update(updates);

    // dispatch(action.changeMsg(""));
  };

  const onChangeMsg = e => {
    dispatch(action.changeMsg(e.target.value));
  };

  const setId = () => {
    const ramdom = Math.floor(Math.random() * 1000);
    dispatch(action.setId(chatReducer.userName || `無名氏${ramdom}`));
    dispatch(action.openPopup(""));
  };

  const openIdSetPop = () => {
    dispatch(action.openPopup("SET_ID"));
  };

  const onChangeId = e => {
    dispatch(action.setId(e.target.value.trim()));
  };

  const renderPopup = () => {
    switch (chatReducer.popup) {
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
              value={chatReducer.userName}
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
      <Popup content={renderPopup()} isOpen={!!chatReducer.popup} />
      <AsideBar />
      <div className={styles.rightPart}>
        <Content msg={chatReducer.msg} userName={chatReducer.userName} />
        <UserOnlineBar onlineCount={chatReducer.onlineUser} />
        <TextInput
          user={chatReducer.userName}
          onSubmit={onSubmit}
          onChangeMsg={onChangeMsg}
          value={chatReducer.currentMsg}
        />
      </div>
    </div>
  );
}

export default App;
