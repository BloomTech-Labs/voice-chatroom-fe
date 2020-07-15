import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard"

import { findByTestAtrr } from '../../utils/testHelpers'

jest.mock('react-router-dom', () => ({
    useRouteMatch: () => {
      return {
        path: {}
    };
  }
}));

describe("Dashboard Component render success", () => {

  it("without errors", () => {
    const component = shallow(<Dashboard />);
    const wrapper = findByTestAtrr(component, 'dashboard')
    expect(wrapper.length).toBe(1)
  });

});
