import React, {Component, ErrorInfo} from 'react';

interface IErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary<P> extends Component<P, IErrorBoundaryState> {
    constructor (props: P) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        this.setState({ hasError: true });
    }

    render () {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>;
        }
        return  this.props.children
    }
}