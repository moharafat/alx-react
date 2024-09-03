import React from "react";
import Login from "./Login";
import { shallow } from 'enzyme';

describe("Login", () => {
  it("Login Renders while NOT crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  it("Verify if componets render the 2 inputs", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.App-body input")).toHaveLength(2);
  });
  it("Verify if componets render the 2 labels", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.App-body label")).toHaveLength(2)
  });
});