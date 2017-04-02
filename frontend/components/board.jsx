import React from 'react';
import ReactDOM from 'react-dom';
import { Rect } from 'react-konva';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Rect
        x={ 0 } y={ 0 }
        width={ this.props.width } height={ this.props.height }
        fill={ '#0A0B1A' }>
      </Rect>
    );
  }
}

export default Board;
