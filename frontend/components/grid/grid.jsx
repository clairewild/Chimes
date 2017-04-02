import React from 'react';
import { Rect, Stage, Layer } from 'react-konva';

import Board from '../board.jsx';
import CellContainer from '../cells/cell_container.js';
import BlockContainer from '../blocks/block_container.js';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCells() {
    const cells = this.props.cells;
    return (
      cells.map(cell => (
        <CellContainer pos={ cell.pos } key={ cell.pos } />
      ))
    );
  }

  renderBlocks() {
    const blocks = this.props.blocks;
    return (
      blocks.map(block => (
        <BlockContainer pos={ block.pos } direction={ block.direction } key={ block.pos } />
      ))
    );
  }

  renderHover() {
    const size = 90;

    if (this.props.hover[0] !== null && this.props.hover[1] !== null) {
      return (
        <Rect
          ref="hover"
          x={ this.props.hover[0] * size }
          y={ this.props.hover[1] * size }
          width={ size }
          height={ size }
          fill="blue">
        </Rect>
      );
    }
  }

  render() {
    return (
      <Stage width={ 810 } height={ 810 }>
        <Layer>
          <Board width={ 810 } height={ 810 } />
          { this.renderCells() }
          { this.renderBlocks() }
          { this.renderHover() }
        </Layer>
      </Stage>
    );
  }
}

export default Grid;
