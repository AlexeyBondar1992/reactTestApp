import React, { Component } from 'react';

interface ICounterButtonProps {
    color: string;
}

interface ICounterButtonState {
    count: number;
}

class CounterButton extends Component<ICounterButtonProps, ICounterButtonState> {
    constructor (props: ICounterButtonProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    shouldComponentUpdate (nextProps: ICounterButtonProps, nextState: ICounterButtonState, nextContext: any) {
        return nextState.count !== this.state.count;
    }

    updateCount = () => {
        this.setState(state => ({count: state.count + 1}))
    };

    render () {
        return (
            <button color={this.props.color} onClick={this.updateCount} id="counter">
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;