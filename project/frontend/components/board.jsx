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
        fill="black">
      </Rect>
    );
  }
}

export default Board;
