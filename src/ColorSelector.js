import React, { Component } from "react";

export default class ColorSelector extends Component {
  makeColorSwatches = () =>
    [
      "#F00",
      "#F80",
      "#FF0",
      "#0F0",
      "#00F",
      "#508",
      "#90D",
      "#FFF",
      "#000"
    ].map((color, idx) => {
      return (
        <div
          key={idx}
          onClick={() => this.props.setCurrentColor(color)}
          className="color-swatch"
          style={{ backgroundColor: color }}
        />
      );
    });

  render() {
    return <div id="colorSelector">{this.makeColorSwatches()}</div>;
  }
}
