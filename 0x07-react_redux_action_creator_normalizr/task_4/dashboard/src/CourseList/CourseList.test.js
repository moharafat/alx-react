import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  it("CourseList is rendered without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("rendered the 5 different rows corrdctly", () => {
    const wrapper = shallow(<CourseList />);
    wrapper.updata();
    const item = wrapper.find("CourseListRow");
    expect(item).toHaveLength(5);

    expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
    expect(item.at(0).prop("isHeader")).toEqual(true);
    
    expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
    expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
    expect(item.at(1).prop("isHeader")).toEqual(true);
    
    expect(item.at(2).prop("textFirstCell")).toEqual("ES6");
    expect(item.at(2).prop("textSecondCell")).toEqual("60");
    expect(item.at(2).prop("isHeader")).toEqual(false);
    
    expect(item.at(3).prop("textFirstCell")).toEqual("Webpack");
    expect(item.at(3).prop("textSecondCell")).toEqual("20");
    expect(item.at(3).prop("isHeader")).toEqual(false);
    
    expect(item.at(4).prop("textFirstCell")).toEqual("React");
    expect(item.at(4).prop("textSecondCell")).toEqual("40");
    expect(item.at(4).prop("isHeader")).toEqual(false);
  });
});