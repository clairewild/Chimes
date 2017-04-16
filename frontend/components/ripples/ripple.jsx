import React from 'react';
import { Circle, Group } from 'react-konva';

class Ripple extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const size1 = 1500;
    const size2 = Math.random() * size1;
    const size3 = Math.random() * size2;

    this.refs.ripple1.to({
      width: size1,
      height: size1,
      easing: Konva.Easings.EaseInOut,
      duration: 1.2
    });
    this.refs.ripple2.to({
      width: size2,
      height: size2,
      easing: Konva.Easings.EaseInOut,
      duration: 1.2
    });
    this.refs.ripple3.to({
      width: size3,
      height: size3,
      easing: Konva.Easings.EaseInOut,
      duration: 1.2
    });
    window.setTimeout(() => this.props.deleteRipple(this.props.pos), 1200);
  }

  render() {
    const size = 70;

    return (
      <Group>
        <Circle
          ref="ripple1"
          x={ this.props.pos[0] * size + size / 2 }
          y={ this.props.pos[1] * size + size / 2 }
          radius={ 5 }
          stroke="white"
          strokeWidth={ 1 }>
        </Circle>

        <Circle
          ref="ripple2"
          x={ this.props.pos[0] * size + size / 2 }
          y={ this.props.pos[1] * size + size / 2 }
          radius={ 5 }
          stroke="white"
          strokeWidth={ 1 }>
        </Circle>

        <Circle
          ref="ripple3"
          x={ this.props.pos[0] * size + size / 2 }
          y={ this.props.pos[1] * size + size / 2 }
          radius={ 5 }
          stroke="white"
          strokeWidth={ 1 }>
        </Circle>
      </Group>
    );
  }
}

export default Ripple;
