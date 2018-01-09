import React from 'react';
import {shallow, mount} from 'enzyme';

import HopModal from './HopModal';

describe('<HopModal />', () => {
	it('Renders without crashing', () => {
		shallow(<HopModal />);
	})

	it('Should render the HopModal initially', () => {
		const wrapper = shallow(<HopModal />)
		expect(wrapper.hasClass('hopinion-modal')).toEqual(true);
	})
})