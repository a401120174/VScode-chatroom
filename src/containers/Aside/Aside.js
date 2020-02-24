import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as action from "../../actions/mainAction";
import AsideBar from "../../components/AsideBar/AsideBar";

const Aside = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const creatNewRoom = () => {
    dispatch(action.openPopup("CREAT_ROOM"));
  };

  return <AsideBar creatRoom={creatNewRoom} chatRooms={state.chatRooms} />;
};

export default Aside;
