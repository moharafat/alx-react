import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it("Notication [Item] renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify passing a dummy type/value props that it will render the correct html", ()  => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>);
    wrapper.update();
    const listItem = wrapper.find("li");

    expect(listItem).toHaveLength(1);
    expect(listItem.text()).toEqual("test");
    expect(listItem.prop("data-notification-type")).toEqual("default");
  });
  it("passing a dummy html prop, it renders the correct html", () => {
    const text = "here is list of notifications";
    const wrapper = shallow(
    <NotificationItem html={{ __html: "<u>test</u>" }} />);
    wrapper.update();
    const listItem = wrapper.find("li");
    expect(listItem.html()).toEqual("<li><u>test</u></li>");
  });
});