import React from 'react'
import MentorRegistration from './MentorRegistration'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// test("renders mentor registration form", async () => {
//     const { getByText } = render(<MentorRegistration />);
//     const form = getByText(/Mentor Name/i);
//     expect(form).toBeInTheDocument();
// })

describe('<MentorRegistration />', () => {
    it('should render MentorRegistration', () => {
        const props = {
            currentUser: {}
        }
        const wrapper = shallow(<MentorRegistration />)
    })
})