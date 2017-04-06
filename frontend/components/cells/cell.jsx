import React from 'react';
import { Rect } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const size = 70;

    return (
      <Rect
        ref="cell"
        x={ this.props.pos[0] * size }
        y={ this.props.pos[1] * size }
        width={ size }
        height={ size }
        fill="black">
      </Rect>
    );
  }
}

export default Cell;
