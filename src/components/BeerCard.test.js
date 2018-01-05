import React from 'react';
import {shallow, mount} from 'enzyme';

import BeerCard from './BeerCard';

describe('<BeerCard />', () => {
	it('Renders without crashing', () => {
		shallow(<BeerCard />);
	})
})