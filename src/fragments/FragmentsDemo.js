import React, { Component, Fragment } from 'react';

export class TDFragments extends Component {
  render() {
    return (
      <React.Fragment>
        { this.props.itemList.map((item, index) => <td key={index}>{item}</td>) }
      </React.Fragment>
    );
  }
}

export class FragmentsDemo extends Component {
  render() {
    return (
      <table>
        <tr>
          <TDFragments itemList={[1, 2, 3, 4, 5]} />
        </tr>
      </table>
    );
  }
}
