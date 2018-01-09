import React from 'react';
import {shallow, mount} from 'enzyme';

import { BigCard } from './BigCard';

describe('<BigCard />', () => {
	it('Renders without crashing', () => {
		shallow(<BigCard />);
	})

	it('Renders the big card initially', () => {
		const wrapper = shallow(<BigCard />)
		expect(wrapper.hasClass('big-card')).toEqual(true)
	})
})