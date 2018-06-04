import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {SignUpForm} from '../SignUp';
import 'jest-enzyme';

describe('Login Component', () => {

    // make our assertion and what we expect to happen
    it('should render without throwing an error', () => {
        expect(shallow(<SignUpForm />).find('form.Register').exists()).toBe(true)
    });

    it('renders a password input', () => {
        expect(shallow(<SignUpForm />).find('#username').length).toEqual(1)
    });

    it('renders a password input', () => {
        expect(shallow(<SignUpForm />).find('#email').length).toEqual(1)
    });

    it('renders a password input', () => {
        expect(shallow(<SignUpForm />).find('#passwordOne').length).toEqual(1)
    });
    it('renders a password input', () => {
        expect(shallow(<SignUpForm />).find('#passwordTwo').length).toEqual(1)
    });
});
describe('Email input', () => {

    it('should respond to change event and change the state of the Login Component', () => {

        const wrapper = shallow(<SignUpForm />);
        wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

        expect(wrapper.state('email')).toEqual('blah@gmail.com');
    })
});

describe('PasswordOne input', () => {

    it('should respond to change event and change the state of the Register Component', () => {

        const wrapper = shallow(<SignUpForm />);
        wrapper.find('#passwordOne').simulate('change', {target: {name: 'passwordOne', value: 'cats'}});

        expect(wrapper.state('passwordOne')).toEqual('cats');
    })
});

describe('PasswordTwo input', () => {

    it('should respond to change event and change the state of the Register Component', () => {

        const wrapper = shallow(<SignUpForm />);
        wrapper.find('#passwordTwo').simulate('change', {target: {name: 'passwordTwo', value: 'cats'}});

        expect(wrapper.state('passwordTwo')).toEqual('cats');
    })
});

describe('email input', () => {

    it('should respond to change event and change the state of the Register Component', () => {

        const wrapper = shallow(<SignUpForm />);
        wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

        expect(wrapper.state('email')).toEqual('blah@gmail.com');
    })
});
