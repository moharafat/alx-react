import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should contain notif. component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Notification')).toHaveLength(1);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer').exists()).toBe(true);
  });
  it("CourseList is not diplayed with isLoggedIn [by Default]]", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('CourseList').exists()).toHaveLength(0);
  });
  it ("when isLoggedIn is true, CourseList is displayed", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
  
  it("when displayDrawer is false, turns to true after funcCalling", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });
  
  it("when displayDrawer is true, it turns to false after handelHideDrawer is", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    expect(wrapper.state().displayDrawer).toEqual(true);

    const instance = wrapper.instance();
    instance.handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});
