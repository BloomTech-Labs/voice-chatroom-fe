import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MentorRegistration from './MentorRegistration'

import { Provider } from 'react-redux';
import store from '../../utils/store';

configure({ adapter: new Adapter() })

describe('<MentorRegistration />', () => {
    test("should render Mentor Registration form", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <MentorRegistration />
            </Provider>
        )
        console.log(wrapper.debug())    
    })
})