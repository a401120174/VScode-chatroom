import React from "react";
import { shallow, mount } from "enzyme";
import Content from "./Content";
import { MemoryRouter } from "react-router-dom";
import { Link } from "react-router";

// 測試目標:
// 1.在loading的時候showAlertText
// 2.有幾個msgs就render幾個MsgBox
// 3.訊息應以時間排序
// 3.自己的訊息有特殊樣式

describe("Content show alert when is loading", () => {
  let wrapper;
  let props = {
    msgs: [],
    userName: "Mary",
    loading: true
  };

  beforeEach(() => {
    wrapper = shallow(<Content {...props} />);
  });

  it("renders a AlertText", () => {
    expect(wrapper.find("AlertText")).toHaveLength(1);
  });
});

describe("Content show msgs", () => {
  let wrapper;
  let props = {
    msgs: [
      {
        name: "Tom",
        msg: "hi",
        dateToShow: "12:30",
        dateObj: new Date("2020", "02", "29", "12", "30", "0")
      },
      {
        name: "Mary",
        msg: "hi",
        dateToShow: "11:30",
        dateObj: new Date("2020", "02", "29", "11", "30", "0")
      }
    ],
    userName: "Mary",
    loading: false
  };

  beforeEach(() => {
    wrapper = shallow(<Content {...props} />);
  });

  it("renders msgs", () => {
    expect(wrapper.find("MsgBox")).toHaveLength(2);
  });

  it("should order msgs data by time", () => {
    expect(
      wrapper
        .find("MsgBox")
        .at(0)
        .props().name
    ).toEqual("Mary");
  });

  it("should hightlight msgs if is self msg", () => {
    expect(
      wrapper
        .find("MsgBox")
        .at(0)
        .props().isSelf
    ).toEqual(true);
  });
});
