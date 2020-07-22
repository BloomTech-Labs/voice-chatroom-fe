import * as actions from "./users";
import * as types from "./users";

describe("actions", () => {
  it("should create an action to get users", () => {
    const user = [];
    const expectedAction = {
      type: types.FETCH_USER_SUCCESS,
      user,
    };
    expect(actions.getAllUsers(user)).toMatchObject(expectedAction);
  });
});
