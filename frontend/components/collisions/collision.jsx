import React from 'react';
import { Rect } from 'react-konva';

class Collision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: new Image()
    }

    this.state.image.src = "http://res.cloudinary.com/dq5kxnx9d/image/upload/v1491778125/dot_jzanxh.png";
  }

  componentDidMount() {
    window.setTimeout(() => this.props.deleteCollision(this.props.pos), 250);
  }

  render() {
    const size = 70;

    return (
      <Rect
        ref="collision"
        x={ this.props.pos[0] * size }
        y={ this.props.pos[1] * size }
        width={ size }
        height={ size }
        fillPatternImage={ this.state.image }>
      </Rect>
    );
  }
}

export default Collision;
