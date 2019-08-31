import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchRoomData(action) {
  try {
    const data = yield call(
      fecthData,
      "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms"
    );
    console.log(data);
    yield put({ type: "ROOM_FETCH_SUCCEEDED", rooms: [1, 2, 3] });
  } catch (e) {
    console.log(e);

    yield put({ type: "ROOM_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("FETCH_ROOM_DATA", fetchRoomData);
}

function* fecthData(uri) {
  const data = yield fetch(uri, {
    headers: {
      Authorization:
        "Bearer Px7OAcTHfyQsF10Jr86H06JfGDoMgXLjkmuaWxLL0D3ZQwq0QqYyLHc4hCzX"
    }
  })
    .then(res => {
      //ok 代表狀態碼在範圍 200-299
      //   但要注意的是fetch在只要在伺服器有回應的情況下，都會回傳已實現的Promise物件
      //   狀態(只要不是網路連線問題，或是伺服器失連等等)，在這其中也會包含狀態碼為錯誤碼(404
      //     , 500...)的情況，所以在使用時你還需要加一下檢查:
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch(function(err) {
      // Error :(
      console.log(err);
    });
  return data;
}

export default mySaga;
