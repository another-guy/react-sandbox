import React, { Component } from 'react';

export function demo(WrappedComponent, hooks = {}) {
  return class Demo extends Component {
    render() { return <WrappedComponent />; }
  }
}
