export interface Action<T> {
    type?: string;
    payload?: T;
}

export interface IStore {
    searchRobots: IStateSearch;
    requestRobots: IStateRobots;
}

export interface IStateSearch {
    searchField: string;
}

export interface IStateRobots {
    isPending: boolean;
    robots: IRobot[];
    error: string;
}

export interface IRobot {
    name: string;
    id: number;
    email: string;
}