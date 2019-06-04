import * as reducers from './reducers';
import { setSearchField } from './actions'
import {REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from './constants';


describe('searchRobots reducer', () => {
    it('should return initial store without input data', () => {
        expect(reducers.searchRobots()).toEqual(reducers.initialStateSearch);
    });

    it('should handle CHANGE_SEARCH_FIELD action', () => {
        const value = 'jacobs';
        expect(reducers.searchRobots(reducers.initialStateSearch, setSearchField(value))).toEqual({
            searchField: value
        });
    });
});

describe('requestRobots reducer', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            userName: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ];

    it('should return initial store without input data', () => {
        expect(reducers.requestRobots()).toEqual(reducers.initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        const action = {type: REQUEST_ROBOTS_PENDING};
        expect(reducers.requestRobots(reducers.initialStateRobots, action)).toEqual({
            ...reducers.initialStateRobots,
            isPending: true
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        const action = {type: REQUEST_ROBOTS_SUCCESS, payload: mockRobots};
        expect(reducers.requestRobots(reducers.initialStateRobots, action)).toEqual({
            ...reducers.initialStateRobots,
            isPending: false,
            robots: action.payload
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        const mockError = new Error('something wrong');
        const action = {type: REQUEST_ROBOTS_FAILED, payload: mockError};
        expect(reducers.requestRobots(reducers.initialStateRobots, action)).toEqual({
            ...reducers.initialStateRobots,
            isPending: false,
            error: action.payload
        });
    });
});