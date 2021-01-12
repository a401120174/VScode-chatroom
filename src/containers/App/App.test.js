import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";

// 測試目標:
// 1.App裡面有Aside.Main.Popup
// 2.firebase運作正常

jest.mock("react-redux", () => ({
   ...jest.requireActual("react-redux"), // use actual for all non-hook parts
   useSelector: (state) => state,
   useDispatch: () => {},
}));

// TeamPage.test.js
jest.mock("react-router-dom", () => ({
   ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
   useParams: () => ({
      roomParam: "大廳",
   }),
   useRouteMatch: () => ({ url: "/大廳" }),
   useHistory: () => {},
}));

describe("render App correctly", () => {
   let wrapper;
   beforeEach(() => {
      wrapper = shallow(<App />);
   });

   it("renders a Aside", () => {
      expect(wrapper.find(Aside)).toHaveLength(1);
   });

   it("renders a Main", () => {
      expect(wrapper.find(Main)).toHaveLength(1);
   });

   it("renders a Popup", () => {
      expect(wrapper.find(Popup)).toHaveLength(1);
   });
});
