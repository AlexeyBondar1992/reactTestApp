import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import CounterButton from './CounterButton';

const mockColor = 'red';

describe('CounterButton', () => {
    it('should test snapshot to match', () => {
        expect(toJson(shallow(<CounterButton color={mockColor}/>))).toMatchSnapshot();
    });

    it('correctly increments the counter', () => {
        const wrapper = shallow(<CounterButton color={mockColor}/>);

        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 1});

        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 2});

        expect(wrapper.props().color).toEqual(mockColor);
    });
});
