import Block from './block.js';
import Cell from './cell.js';

class Grid {
  constructor() {
    this.cells = [];
    this.blocks = [];

    this.addCells();
  }

  addCells() {
    const size = parseInt(Block.size());
    let x = 0;
    while (x < DIM_X - size) {
      let y = parseInt(size);
      while (y < DIM_Y) {
        let options = {
          pos: [x, y],
          grid: this
        }
        this.cells.push(new Cell(options));
        y += size;
      }
      x += size;
    }
  }

  addBlock(pos) {
    let options = {
      pos: pos,
      direction: "up",
      grid: this
    }
    let block = new Block(options);
    this.blocks.push(block);
  }

  checkCollisions() {
    for (let i = 0; i < this.blocks.length; i++) {
      for (let j = i + 1; j < this.blocks.length; j++) {
        const block1 = this.blocks[i];
        const block2 = this.blocks[j];

        if (block1.isCollidedWith(block2)) {
          block1.rotate();
          block2.rotate();
        }
      }
    }
  }

  isHittingWall(block) {
    const x = block.pos[0];
    const y = block.pos[1];
    return (x === 0) || (x === DIM_X - Block.size()) ||
      (y === DIM_Y) || (y === Block.size());
  }

  draw(ctx) {
    debugger;
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, DIM_X, DIM_Y);

    this.cells.forEach(cell => cell.draw(ctx));
    this.blocks.forEach(block => block.draw(ctx));
  }

  moveBlocks() {
    this.blocks.forEach(block => block.move());
  }

  step() {
    this.moveBlocks();
    this.checkCollisions();
    // play sounds
  }
}

const BG_COLOR = "#000000";
const DIM_X = 1000;
const DIM_Y = 1000;

export default Grid;
