class Grid {
  constructor(canvas) {
    this.canvas = canvas;
    this.stage = new createjs.Stage("stage");
  }

  addBlock(x, y) {
    const block = new createjs.Shape();
    // block.graphics.
    block.x = x;
    block.y = y;
    this.stage.addChild(block);
    this.stage.update();
  }

}
