class Block {
  constructor(options) {
    this.pos = options.pos,
    this.direction = options.direction,
    this.grid = options.grid
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "blue";
    ctx.rect(this.pos[0], this.pos[1], Block.size(), Block.size());
    ctx.stroke();
  }

  rotate() {
    switch(this.direction) {
      case "up":
        this.direction = "right";
      case "right":
        this.direction = "down";
      case "down":
        this.direction = "left";
      case "left":
        this.direction = "up";
    }
  }

  rebound() {
    switch(this.direction) {
      case "up":
        this.direction = "down";
      case "down":
        this.direction = "up";
      case "left":
        this.direction = "right";
      case "right":
        this.direction = "left";
    }
  }

  isCollidedWith(otherBlock) {
    return this.pos === otherBlock.pos;
  }

  move() {
    let [x, y] = this.pos;
    let [dx, dy] = OFFSETS[this.direction];

    if (this.grid.isHittingWall(this)) {
      // make a sound, stay in same place
    }
    else {
      this.pos = [x + dx, y + dy];
    }
  }

  static size() {
    return "100";
  }
}

const OFFSETS = {
  up: [0, Block.size()],
  down: [0, -1 * Block.size()],
  left: [-1 * Block.size()],
  right: [Block.size()]
};

export default Block;
