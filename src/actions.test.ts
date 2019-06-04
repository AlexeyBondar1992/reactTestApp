import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING
} from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
    it('should create an action to search robots', () => {
        const text = 'some boring text for the test';
        expect(actions.setSearchField(text)).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: text
        });
    });

    it('should test requesting robots', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: REQUEST_ROBOTS_PENDING
        })

    });
});
