import React from "react";
import * as action from "../../actions/mainAction";
import { useSelector, useDispatch } from "react-redux";
import { creatRoom } from "../../firestoreFunction";
import PopContent from "../../components/PopContent/PopContent";

const Popup = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const closePopup = e => {
    if (e.target !== e.currentTarget || state.popup !== "CREAT_ROOM") return;
    dispatch(action.openPopup(""));
  };

  const creatNewRoom = () => {
    if (!state.roomNameInput) return;
    creatRoom(state.roomNameInput, () => {
      dispatch(action.changeCurrentRoom(state.roomNameInput));
      dispatch(action.openPopup(""));
    });
  };

  const setId = () => {
    const random = Math.floor(Math.random() * 1000);
    dispatch(action.setId(state.userName || `訪客${random}號`));
    dispatch(action.openPopup(""));
  };

  const openIdSetPop = () => {
    dispatch(action.openPopup("SET_ID"));
  };

  const onChangeId = e => {
    dispatch(action.setId(e.target.value.trim()));
  };

  const onChangeRoomName = e => {
    dispatch(action.setRoomName(e.target.value.trim()));
  };

  return (
    <PopContent
      popup={state.popup}
      userName={state.userName}
      roomNameInput={state.roomNameInput}
      setId={setId}
      openIdSetPop={openIdSetPop}
      onChangeId={onChangeId}
      onChangeRoomName={onChangeRoomName}
      creatNewRoom={creatNewRoom}
      closePopup={closePopup}
    />
  );
};

export default Popup;
