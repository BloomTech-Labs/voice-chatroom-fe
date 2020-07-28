import React from "react";
import { shallow } from "enzyme";
import VerifyUser from "./VerifyUser";

import { findByTestAtrr } from "../../utils/testHelpers";

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

describe("Verifying User renders", () => {
  it("without errors", () => {
    const component = shallow(<VerifyUser />);
    const wrapper = findByTestAtrr(component, "verify");
    expect(wrapper.length).toBe(1);
  });
});
