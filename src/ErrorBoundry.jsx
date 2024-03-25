import React from "react";
import {WarningIcon} from "./icons/warning.jsx";

export class TodolistErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: ""};
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({errorMsg: errorInfo})
  }

  render() {
    if (this.state.hasError) {
      return (
          <div>
            <h1>{this.props.msg}</h1>
            <WarningIcon height={100} width={100} fill={'red'}/>
            <button onClick={() => window.location.reload()}>רענן</button>
          </div>
      );
    }

    return this.props.children;
  }
}
