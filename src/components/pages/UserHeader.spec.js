import React from "react";
import { shallow } from "enzyme";
import UserHeader from "../dashboards/UserHeader";

import { findByTestAtrr } from "../../utils/testHelpers";

jest.mock("react-redux", () => ({
  useSelector: () => {
    return {
      currentUser: {},
    };
  },
}));

describe("it renders the user header", () => {
  it("without crashing", () => {
    const component = shallow(<UserHeader />);
    const wrapper = findByTestAtrr(component, "userHeader");
    expect(wrapper.length).toBe(1);
  });
});
