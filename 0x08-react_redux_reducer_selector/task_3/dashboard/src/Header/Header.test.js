import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe("<Header />", () => {
  it("Header should render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Veriy if img was rendered by components", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div.App-header img")).toHaveLength(1);
  });
  it("Veriy if componnts render H1", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(1);
  });
});
