import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";

import { findByTestAtrr } from "../../utils/testHelpers";

describe("Home Page render success", () => {
  it("without errors", () => {
    const component = shallow(<HomePage />);
    const wrapper = findByTestAtrr(component, "home");
    expect(wrapper.length).toBe(1);
  });
});
