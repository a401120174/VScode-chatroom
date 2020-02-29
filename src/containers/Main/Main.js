import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as action from "../../actions/mainAction";
import { sendMsg } from "../../firestoreFunction";
import styles from "./Main.module.scss";

import Content from "../../components/Content/Content";
import TextInput from "../../components/TextInput/TextInput";
import TabBar from "../../components/TabBar/TabBar";

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(Date(Date.now()));
  //自動滾到最底
  useEffect(() => {
    const ele = document.querySelector("#content");
    ele.scrollTop = ele.scrollHeight;
  }, [state.msg.length]);
  const onSubmit = e => {
    if (e) e.preventDefault();
    if (state.currentMsg.trim().length === 0) return;

    const postData = {
      name: state.userName,
      msg: state.currentMsg,
      timeStamp: new Date()
    };

    dispatch(action.changeMsg(""));
    sendMsg(state.currentRoom, postData, () => {});
  };

  const onChangeMsg = e => {
    dispatch(action.changeMsg(e.target.value));
  };

  const onAddCute = cute => {
    dispatch(action.changeMsg(cute, true));
  };

  const onClose = tab => {
    dispatch(action.closeTab(tab));
  };

  return (
    <div className={styles.rightPart}>
      <TabBar tabs={state.tabs} active={state.currentRoom} onClose={onClose} />
      <Content
        msgs={state.msg}
        userName={state.userName}
        loading={state.loading}
      />
      <div className={styles.box} />
      <TextInput
        user={state.userName}
        onSubmit={onSubmit}
        onChangeMsg={onChangeMsg}
        value={state.currentMsg}
        onAddCute={onAddCute}
      />
    </div>
  );
};

export default Main;
