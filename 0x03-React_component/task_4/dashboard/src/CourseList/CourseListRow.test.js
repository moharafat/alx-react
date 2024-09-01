import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow>", () => {
  it("CourseListRow is rendered without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("When isHeader is true, it renders 1 cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();
    const item = wrapper.find("th");
    expect(item.prop("colspan")).toEqual("2");
  });
  it("When isHeader is true, it renders 2 cell with colspan = 2 when textSecondCell does exist", () => {
    const wrapper = shallow(
      <CourseListRow
      isHeader={true}
      textFirstCell="test"
      textSecondCell="second"
      />
    );
    wrapper.update();
    const item = wrapper.find("th");
    
    expect(item).toHaveLength(2);
    expect(item.first().text()).toEqual("test")
    expect(item.at(1).text()).toEqual("second")
  });
  it("when isHeader is flase, 2 td elements within a tr element are remndered correctly", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const item = wrapper.find("th");
    expect(item).toHaveLength(1)
    expect(item.children("td")).toHaveLength(2);  
  });
});