import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: ""
    };
  }

  //Matrix is the parent component so:
  // We set the initial state of color in matrix

  setCurrentColor = newColor => {
    this.setState({
      selectedColor: newColor
    });
  };

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell selectedColor={this.state.selectedColor} key={idx} color={val} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector setCurrentColor={this.setCurrentColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
