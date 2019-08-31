const initstate = {
  toggle: true,
  roomss: []
};

const todo = (state = initstate, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggle: !state.toggle };
    case "ROOM_FETCH_SUCCEEDED":
      return { ...state, rooms: action.rooms };
    default:
      return state;
  }
};

export default todo;
