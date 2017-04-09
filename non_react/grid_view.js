class GameView {
  constructor(grid, ctx) {
    this.grid = grid;
    this.ctx = ctx;

    this.animate = this.animate.bind(this);
  }

  start() {
    this.grid.addBlock([50, 50]); // temporary
    this.grid.draw(this.ctx);
    setInterval(this.animate, 2000); // should happen on button click
  }

  animate() {
    this.grid.step();
    this.grid.draw(this.ctx);
  }
}

export default GameView;
