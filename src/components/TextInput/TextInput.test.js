import React from "react";
import { shallow, mount } from "enzyme";
import TextInput from "./TextInput";

// 測試目標:
// 1.有一個input接收props value並響應變化

describe("render correct popup", () => {
  let wrapper;
  let props = {
    onSubmit: jest.fn(),
    onChangeMsg: jest.fn(),
    onAddCute: jest.fn(),
    value: "text...",
    user: "Tom"
  };

  beforeEach(() => {
    wrapper = shallow(<TextInput {...props} />);
  });

  it("renders a text input ", () => {
    expect(wrapper.find("[type='text']")).toHaveLength(1);
  });

  it("has a input that recives value prop", () => {
    expect(wrapper.find("[type='text']").props().value).toEqual("text...");
  });

  it("has a input that can change value", () => {
    const input = wrapper.find("[type='text']");
    input.simulate("change", { target: { name: "msg", value: "abc" } });
    expect(props.onChangeMsg).toHaveBeenCalledTimes(1);
  });
});
