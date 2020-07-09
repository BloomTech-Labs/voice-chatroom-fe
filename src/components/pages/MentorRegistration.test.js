import React from 'react'
import { render } from '@testing-library/react'
import MentorRegistration from './MentorRegistration'

test("renders mentor registration form", async () => {
    const { getByText } = render(<MentorRegistration />);
    const form = getByText(/Mentor Name/i);
    expect(form).toBeInTheDocument();
})