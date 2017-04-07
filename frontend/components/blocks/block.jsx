import React from 'react';
import { Rect } from 'react-konva';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: new Image(),
      dot: new Image()
    }

    this.state.arrow.src = "/../../../assets/images/^.png";
    this.state.dot.src = "/../../../assets/images/dot.png";
  }

  render() {
    const size = 70;
    const image = (this.props.collided) ? (this.state.dot) : (this.state.arrow);
    const rotation = ROTATIONS[this.props.direction];

    return (
      <Rect
        ref="block"
        x={ this.props.pos[0] * size }
        y={ this.props.pos[1] * size }
        width={ size }
        height={ size }
        fillPatternImage={ image }
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
