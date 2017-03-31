import React from 'react';
import { Rect } from 'react-konva';

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // rotate, change this.props.direction
  }

  render() {
    return (
      <Rect
        onClick={ this.handleClick }
        width={ 100 }
        height={ 100 }
        fill="white">
      </Rect>
    )
  }
}

export default Block;
