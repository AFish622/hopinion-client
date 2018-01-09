import React from 'react';
import {shallow, mount} from 'enzyme';

import Info from './Info';

describe('<Info />', () => {
	it('Renders without crashing', () => {
		shallow(<Info />);
	})
})