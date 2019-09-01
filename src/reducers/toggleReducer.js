const initstate = {
  toggle: true,
  roomss: [],
  socket: null,
  userName: "",
  msg: [],
  currentMsg: "",
  popup: "SET_ID_TYPE"
};

const todo = (state = initstate, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggle: !state.toggle };
    case "ROOM_FETCH_SUCCEEDED":
      return { ...state, rooms: action.rooms };
    case "GET_SOCKET_SCS":
      return { ...state, socket: action.ws };
    case "UPDATE_MSG":
      return { ...state, msg: [...state.msg, action.msg] };
    case "CHANGE_MSG":
      return { ...state, currentMsg: action.msg };
    case "SET_ID":
      return { ...state, userName: action.id };
    case "OPEN_POPUP":
      return { ...state, popup: action.popup };
    default:
      return state;
  }
};

export default todo;
