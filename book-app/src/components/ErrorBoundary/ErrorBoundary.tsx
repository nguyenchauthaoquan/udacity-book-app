import React, { Component } from "react";
import { ErrorBoundaryProps } from "../../models/components/props";
import { ErrorBoundaryState } from "../../models/components/state";
import axios from "axios";


export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
    }

    componentDidMount() {
        axios.interceptors.response.use(
            (response) => response,
            (error: Error) => {
                console.log(error)
                this.setState({ errorMessage: error.message, hasError: true });
            }
        )

    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        console.log(error)
        return { errorMessage: error.message, hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo)
        this.setState({ errorMessage: error.message, hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        }

        return this.props.children;
    }
}