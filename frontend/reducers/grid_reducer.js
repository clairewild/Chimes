const gridSize = 9;

const grid = Object.freeze({
  cells: (function() {
    let res = [];
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        res.push({
          pos: [x, y]
        });
      }
    }
    return res;
  }())
})

const GridReducer = (state = grid.cells, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default GridReducer;
