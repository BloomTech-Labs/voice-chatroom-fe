import React from 'react';
import Login from './Login';

import { render } from "@testing-library/react";
import { useOktaAuth } from '@okta/okta-react';
jest.mock("@okta/okta-react");

const login = jest.fn();
useOktaAuth.mockReturnValue({
    authService: {
        login,
    },
});


it('should render button', () => {
    const { getByText } = render(< Login />);
    expect(getByText("Login / Register")).toBeInTheDocument();
});