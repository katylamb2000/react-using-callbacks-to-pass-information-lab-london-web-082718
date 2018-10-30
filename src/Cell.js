import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    });
  };

  render() {
    return (
      <div
        className="cell"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}

//when a cell is clicked it becomes the selected colour.
// color selector provides the UI for selectinf color  and then tell cell about selectted color.
//PArent component Matris keeps track of curent selected color.
// cannot pass information between children compnonents ie ColorSelector and Cell.

//colorSelector has a way to set some selected color in MAtrix.
//cell has a way to know what the current selected color is when clicked.
