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

  it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    const submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput).toHaveLength(1);
    expect(submitInput.prop("disabled")).toEqual(true);
  });

  it("Verify that the components render", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
      target: { name: "email", value: "Larry@email.com" },
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).toEqual(true);

    passwordInput.simulate("change", {
      target: { name: "password", value: "123456789" },
    });

    submitInput = wrapper.find("form input[type='submit']");
    expect(submitInput.prop("disabled")).toEqual(false);
  });
  
});