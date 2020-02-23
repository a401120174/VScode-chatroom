import * as firebase from "firebase";

const getChatMsg = (chatRoom, callback) => {
  const db = firebase.firestore();
  // console.log(db.collection("chatRoom").doc("aaa"));
  // console.log(db.collection("chatRoom").doc("大廳"));

  // const docRef = db.collection("chatRoom").doc(chatRoom);
  // docRef
  //   .get()
  //   .then(function(doc) {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data());
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   })
  //   .catch(function(error) {
  //     console.log("Error getting document:", error);
  //   });

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
