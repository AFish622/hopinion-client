import React from 'react';
import {shallow, mount} from 'enzyme';

import { myHopinion } from './myHopinion';

describe('<myHopinion />', () => {
	it('Renders without crashing', () => {
		shallow(<myHopinion />);
	})
})