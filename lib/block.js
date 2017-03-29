class Block {
  constructor(options) {
    this.pos = options.pos;
    this.direction = options.direction;
    this.stage = options.stage;
  }

  draw() {
    let block = new createjs.Shape();
    block.graphics.beginFill("DarkSkyBlue").drawCircle(0, 0, 50);
    block.x = this.pos[0];
    block.y = this.pos[1];
    this.stage.addChild(block);
    this.stage.update();
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

  isHittingWall() {

  }

  move() {
    let [x, y] = this.pos;
    let [dx, dy] = OFFSETS[this.direction];
    this.pos = [x + dx, y + dy];
  }
}

const OFFSETS = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0]
};

export default Block;
