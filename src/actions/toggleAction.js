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

// export const fectcRooms = () => {
//     return {
//       type: "FETCH_ROOM_DATA"
//     };
//   };
