import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';


it('expect to render card component', () => {
	const wrapper = renderer.create(<Card />).toJSON();
	expect(wrapper).toMatchSnapshot();
})

// to show yogi code coverage: 
 // npm test -- --coverage --watchAll=false
