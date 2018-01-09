import React from 'react';
import {shallow, mount} from 'enzyme';

import NavBar from './NavBar';

describe('<NavBar />', () => {
	it('Renders without crashing', () => {
		shallow(<NavBar />);
	})

	it('Should render the Nav Bar initially', () => {
		const wrapper = shallow(<NavBar />);
		expect(wrapper.hasClass('title')).toEqual(true);
	})
})