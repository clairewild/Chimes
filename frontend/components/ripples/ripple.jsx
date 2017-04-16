import React from 'react';
import { Circle, Group } from 'react-konva';

class Ripple extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs.ripple.to({
      width: 500,
      height: 500,
      easing: Konva.Easings.EaseInOut,
      duration: 1
    });
    window.setTimeout(() => this.props.deleteRipple(this.props.pos), 1000);
  }

  render() {
    const size = 70;

    return (
      <Group>
        <Circle
          ref="ripple"
          x={ this.props.pos[0] * size + size / 2 }
          y={ this.props.pos[1] * size }
          radius={ 5 }
          stroke="white"
          strokeWidth={ 2 }>
        </Circle>
      </Group>
    );
  }
}

export default Ripple;
