import React from 'react';
import { Rect, Stage, Layer } from 'react-konva';

import Board from '../board.jsx';
import CellContainer from '../cells/cell_container.js';
import BlockContainer from '../blocks/block_container.js';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseOver(e) {
    const pos = this.convertToPos(e);
    this.props.hover(pos);
  }

  handleMouseLeave() {
    this.props.hover([null, null]);
  }

  handleClick(e) {
    const pos = this.convertToPos(e);
    this.props.addBlock(pos);
  }

  convertToPos(e) {
    const pointerPos = e.target.getStage().getPointerPosition();
    const xClick = pointerPos.x;
    const yClick = pointerPos.y;
    const size = 70;
    const x = (xClick - (xClick % size)) / size;
    const y = (yClick - (yClick % size)) / size;
    return [x, y];
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
    const blockKeys = Object.keys(blocks);

    return (
      blockKeys.map(key => (
        <BlockContainer id={ key } pos={ blocks[key].pos } direction={ blocks[key].direction } key={ key } />
      ))
    );
  }

  renderHover() {
    const size = 70;

    if (this.props.hoverPos[0] !== null && this.props.hoverPos[1] !== null) {
      return (
        <Rect
          ref="hover"
          x={ this.props.hoverPos[0] * size }
          y={ this.props.hoverPos[1] * size }
          width={ size }
          height={ size }
          stroke="white"
          strokeWidth={ 1 }>
        </Rect>
      );
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div className="main">
        <Stage
          onMouseOver={ this.handleMouseOver }
          onMouseLeave={ this.handleMouseLeave }
          onClick={ this.handleClick }
          width={ 630 }
          height={ 630 }>
          <Layer>
            <Board width={ 630 } height={ 630 } />
            { this.renderCells() }
            { this.renderBlocks() }
            { this.renderHover() }
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Grid;
