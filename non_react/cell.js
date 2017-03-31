import Block from './block.js';

class Cell {
  constructor(options) {
    this.pos = options.pos,
    this.grid = options.grid
  }

  draw(ctx) {
    ctx.fillStyle = "grey";
    ctx.beginPath();

    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], 10, 0, 2 * Math.PI, true
    );
    ctx.fill();
    // ctx.lineWidth = "5";
    // ctx.strokeStyle = "green";
    // ctx.rect(this.pos[0], this.pos[1], Block.size(), Block.size());
    // ctx.stroke();
  }
}

export default Cell;
