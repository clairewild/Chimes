import Block from './block.js';

class Grid {
  constructor(canvas) {
    this.canvas = canvas;
    this.stage = new createjs.Stage("stage");

    this.addBlock = this.addBlock.bind(this);
  }

  addBlock(pos) {
    let options = {
      pos: pos,
      direction: "up",
      stage: this.stage
    }
    let block = new Block(options);
    block.draw();
  }

  run() {

  }
}

export default Grid;
