import * as firebase from "firebase";

const getChatMsg = (chatRoom, callback) => {
  const db = firebase.firestore();
  db.collection("chatRoom")
    .doc(chatRoom)
    .collection("messages")
    .onSnapshot(ref => {
      ref.docChanges().forEach(change => {
        const { newIndex, oldIndex, doc, type } = change;
        callback(doc.data());
      });
    });
};

export { getChatMsg };
