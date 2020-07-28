import React from "react";
import { shallow } from "enzyme";
import CalendarPage from "./CalendarPage";

import { findByTestAttr, findByTestAtrr } from "../../utils/testHelpers";
import { isType } from "graphql";

jest.mock("react-router-dom", () => ({
  useRouteMatch: () => {
    return {
      path: {},
    };
  },
}));

jest.mock("react-redux", () => ({
  useSelector: () => {
    return {
      currentUser: {},
    };
  },
}));

describe("Calendar Page render success", () => {
  it("without errors", () => {
    const component = shallow(<CalendarPage />);
    const wrapper = findByTestAtrr(component, "calendar");
    expect(wrapper.length).toBe(1);
  });
});
