import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Header from './Header';

describe('Card', () => {
    it('should test component creation', () => {
        expect(shallow(<Header />).length).toEqual(1);
    });

    it('should test snapshot to match', () => {
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
