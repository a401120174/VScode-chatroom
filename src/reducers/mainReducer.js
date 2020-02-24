const initstate = {
  toggle: true,
  roomss: [],
  isConnected: false,
  userName: "",
  msg: [],
  currentMsg: "",
  popup: "SET_ID_TYPE",
  chatRooms: [],
  currentRoom: "大廳",
  tabs: ["大廳"],
  roomNameInput: "",
  loading: true,
  test: ""
};

const formatTime = time => {
  const hour = time.getHours();
  const needToFull = time.getMinutes() < 10;
  const minute = needToFull ? `0${time.getMinutes()}` : time.getMinutes();
  return `${hour}:${minute}`;
};

const todo = (state = initstate, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggle: !state.toggle };
    case "ROOM_FETCH_SUCCEEDED":
      return { ...state, rooms: action.rooms };
    case "FIREBASE_CONNECTED":
      return { ...state, isConnected: action.isConnected };
    case "UPDATE_MSG":
      const formatedMsg = {
        ...action.msg,
        dateObj: action.msg.timeStamp.toDate(),
        dateToShow: formatTime(action.msg.timeStamp.toDate())
      };

      if (action.isAll) {
        return { ...state, msg: [...formatedMsg] };
      } else {
        return { ...state, msg: [...state.msg, formatedMsg] };
      }
    case "CHANGE_MSG":
      return {
        ...state,
        currentMsg: action.isAdd ? state.currentMsg + action.msg : action.msg
      };
    case "SET_ID":
      return { ...state, userName: action.id };
    case "OPEN_POPUP":
      return { ...state, popup: action.popup };
    case "UPDATE_ONLINE_USER":
      return { ...state, onlineUser: action.count };
    case "SET_CHAT_ROOMS":
      if (action.room.name === action.roomParam) {
        return {
          ...state,
          chatRooms: [...state.chatRooms, action.room],
          currentRoom: action.roomParam,
          tabs: state.tabs.includes(action.roomParam)
            ? state.tabs
            : [...state.tabs, action.roomParam]
        };
      } else {
        return { ...state, chatRooms: [...state.chatRooms, action.room] };
      }
    case "CHANGE_CURRENT_ROOM":
      // console.log(state.chatRooms);
      // if (!state.chatRooms.includes(action.room)) {
      //   return { ...state, currentRoom: "大廳" };
      // }
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
        currentRoom:
          state.currentRoom === action.tab
            ? state.tabs[closeIdx - 1]
            : state.currentRoom,
        tabs: [
          ...state.tabs.slice(0, closeIdx),
          ...state.tabs.slice(closeIdx + 1)
        ]
      };
    case "RESET_MSGS":
      return { ...state, msg: [] };
    case "SET_ROOM_NAME":
      return { ...state, roomNameInput: action.name };
    case "SET_LOADING":
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};

export default todo;
