import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';
import {Action, IStateRobots, IStateSearch} from './interfaces';


export const initialStateSearch: IStateSearch = {
    searchField: ''
};
export const initialStateRobots: IStateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

export const searchRobots = (state: IStateSearch = initialStateSearch, action: Action<any>): IStateSearch => {
    switch (action && action.type) {
    case CHANGE_SEARCH_FIELD:
        return { ...state, searchField: action.payload };
    default:
        return state;
    }
};

export const requestRobots = (state: IStateRobots = initialStateRobots, action: Action<any> = {}): IStateRobots => {
    switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
        return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
        return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
        return { ...state, isPending: false, error: action.payload };
    default:
        return state;
    }
};
