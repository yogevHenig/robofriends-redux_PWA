import React from 'react';
import CounterButton from './CounterButton';
import renderer from 'react-test-renderer';
import {shallow } from 'enzyme';

it('expect to render card component', () => {
	const mockColor = 'red';
	const wrapper = renderer.create(<CounterButton color={mockColor} />).toJSON();
	expect(wrapper).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);
	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.state()).toEqual({ count: 3 });
	expect(wrapper.props().color).toEqual('red');
})

