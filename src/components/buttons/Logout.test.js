import React from 'react';
import Logout from './Logout';

import { render, fireEvent } from '@testing-library/react';
import { useOktaAuth } from '@okta/okta-react';
jest.mock("@okta/okta-react");

const logout = jest.fn();

useOktaAuth.mockReturnValue({
    authService: {
        logout,
    },
});


it('should handle ClickEvents', () => {
    const { getByText } = render(<Logout />);
    fireEvent.click(getByText('Log Out'))
    expect(logout).toHaveBeenCalledTimes(1);
});


it('should render button', () => {
    const { getByText } = render(< Logout />);
    expect(getByText("Log Out")).toBeInTheDocument();
});