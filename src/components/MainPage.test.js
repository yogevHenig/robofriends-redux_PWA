//import {shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import MainPage from './MainPage';

let testRenderer;
let testInstance;

beforeEach( () => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	}
	testRenderer = renderer.create(<MainPage { ...mockProps } />);
	testInstance = testRenderer.root;

})

it('renders MainPage without crashing', () => {
	expect(testRenderer.toJSON()).toMatchSnapshot();
})

it('filters robots. correctly', () => {
const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id:3,
			name:'john@gmail.com',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		isPending: false,
	}
	const testRenderer2 = renderer.create(<MainPage { ...mockProps2 } />);
	const testInstance2 = testRenderer2.root;

	expect(testInstance.instance.filterRobots()).toEqual([])
	expect(testInstance2.instance.filterRobots()).toEqual([{
			id:3,
			name:'john@gmail.com',
			email: 'john@gmail.com'
		}])
})

it('pending to robots from the api', () => {
const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true,
	}
	const testRenderer3 = renderer.create(<MainPage { ...mockProps3 } />);
	const testInstance3 = testRenderer3.root;
	expect(testRenderer3.toJSON()).toMatchSnapshot();
})


// yogi test coverage npm test -- --coverage --watchAll=false
