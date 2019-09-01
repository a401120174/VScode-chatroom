import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import webSocket from "socket.io-client";
import * as firebase from "firebase";

// function* fecthData(uri) {
//   const data = yield fetch(uri, {
//     headers: {
//       Authorization:
//         "Bearer Px7OAcTHfyQsF10Jr86H06JfGDoMgXLjkmuaWxLL0D3ZQwq0QqYyLHc4hCzX"
//     }
//   })
//     .then(res => {
//       //ok 代表狀態碼在範圍 200-299
//       //   但要注意的是fetch在只要在伺服器有回應的情況下，都會回傳已實現的Promise物件
//       //   狀態(只要不是網路連線問題，或是伺服器失連等等)，在這其中也會包含狀態碼為錯誤碼(404
//       //     , 500...)的情況，所以在使用時你還需要加一下檢查:
//       if (!res.ok) throw new Error(res.statusText);
//       return res.json();
//     })
//     .catch(function(err) {
//       // Error :(
//       console.log(err);
//     });
//   return data;
// }

function* getSocket(action) {
  try {
    var config = {
      // apiKey: "apiKey",
      // authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://mychatroom-b5909.firebaseio.com"
    };
    firebase.initializeApp(config);
    // const ws = yield webSocket("http://localhost:3000");
    yield put({ type: "GET_SOCKET_SCS", database: true });
  } catch (e) {
    console.log(e);
    yield put({ type: "ROOM_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("GET_SOCKET", getSocket);
}

export default mySaga;
