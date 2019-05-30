import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { requestRobots, setSearchField } from '../actions';
import './App.css';
import Header from '../components/Header';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends Component {
    componentDidMount () {
        this.props.onRequestRobots();
    }

    render () {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots
            .filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        if (isPending) {
            return <h1 className='tc'>Loading</h1>;
        }
        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange} searchfield={searchField}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
