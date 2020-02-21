import React, { useEffect, useRef } from "react";
import styles from "./Main.module.scss";
import * as action from "../../actions/socketAction.js";
import Content from "../Content/Content";
import TextInput from "../TextInput/TextInput";
import TabBar from "../TabBar/TabBar";
import UserOnlineBar from "../UserOnlineBar/UserOnlineBar";
import { useSelector, useDispatch } from "react-redux";
import { sendMsg } from "../../firestoreFunction";

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  //自動滾到最底
  useEffect(() => {
    const ele = document.querySelector("#content");
    ele.scrollTop = ele.scrollHeight;
  }, [state.msg.length]);

  const onSubmit = e => {
    if (e) e.preventDefault();
    if (state.currentMsg.trim().length === 0) return;

    const now = new Date();
    const hour = now.getHours();
    let minute =
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    const postData = {
      name: state.userName,
      msg: state.currentMsg,
      time: `${hour}:${minute}`
    };

    sendMsg(state.currentRoom, postData, () => {
      dispatch(action.changeMsg(""));
    });

    // databaseMsg.current
    //   .add(postData)
    //   .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function(error) {
    //     console.error("Error adding document: ", error);
    //   });

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

  const enterRoom = name => {
    dispatch(action.changeCurrentRoom(name));
  };

  const onChangeMsg = e => {
    dispatch(action.changeMsg(e.target.value));
  };

  const onClose = tab => {
    dispatch(action.closeTab(tab));
  };

  return (
    <div className={styles.rightPart}>
      <TabBar
        tabs={state.tabs}
        active={state.currentRoom}
        onClose={onClose}
        onClick={enterRoom}
      />
      <Content msg={state.msg} userName={state.userName} />
      <UserOnlineBar onlineCount={state.onlineUser} />
      <TextInput
        user={state.userName}
        onSubmit={onSubmit}
        onChangeMsg={onChangeMsg}
        value={state.currentMsg}
      />
    </div>
  );
};

export default Main;
