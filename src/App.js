import React, { useEffect, useRef } from "react";
import styles from "./App.module.scss";
import * as action from "./actions/socketAction.js";
import * as firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import Content from "./components/Content/Content";
import TextInput from "./components/TextInput/TextInput";
import Popup from "./components/Popup/Popup";
import UserOnlineBar from "./components/UserOnlineBar/UserOnlineBar";

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
      databaseMsg.current = firebase.database().ref("msg");

      //初始化時抓全部的訊息
      databaseMsg.current.once("value").then(function(snapshot) {
        const newMsgArr = [];
        for (var i in snapshot.val()) {
          newMsgArr.push({
            name: snapshot.val()[i].name,
            msg: snapshot.val()[i].msg,
            time: snapshot.val()[i].time
          });
        }
        dispatch(action.updateMsg(newMsgArr, true));
      });

      //訊息更新時抓最新的一筆訊息
      databaseMsg.current.limitToLast(1).on("value", function(snapshot) {
        for (var i in snapshot.val()) {
          dispatch(
            action.updateMsg(
              {
                name: snapshot.val()[i].name,
                msg: snapshot.val()[i].msg,
                time: snapshot.val()[i].time
              },
              false
            )
          );
        }
      });

      const connectedRef = firebase.database().ref(".info/connected");
      const onlineUser = firebase.database().ref("user");
      var userRef = onlineUser.push();

      //紀錄上線人數
      connectedRef.on("value", function(snap) {
        if (snap.val()) {
          userRef.onDisconnect().remove();
          userRef.set(true);
        }
      });

      onlineUser.on("value", function(snap) {
        dispatch(action.updateOnlineUser(snap.numChildren()));
      });
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

    const newPostKey = firebase
      .database()
      .ref()
      .child("posts")
      .push().key;
    const updates = {};
    updates[newPostKey] = postData;

    //寫入資料
    databaseMsg.current.update(updates);

    dispatch(action.changeMsg(""));
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
