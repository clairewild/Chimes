import React from 'react';
import merge from 'lodash/merge';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.oneStep = this.oneStep.bind(this);
    this.isCollided = this.isCollided.bind(this);
    this.isHittingWall = this.isHittingWall.bind(this);
  }

  componentDidUpdate() {

  }

  oneStep() {
    const blocks = this.props.blocks;
    const blockKeys = Object.keys(blocks);
    let block;

    blockKeys.forEach(key => {
      block = blocks[key];

      if (this.isCollided(blocks, blockKeys, block)) {
        this.props.rotateBlock(block.id);
      }
      else if (this.isHittingWall(block)) {
        this.props.reverseBlock(block.id)
      }
      this.props.moveBlock(block.id);
    });
  }

  isCollided(blocks, blockKeys, block) {
    let x = block.pos[0];
    let y = block.pos[1];
    blockKeys.forEach(key => {
      if (key !== block.id) {
        if (blocks[key].pos[0] === x && blocks[key].pos[1] === y) {
          return true;
        }
      }
    });
    return false;
  }

  isHittingWall(block) {
    let x = block.pos[0];
    let y = block.pos[1];
    return (x === 0 || x === 8 || y === 0 || y === 8);
  }

  render() {
    return (
      <div className="sidebar">
        <p>This is the sidebar!</p>
        <button onClick={ this.oneStep }>Play Temp Button</button>
      </div>
    )
  }
}

export default Sidebar;
