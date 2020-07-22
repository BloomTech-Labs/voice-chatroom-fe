import { userConstants } from "../actions/types";
import authReducer from "./auth";

describe("Auth Reducer", () => {
  it("should return default state", () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual({
      user: {
        id: 0,
        email: "",
        given_name: "",
        family_name: "",
        username: "",
        location: "",
        interest_1: "",
        interest_2: "",
        interest_3: "",
        created_at: "",
        avatar: "",
        isMentor: false,
        user_bio: "",
        user_rating: 0,
      },
      isAuthenticated: false,
      isLoading: false,
      isLoggedIn: false,
      error: null,
    });
  });
});
