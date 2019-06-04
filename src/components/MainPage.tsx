import React, {Component, ReactNode} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';
import {IStateRobots, IStateSearch} from '../interfaces';

export interface IMainPageProps extends IMapSateToProps, IMapDispatchToProps {
    children?: ReactNode;
}

export interface IMapSateToProps extends IStateSearch, IStateRobots {
}

export interface IMapDispatchToProps {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    onRequestRobots: () => void;
}

class MainPage extends Component<IMainPageProps> {
    componentDidMount () {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots
            .filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
    };

    render () {
        const { onSearchChange, isPending } = this.props;
        if (isPending) {
            return <h1 className='tc'>Loading</h1>;
        }
        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filterRobots()}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default MainPage;
