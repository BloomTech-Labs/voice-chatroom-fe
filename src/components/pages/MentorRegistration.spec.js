import React from 'react'
import { createStore } from 'redux'
import { render, fireEvent, screen } from '../utils/auth-test-utils'
import '@testing-library/jest-dom/extend-expect'
import MentorRegistration from './MentorRegistration'


test('renders with mentor name field', () => {
    render(<MentorRegistration />)
    expect(screen.findByLabelText('Mentor Name')).toHaveTextContent('Mentor Name')
})