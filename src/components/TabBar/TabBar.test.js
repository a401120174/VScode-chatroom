import React from "react";
import { mount } from "enzyme";
import TabBar from "./TabBar";
import { MemoryRouter } from "react-router-dom";

// 測試目標:
// 1.render相對應的Tab
// 2.Tab有正確的active class
// 2.Links有正確的to props

let wrapper;
let props = {
  tabs: ["大廳", "遊戲討論區"],
  active: "遊戲討論區",
  onClose: jest.fn()
};

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <TabBar {...props} />
    </MemoryRouter>
  );
});

//clear
afterEach(() => {
  wrapper.unmount();
});

it("renders correct number of Tab(Link)s", () => {
  expect(wrapper.find("li")).toHaveLength(2);
});

it("has a active tab", () => {
  expect(
    wrapper
      .find("li")
      .at(1)
      .hasClass("active")
  ).toEqual(true);
});

it("has correct Links", () => {
  expect(
    wrapper
      .find("Link")
      .at(0)
      .props().to
  ).toEqual("/大廳");
  expect(
    wrapper
      .find("Link")
      .at(1)
      .props().to
  ).toEqual("/遊戲討論區");
});
