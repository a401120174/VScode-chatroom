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

export { getChatMsg, getChatRooms };
