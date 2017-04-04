import React from 'react';
import { Rect } from 'react-konva';

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.rotateBlock(this.props.blockId);
  }

  render() {
    const size = 90;

    return (
      <Rect
        ref="block"
        onClick={ this.handleClick }
        x={ this.props.pos[0] * size }
        y={ this.props.pos[1] * size }
        width={ size }
        height={ size }
        fill="white"
        
        >
      </Rect>
    )
  }
}

export default Block;
