import React from 'react';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme'
import { render, fireEvent } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import UserProfile from './UserProfile'

import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

configure({ adapter: new Adapter() });

describe('User profile renders without crashing', () =>{
    it('renders without crashing', () =>{
        shallow(<UserProfile />);
    });
  });
  
  it('should render label', () => {
    const { getByText } = render(<UserProfile />);
    expect(getByText("First name")).toBeInTheDocument();
});