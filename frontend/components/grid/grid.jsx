import React from 'react';
import { Stage, Layer } from 'react-konva';

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

  render() {
    return (
      <Stage width={ 1000 } height={ 1000 } >
        <Layer>
          <div className="grid-background">
            { this.renderCells() }
            { this.renderBlocks() }
            <p>This is the grid</p>
          </div>
        </Layer>
      </Stage>
    );
  }
}

export default Grid;
