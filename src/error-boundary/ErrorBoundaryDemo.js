import React, { Component } from 'react';

export class FailingComponent extends Component {
  render() {
    throw new Error(`ooopsie`);
    return <span>Nope</span>;
  }  
}

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.info({ error, info });
  }

  render() {
    if (this.state.hasError)
      return <h1>See Browser Console For Error Details</h1>;
    return this.props.children;
  }
}

export class ErrorBoundaryDemo extends Component {
  render() {
    return <ErrorBoundary><FailingComponent /></ErrorBoundary>;
  }
}
