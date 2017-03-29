class GameView {
  constructor(grid) {
    this.grid = grid;
  }

  start() {
    this.grid.addBlock([100, 100]);  // this should create event handlers for grid and buttons, etc.
  }
}

export default GameView;
