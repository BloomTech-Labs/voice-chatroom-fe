import React from 'react';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme'
import { render, fireEvent } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import UserProfile from './UserProfile'

import { createStore } from 'redux'
import authReducer from '../../reducers/auth'
import { Provider } from 'react-redux'

import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

const currentUser = {
  id: 1,
  given_name: "",
  user_bio: "",
  email: "",
  family_name: "",
  username: "",
  location: "",
  interest_1: ""
}


function renderWithRedux(
  ui,
  { initialState, store = createStore(authReducer, initialState) } = {}
) {
  return {
    ...mount(<Provider store={store}>{ui}</Provider>), store
  }
}

configure({ adapter: new Adapter() });

const wrapper = ""

beforeEach(() => {
  wrapper = renderWithRedux(<UserProfile />)
});

describe('User profile renders without crashing', () => {
  it('renders without crashing', () => {
    mount(<UserProfile />);
  });
});


it('Should render 7 <label>s', () => {
  expect(wrapper.find('label')).toHaveLength(7)
});

it('Should render 1 <form>', () => {
  expect(wrapper.find('form')).toHaveLength(1)
});

it('Should render 6 <input>s', () => {
  expect(wrapper.find('input')).toHaveLength(6)
});