import React, { useEffect, useRef } from "react";
import styles from "./Main.module.scss";
import * as action from "../../actions/mainAction";
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

    const postData = {
      name: state.userName,
      msg: state.currentMsg,
      timeStamp: new Date()
    };

    sendMsg(state.currentRoom, postData, () => {
      dispatch(action.changeMsg(""));
    });
  };

  const enterRoom = name => {
    dispatch(action.changeCurrentRoom(name));
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
      <TabBar
        tabs={state.tabs}
        active={state.currentRoom}
        onClose={onClose}
        onClick={enterRoom}
      />
      <Content
        msg={state.msg}
        userName={state.userName}
        loading={state.loading}
      />
      <UserOnlineBar />
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
