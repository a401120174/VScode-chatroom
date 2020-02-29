import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Enzyme, { shallow, mount } from "enzyme";
import App from "./App";
import { useParams } from "react-router-dom";

import Root from "../../Root";
import { MemoryRouter } from "react-router-dom";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";

// 測試目標:
// 1.App裡面有Aside.Main.Popup
// 2.firebase運作正常

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"), // use actual for all non-hook parts
  useSelector: state => state,
  useDispatch: () => {}
}));

// TeamPage.test.js
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    roomParam: "大廳"
  }),
  useRouteMatch: () => ({ url: "/大廳" })
}));

describe("render App correctly", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders a Aside", () => {
    // store = configureStore()({
    //   isConnected: true
    // });

    // useEffect = jest.spyOn(React, "useEffect");
    // mockUseEffect(); // important to do it twice
    // mockUseEffect();

    // jest
    //   .spyOn(ReactReduxHooks, "useSelector")
    //   .mockImplementation(state => store.getState());

    // jest
    //   .spyOn(ReactReduxHooks, "useDispatch")
    //   .mockImplementation(() => store.dispatch);

    expect(wrapper.find(Aside)).toHaveLength(1);
  });

  it("renders a Main", () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });

  it("renders a Popup", () => {
    expect(wrapper.find(Popup)).toHaveLength(1);
  });
});
