import { shallow } from 'enzyme/build';
import toJson from 'enzyme-to-json';
import React from 'react';
import MainPage from './MainPage';

const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
};

let wrapper;

describe('MainPage', () => {
    beforeEach(() => {
        wrapper = shallow(<MainPage { ...mockProps } />);
    });

    it('should render MainPage without errors', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should filter robots correctly', () => {
        const props = {
            ...mockProps,
            searchField: 'j',
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }]
        };
        const wrapper2 = shallow(<MainPage { ...props } />);
        const instance = wrapper2.instance();

        expect(instance.filterRobots()).toEqual([props.robots[0]]);
    });
});
