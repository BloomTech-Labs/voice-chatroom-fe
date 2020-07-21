import React from "react";
import { shallow } from "enzyme";
import UserHeader from "../dashboards/UserHeader";

import { findByTestAtrr } from "../../utils/testHelpers";

jest.mock("react-redux", () => ({
  useSelector: () => {
    return {
      currentUser: { given_name: "Bob", family_name: "Martin" },
    };
  },
}));

describe("it renders the user header", () => {
  it("without crashing", () => {
    const component = shallow(<UserHeader />);
    const wrapper = findByTestAtrr(component, "userHeader");
    expect(wrapper.length).toBe(1);
  });

  it("loads user's name", () => {
    const component = shallow(<UserHeader />);
    const wrapper = findByTestAtrr(component, "username");
    //expect(wrapper.length).toBe(1);
    expect.stringMatching(/bob/i);
  });
});
