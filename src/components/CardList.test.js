import React from 'react';
import CardList from './CardList';
import renderer from 'react-test-renderer';


it('expect to render card component', () => {

	const mockRobots = [
		{
			id:1,
			name: 'john snow',
			username:'johnjohn',
			email: 'john.gmail.com',
		}
	]

	const wrapper = renderer.create(<CardList robots={mockRobots} />).toJSON();
	expect(wrapper).toMatchSnapshot();
})