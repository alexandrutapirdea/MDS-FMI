import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {SignInForm} from '../SignIn';
import 'jest-enzyme';

describe('Login Component', () => {

    // make our assertion and what we expect to happen
    it('should render without throwing an error', () => {
        expect(shallow(<SignInForm />).find('form.login').exists()).toBe(true)
    });

    it('renders a password input', () => {
        expect(shallow(<SignInForm />).find('#password').length).toEqual(1)
    });
});
    describe('Email input', () => {

        it('should respond to change event and change the state of the Login Component', () => {

            const wrapper = shallow(<SignInForm />);
            wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

            expect(wrapper.state('email')).toEqual('blah@gmail.com');
        })
    });

    describe('Password input', () => {

    it('should respond to change event and change the state of the Login Component', () => {

        const wrapper = shallow(<SignInForm />);
        wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

        expect(wrapper.state('password')).toEqual('cats');
    })
});
