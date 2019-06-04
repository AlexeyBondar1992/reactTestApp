import React, { Component } from 'react';
import {connect, MapDispatchToPropsFunction} from 'react-redux';
import { requestRobots, setSearchField } from '../actions';
import './App.css';
import MainPage, {IMainPageProps, IMapDispatchToProps, IMapSateToProps} from '../components/MainPage';
import {Dispatch} from 'redux';
import {IStore} from '../interfaces';

const mapStateToProps = (state: IStore): IMapSateToProps => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps: MapDispatchToPropsFunction<void, void> = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        onSearchChange:
            (event) => dispatch(setSearchField(event.currentTarget.value)),
        onRequestRobots: () => dispatch(requestRobots() as any)
    };
};

class App extends Component {
    render () {
        return <MainPage {...this.props as IMainPageProps}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
