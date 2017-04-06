import React from 'react';
import { Rect } from 'react-konva';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: new Image()
    }
    
    this.state.image.src = "/../../../assets/images/^.png";
  }

  render() {
    const size = 70;
    const rotation = ROTATIONS[this.props.direction];

    return (
      <Rect
        ref="block"
        x={ this.props.pos[0] * size }
        y={ this.props.pos[1] * size }
        width={ size }
        height={ size }
        fillPatternImage={ this.state.image }
        fillPatternRotation={ rotation }>
      </Rect>
    );
  }
}

const ROTATIONS = {
  "up": 0,
  "right": 90,
  "down": 180,
  "left": 270
};

export default Block;
