import React from 'react';
import { Rect } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick() {
    this.props.addBlock(this.props.pos);
  }

  handleMouseEnter() {
    this.props.hover(this.props.pos);
  }

  handleMouseLeave() {
    this.props.hover([null, null]);
  }

  render() {
    const size = 90;

    return (
      <Rect
        ref="cell"
        onClick={ this.handleClick }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
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
