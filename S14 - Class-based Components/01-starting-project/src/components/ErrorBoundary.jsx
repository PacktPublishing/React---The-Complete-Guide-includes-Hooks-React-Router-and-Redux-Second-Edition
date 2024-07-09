import {Component} from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {hasError: false};
    }

    componentDidCatch(error, errorInfo) {
        console.error(error)
        this.setState({hasError:true});
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary