import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import authReducer from "../../reducers/auth";

import UserDashboard from "./UserDashboard";

function renderWithRedux(
  ui,
  { initialState, store = createStore(authReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

test("should render user name field", () => {
  const wrapper = renderWithRedux(<UserDashboard />);
  const userNameLabel = wrapper.queryAllByAltText("User Name");
  expect(userNameLabel).toBeInTheDocument();
});
