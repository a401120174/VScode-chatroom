import * as firebase from "firebase";

const getChatMsg = (chatRoom, callback) => {
  const db = firebase.firestore();
  return db
    .collection("chatRoom")
    .doc(chatRoom)
    .collection("messages")
    .onSnapshot(ref => {
      ref.docChanges().forEach(change => {
        const { newIndex, oldIndex, doc, type } = change;
        callback(doc.data());
      });
    });
};

const getChatRooms = callback => {
  const db = firebase.firestore();
  return db.collection("chatRoom").onSnapshot(ref => {
    ref.docChanges().forEach(change => {
      const { newIndex, oldIndex, doc, type } = change;
      callback(doc.data());
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

export { getChatMsg, getChatRooms, sendMsg };
