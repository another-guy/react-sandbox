import React, { Component } from 'react';

const DataSource = {
  animals: ['Cat', 'Dog', 'Sheep'],
  plants: ['Apple', 'Chestnut', 'Rose'],
};

export function asTable(WrappedComponent, componentContext) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { data: DataSource[componentContext.dataField] };
    }

    render() {
      return (
        <div>
          <h2>{componentContext.title}</h2>
          { this.state.data.map((item, index) => <WrappedComponent key={index} dataItem={item} />) }
        </div>
      );
    }
  }
}

export class Animal extends Component {
  render() { return <div>{ this.props.dataItem }</div>; }
}

export class Plant extends Component {
  render() { return <div>{ this.props.dataItem }</div>; }
}

const AnimalTable = asTable(Animal, { title: 'ANIMALS:', dataField: 'animals' });
const PlantTable = asTable(Plant, { title: 'PLANTS:', dataField: 'plants' });

export class HigherOrderComponentDemo extends Component {
  render() {
    return (
      <div>
        <AnimalTable />
        <PlantTable />
      </div>
    );
  }
}
