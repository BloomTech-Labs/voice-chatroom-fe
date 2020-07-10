import React from 'react'
import { render } from '@testing-library/react'
import MentorRegistration from './MentorRegistration'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test("renders mentor registration form", async () => {
    const { getByText } = render(<MentorRegistration />);
    const form = getByText(/Mentor Name/i);
    expect(form).toBeInTheDocument();
})