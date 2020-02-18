export const setToggle = toggle => {
  return {
    type: "TOGGLE",
    toggle
  };
};

export const fectcRooms = () => {
  return {
    type: "FETCH_ROOM_DATA"
  };
};

export const getFirebase = () => {
  return {
    type: "GET_FIREBASE"
  };
};

export const updateMsg = (msg, isAll = false) => {
  return {
    type: "UPDATE_MSG",
    msg,
    isAll
  };
};

export const resetMsgs = () => {
  return {
    type: "RESET_MSGS"
  };
};

export const changeMsg = msg => {
  return {
    type: "CHANGE_MSG",
    msg
  };
};

export const setId = id => {
  return {
    type: "SET_ID",
    id
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

export const setChatRooms = room => {
  return {
    type: "SET_CHAT_ROOMS",
    room
  };
};

export const changeCurrentRoom = room => {
  return {
    type: "CHANGE_CURRENT_ROOM",
    room
  };
};
