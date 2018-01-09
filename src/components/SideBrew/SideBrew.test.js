import React from 'react';
import {shallow, mount} from 'enzyme';

import { SideBreweries } from './SideBrew';

describe('<SideBreweries />', () => {
	it('Renders without crashing', () => {
		shallow(<SideBreweries />);
	})

	it('Should render side breweries initially', () => {
		const wrapper = shallow(<SideBreweries />);
		expect(wrapper.hasClass('breweryContainer')).toEqual(true);
	})

	it('Renders the name', () => {
		const name = 'foo';
		const wrapper = shallow(<SideBreweries name={name} />)
		expect(wrapper.text()).toEqual(name);
	})

})