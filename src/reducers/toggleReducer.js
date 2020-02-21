const initstate = {
  toggle: true,
  roomss: [],
  database: null,
  userName: "",
  msg: [],
  currentMsg: "",
  popup: "SET_ID_TYPE",
  onlineUser: 0,
  chatRooms: [],
  currentRoom: "lobby",
  tabs: ["lobby"]
};

const todo = (state = initstate, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggle: !state.toggle };
    case "ROOM_FETCH_SUCCEEDED":
      return { ...state, rooms: action.rooms };
    case "GET_FIREBASE_SCS":
      return { ...state, database: action.database };
    case "UPDATE_MSG":
      if (action.isAll) {
        return { ...state, msg: [...action.msg] };
      } else {
        return { ...state, msg: [...state.msg, action.msg] };
      }
    case "CHANGE_MSG":
      return { ...state, currentMsg: action.msg };
    case "SET_ID":
      return { ...state, userName: action.id };
    case "OPEN_POPUP":
      return { ...state, popup: action.popup };
    case "UPDATE_ONLINE_USER":
      return { ...state, onlineUser: action.count };
    case "SET_CHAT_ROOMS":
      return { ...state, chatRooms: [...state.chatRooms, action.room] };
    case "CHANGE_CURRENT_ROOM":
      if (state.tabs.includes(action.room)) {
        return { ...state, currentRoom: action.room };
      } else {
        return {
          ...state,
          currentRoom: action.room,
          tabs: [...state.tabs, action.room]
        };
      }
    case "CLOSE_TAB":
      const closeIdx = state.tabs.indexOf(action.tab);
      return {
        ...state,
        currentRoom: state.tabs[closeIdx - 1],
        tabs: [
          ...state.tabs.slice(0, closeIdx),
          ...state.tabs.slice(closeIdx + 1)
        ]
      };
    case "RESET_MSGS":
      return { ...state, msg: [] };

    default:
      return state;
  }
};

export default todo;
