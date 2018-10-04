import React, { Component } from 'react';

export const FancyButton = React.forwardRef((props, ref) =>
  <button ref={ref} onClick={() => alert(`Native button inside FancyButton clicked`)}>{props.children}</button>
);

export class ForwardRefDemo extends Component {
  ref = React.createRef();

  componentDidMount() {
    setTimeout(() => this.ref.current.click(), 1000);
  }

  render() {
    return (
      <FancyButton ref={this.ref}>Click me!</FancyButton>
    );
  }
}
