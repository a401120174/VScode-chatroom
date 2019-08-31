const initstate = {
  toggle: true,
  roomss: [],
  socket: null,
  userName: "Louis",
  msg: [],
  currentMsg: ""
};

const todo = (state = initstate, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggle: !state.toggle };
    case "ROOM_FETCH_SUCCEEDED":
      return { ...state, rooms: action.rooms };
    case "GET_SOCKET_SCS":
      console.log("scs");
      return { ...state, socket: action.ws };
    case "UPDATE_MSG":
      return { ...state, msg: [...state.msg, action.msg] };
    case "CHANGE_MSG":
      return { ...state, currentMsg: action.msg };
    default:
      return state;
  }
};

export default todo;
