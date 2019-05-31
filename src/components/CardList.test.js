import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import CardList from './CardList';

const mockRobots = [
    {
        id: 1,
        name: 'John Snow',
        userName: 'JohnJohn',
        email: 'john@gmail.com'
    }
];

describe('CardList', () => {
    it('should test component creation', () => {
        expect(shallow(<CardList robots={mockRobots}/>).length).toEqual(1);
    });

    it('should test snapshot to match', () => {
        expect(toJson(shallow(<CardList robots={mockRobots}/>))).toMatchSnapshot();
    });
});
