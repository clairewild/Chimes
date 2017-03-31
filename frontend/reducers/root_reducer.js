import { combineReducers } from 'redux';

import GridReducer from './grid_reducer.js';
import BlockReducer from './block_reducer.js';

const RootReducer = combineReducers({
  cells: GridReducer,
  blocks: BlockReducer
});

export default RootReducer;
