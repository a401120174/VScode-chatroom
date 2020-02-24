export const setToggle = toggle => {
  return {
    type: "TOGGLE",
    toggle
  };
};

export const firebaseConnected = isConnected => {
  return {
    type: "FIREBASE_CONNECTED",
    isConnected
  };
};

export const fectcRooms = () => {
  return {
    type: "FETCH_ROOM_DATA"
  };
};

export const firebaseInit = roomId => {
  return {
    type: "FIREBASE_INIT",
    roomId
  };
};

export const updateMsg = (msg, isAll = false) => {
  return {
    type: "UPDATE_MSG",
    msg,
    isAll
  };
};

export const setLoading = loading => {
  return {
    type: "SET_LOADING",
    loading
  };
};

export const resetMsgs = () => {
  return {
    type: "RESET_MSGS"
  };
};

export const changeMsg = (msg, isAdd = false) => {
  return {
    type: "CHANGE_MSG",
    msg,
    isAdd
  };
};

export const closeTab = tab => {
  return {
    type: "CLOSE_TAB",
    tab
  };
};

export const closeTab = tab => {
  return {
    type: "CLOSE_TAB",
    tab
  };
};

export const setId = id => {
  return {
    type: "SET_ID",
    id
  };
};

export const setRoomName = name => {
  return {
    type: "SET_ROOM_NAME",
    name
  };
};

export const openPopup = popup => {
  return {
    type: "OPEN_POPUP",
    popup
  };
};

export const updateOnlineUser = count => {
  return {
    type: "UPDATE_ONLINE_USER",
    count
  };
};

export const setChatRooms = (room, roomParam) => {
  return {
    type: "SET_CHAT_ROOMS",
    room,
    roomParam
  };
};

export const changeCurrentRoom = room => {
  return {
    type: "CHANGE_CURRENT_ROOM",
    room
  };
};
