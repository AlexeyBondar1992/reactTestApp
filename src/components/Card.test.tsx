import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from './Card';

describe('Card', () => {
    it('should test component creation', () => {
        expect(shallow(<Card />).length).toEqual(1);
    });

    it('should test snapshot to match', () => {
        expect(toJson(shallow(<Card />))).toMatchSnapshot();
    });
});
