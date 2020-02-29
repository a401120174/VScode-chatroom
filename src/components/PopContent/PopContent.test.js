import React from "react";
import { shallow } from "enzyme";
import PopContent from "./PopContent";

// 測試目標:
// 1.render相對應的pop內容

describe("render correct popup", () => {
  let wrapper;
  let props = {
    popup: "SET_ID_TYPE",
    userName: "Mary",
    roomNameInput: "room",
    setId: jest.fn(),
    openIdSetPop: jest.fn(),
    onChangeId: jest.fn(),
    onChangeRoomName: jest.fn(),
    creatNewRoom: jest.fn(),
    closePopup: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<PopContent {...props} />);
  });

  it("renders a AlertText", () => {
    expect(wrapper.find("SetIdTypeModal")).toHaveLength(1);
  });
});
