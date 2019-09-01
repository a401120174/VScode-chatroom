import { put, takeLatest } from "redux-saga/effects";
import * as firebase from "firebase";

function* getFirebase(action) {
  try {
    var config = {
      // apiKey: "apiKey",
      // authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://mychatroom-b5909.firebaseio.com"
    };
    firebase.initializeApp(config);

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
