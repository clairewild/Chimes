import React from 'react';
import { Rect, Stage, Layer } from 'react-konva';

import Board from '../board.jsx';
import Cell from '../cells/cell.jsx';
import Block from '../blocks/block.jsx';
import Collision from '../collisions/collision.jsx';
import RippleContainer from '../ripples/ripple_container.js';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: true
    };

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
    this.setState({
      instructions: false
    });

    const pos = this.convertToPos(e);
    const blocks = this.props.blocks;
    const blockKeys = Object.keys(blocks);
    const blockId = blockKeys.filter(key => {
      return blocks[key].pos[0] === pos[0] && blocks[key].pos[1] === pos[1];
    })[0];

    if (blockId) {
      this.props.rotateBlock(blockId);
    }
    else {
      this.props.addBlock(pos);
    }
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
        <Cell pos={ cell.pos } key={ cell.pos } />
      ))
    );
  }

  renderInstructions() {
    if (this.state.instructions) {
      return (
        <div className="instructions">
          <h3><i className="fa fa-music" aria-hidden="true"></i>  Click Here</h3>
          <p>( then press play )</p>
        </div>
      );
    }
  }

  renderBlocks() {
    const blocks = this.props.blocks;
    const blockKeys = Object.keys(blocks);

    return (
      blockKeys.map(key => (
        <Block pos={ blocks[key].pos } direction={ blocks[key].direction } key={ key } />
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

  renderCollisions() {
    const collisions = this.props.collisions;
    const collisionKeys = Object.keys(collisions);

    return (
      collisionKeys.map(key => (
        <Collision pos={ collisions[key].pos } key={ collisions[key].pos } />
      ))
    );
  }

  renderRipples() {
    const ripples = this.props.ripples;
    const rippleKeys = Object.keys(ripples);

    return (
      rippleKeys.map(key => (
        <RippleContainer pos={ ripples[key].pos } key={ ripples[key].pos } />
      ))
    );
  }

  render() {
    return (
      <div className="main">
        { this.renderInstructions() }
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
            { this.renderCollisions() }
            { this.renderRipples() }
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Grid;
