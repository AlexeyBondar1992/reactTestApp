import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';
import {apiCall} from './api/api';
import {Dispatch} from 'redux';

export const setSearchField = (text: string) => ({ type: CHANGE_SEARCH_FIELD, payload: text });

export const requestRobots = () => (dispatch: Dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then(users => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
};