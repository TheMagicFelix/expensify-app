import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFoundPage from '../../components/NotFoundPage';

configure({ adapter: new Adapter() });

test('should render NotFoundPage correctly', () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
