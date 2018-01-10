import React from 'react';
import {shallow, mount} from 'enzyme';

import HopModal from './HopModal';

describe('<HopModal />', () => {
	it('Renders without crashing', () => {
		shallow(<HopModal />);
	})

})