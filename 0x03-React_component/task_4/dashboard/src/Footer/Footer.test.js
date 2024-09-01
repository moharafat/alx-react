import React from "react";
import Footer from "./Footer";
import { shallow } from 'enzyme';

describe(",Footer />", () => {
  it("Footer should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
});
