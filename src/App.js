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
  const socketReducer = useSelector(state => state);
  const databaseMsg = useRef();

  //連上Socket
  useEffect(() => {
    dispatch(action.getSocket());
    return () => {
      // cleanup;
    };
  }, []);

  //連上Socket後訂閱Socket事件
  useEffect(() => {
    const { database } = socketReducer;

    if (database) {
      // socket.on("online", message => {
      //   console.log(message);
      // });

      // socket.on("msg", message => {
      //   dispatch(action.updateMsg(message));
      // });
      databaseMsg.current = firebase.database().ref("msg");

      databaseMsg.current.once("value").then(function(snapshot) {
        console.log(snapshot.val());

        const newMsgArr = [];
        for (var i in snapshot.val()) {
          newMsgArr.push({
            name: snapshot.val()[i].name,
            msg: snapshot.val()[i].msg
          });
        }
        dispatch(action.updateMsg(newMsgArr, true));
      });

      databaseMsg.current.limitToLast(1).on("value", function(snapshot) {
        console.log(snapshot.val());
        for (var i in snapshot.val()) {
          dispatch(
            action.updateMsg(
              {
                name: snapshot.val()[i].name,
                msg: snapshot.val()[i].msg
              },
              false
            )
          );
        }
      });

      const connectedRef = firebase.database().ref(".info/connected");
      const onlineUser = firebase.database().ref("user");
      var userRef = onlineUser.push();

      connectedRef.on("value", function(snap) {
        console.log(snap.val());
        if (snap.val()) {
          // Remove ourselves when we disconnect.
          userRef.onDisconnect().remove();

          userRef.set(true);
        }
      });

      onlineUser.on("value", function(snap) {
        console.log("# of online users = " + snap.numChildren());
      });
    }

    return () => {
      // cleanup;
    };
  }, [socketReducer.database]);

  const onSubmit = e => {
    e.preventDefault();

    const postData = {
      name: socketReducer.userName,
      msg: socketReducer.currentMsg
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

    // socketReducer.socket.emit("send", {
    //   name: socketReducer.userName,
    //   msg: socketReducer.currentMsg
    // });
  };

  const onChangeMsg = e => {
    dispatch(action.changeMsg(e.target.value));
  };

  const setId = () => {
    dispatch(action.setId(socketReducer.userName || "無名氏"));
    dispatch(action.openPopup(""));
  };

  const openIdSetPop = () => {
    dispatch(action.openPopup("SET_ID"));
  };

  const onChangeId = e => {
    dispatch(action.setId(e.target.value));
  };

  const renderPopup = () => {
    switch (socketReducer.popup) {
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
              value={socketReducer.userName}
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
      <Popup content={renderPopup()} isOpen={!!socketReducer.popup} />
      <div className={styles.rightPart}>
        <Content msg={socketReducer.msg} />
        <UserOnlineBar onlineCount={"1"} />
        <TextInput
          user={socketReducer.userName}
          onSubmit={onSubmit}
          onChangeMsg={onChangeMsg}
          value={socketReducer.currentMsg}
        />
      </div>
    </div>
  );
}

export default App;
