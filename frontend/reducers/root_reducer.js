import { combineReducers } from 'redux';

import GridReducer from './grid_reducer.js';
import BlockReducer from './block_reducer.js';
import HoverReducer from './hover_reducer.js';
import CollisionReducer from './collision_reducer.js';

const RootReducer = combineReducers({
  cells: GridReducer,
  blocks: BlockReducer,
  hover: HoverReducer,
  collisions: CollisionReducer
});

export default RootReducer;
