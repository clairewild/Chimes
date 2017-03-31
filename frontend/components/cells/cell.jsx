import React from 'react';
import { Rect } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addBlock(this.props.pos);
  }

  render() {
    return (
      <Rect
        onClick={ this.handleClick }
        width={ 100 }
        height={ 100 }
        fill="blue">
      </Rect>
    );
  }
}

export default Cell;
// x and y for cells?
