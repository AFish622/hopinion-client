import React from 'react';
import {shallow, mount} from 'enzyme';

import { SideBar } from './SideBar';

describe('<SideBar />', () => {
	it('Renders without crashing', () => {
		shallow(<SideBar />);
	})

	it('Should render the side bar initially', () => {
		const wrapper = shallow(<SideBar />);
		expect(wrapper.hasClass('side-bar')).toEqual(true);
	})
})