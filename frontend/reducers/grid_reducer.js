import merge from 'lodash/merge';

const gridSize = 9;

const cells = () => {
  let res = [];
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      res.push({
        pos: [x, y]
      });
    }
  }
  return res;
}

const defaultCells = cells();

const GridReducer = (state = defaultCells, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default GridReducer;
