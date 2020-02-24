import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const getChatMsg = (chatRoom, callback) => {
  const db = firebase.firestore();

  return db
    .collection("chatRoom")
    .doc(chatRoom)
    .collection("messages")
    .onSnapshot(ref => {
      ref.docChanges().forEach(change => {
        // const { newIndex, oldIndex, doc, type } = change;
        callback(change.doc.data());
      });
    });
};

const getChatRooms = callback => {
  const db = firebase.firestore();
  return db.collection("chatRoom").onSnapshot(ref => {
    ref.docChanges().forEach(change => {
      callback(change.doc.data());
    });
  });
};

const sendMsg = (roomName, msg, callback) => {
  const db = firebase.firestore();
  db.collection("chatRoom")
    .doc(roomName)
    .collection("messages")
    .add(msg)
    .then(function(docRef) {
      callback();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

const creatRoom = (roomName, callback) => {
  const db = firebase.firestore();
  db.collection("chatRoom")
    .doc(roomName)
    .set({
      name: roomName
    })
    .then(function(docRef) {
      callback();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

export { getChatMsg, getChatRooms, sendMsg, creatRoom };
