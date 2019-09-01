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

export const getSocket = () => {
  return {
    type: "GET_SOCKET"
  };
};

export const getSocketScs = ws => {
  return {
    type: "GET_SOCKET_SCS",
    ws
  };
};

export const updateMsg = msg => {
  return {
    type: "UPDATE_MSG",
    msg
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
