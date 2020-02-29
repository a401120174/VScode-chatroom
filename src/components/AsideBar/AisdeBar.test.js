import React from "react";
import { shallow, mount } from "enzyme";
import AsideBar from "./AsideBar";
import { MemoryRouter } from "react-router-dom";

// 測試目標:
// 1.props有幾個chatRooms就render幾個li並有正確的link
// 2.點擊按鈕可以觸發creatRoom

let wrapper;
let props = {
  creatRoom: jest.fn(),
  chatRooms: [{ name: "room #1" }, { name: "room #2" }]
};

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <AsideBar {...props} />
    </MemoryRouter>
  );
});

//clear
afterEach(() => {
  wrapper.unmount();
});

it("renders correct list(Link)s", () => {
  expect(wrapper.find("li")).toHaveLength(2);
  expect(
    wrapper
      .find("Link")
      .at(0)
      .props().to
  ).toEqual("/room #1");
  expect(
    wrapper
      .find("Link")
      .at(1)
      .props().to
  ).toEqual("/room #2");
});

//todo:funcional components還找不到方法去抓props的值
it("has a button that can creat room", () => {
  expect(wrapper.find("button")).toHaveLength(1);
  wrapper.find("button").simulate("click");
  expect(props.creatRoom).toHaveBeenCalledTimes(1);
});
