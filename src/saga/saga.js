import { put, takeLatest } from "redux-saga/effects";
import * as firebase from "firebase";

function* getFirebase(action) {
  console.log("object");

  try {
    var config = {
      apiKey: "AIzaSyDZ-WE4xegOzuba568z1DXE9WAuLV0LhsE",
      authDomain: "mychatroom-b5909.firebaseapp.com",
      databaseURL: "https://mychatroom-b5909.firebaseio.com",
      projectId: "mychatroom-b5909",
      storageBucket: "mychatroom-b5909.appspot.com",
      messagingSenderId: "620146762888",
      appId: "1:620146762888:web:a2dcc475ab5d9187"
    };
    firebase.initializeApp(config);
    console.log("object");
    yield put({ type: "GET_FIREBASE_SCS", database: true });
  } catch (e) {
    console.log(e);
    yield put({ type: "ROOM_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("GET_FIREBASE", getFirebase);
}

export default mySaga;
