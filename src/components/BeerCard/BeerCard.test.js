import React from 'react';
import {shallow, mount} from 'enzyme';

import { BeerCard } from './BeerCard';

describe('<BeerCard />', () => {
	it('Renders without crashing', () => {
		shallow(<BeerCard />);
	})

	it('Should render the beer card initially', () => {
		const wrapper = shallow(<BeerCard />);
		expect(wrapper.hasClass('card-container')).toEqual(true);
	})

})